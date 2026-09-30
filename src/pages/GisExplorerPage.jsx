import React, { useState, useEffect } from 'react';
import MapComponent from '../components/MapComponent';
import { MOCK_PARCELS } from '../data/mockParcels';
import { Search, MapPin, Filter, Layers, ArrowRight, AlertTriangle, CheckCircle2, ChevronRight, Compass } from 'lucide-react';

export default function GisExplorerPage({ navigate, initialUlpin }) {
  const [searchQuery, setSearchQuery] = useState(initialUlpin || '');
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [baseMap, setBaseMap] = useState('satellite');

  useEffect(() => {
    if (initialUlpin) {
      const match = MOCK_PARCELS.find(p => p.ulpin.toLowerCase() === initialUlpin.toLowerCase());
      if (match) {
        setSelectedParcel(match);
      }
    } else {
      setSelectedParcel(MOCK_PARCELS[0]);
    }
  }, [initialUlpin]);

  // Filter parcels based on search and status dropdown
  const filteredParcels = MOCK_PARCELS.filter(p => {
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery = query === '' || 
      p.ulpin.toLowerCase().includes(query) ||
      p.surveyNo.toLowerCase().includes(query) ||
      p.village.toLowerCase().includes(query) ||
      p.owner.toLowerCase().includes(query) ||
      p.district.toLowerCase().includes(query);

    if (!matchesQuery) return false;

    if (filterStatus === 'VERIFIED') return p.verificationStatus === 'VERIFIED';
    if (filterStatus === 'ISSUES') return p.verificationStatus === 'ISSUES_DETECTED';
    if (filterStatus === 'CHANGES') return p.statusSummary.satelliteChange === 'ALERT';

    return true;
  });

  const handleOpenDigitalTwin = (parcel) => {
    navigate(`/parcel/${parcel.ulpin}`);
  };

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - var(--topbar-height) - 37px)', width: '100%', overflow: 'hidden' }}>
      {/* Left Sidebar Panel */}
      <div style={{ 
        width: '360px', 
        backgroundColor: '#FFFFFF', 
        borderRight: '1px solid #D0D5DD', 
        display: 'flex', 
        flexDirection: 'column',
        zIndex: 500,
        boxShadow: '2px 0 8px rgba(0,0,0,0.05)'
      }}>
        {/* Sidebar Header & Search */}
        <div style={{ padding: '1rem', borderBottom: '1px solid #EAECF0', backgroundColor: '#063B6D', color: '#FFFFFF' }}>
          <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#93C5FD', fontWeight: 700 }}>
            GIS Parcel Explorer
          </div>
          <div style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            State Land Records Map
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative' }}>
            <Search size={16} color="#667085" style={{ position: 'absolute', left: '10px', top: '10px' }} />
            <input
              type="text"
              placeholder="Search ULPIN, Survey No, Village, Owner..."
              className="input-field"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '32px', fontSize: '0.82rem' }}
            />
          </div>

          {/* Quick Demo Search Chips */}
          <div style={{ marginTop: '0.6rem', display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.7rem', color: '#93C5FD', alignSelf: 'center' }}>Demo ULPINs:</span>
            <button 
              onClick={() => { setSearchQuery('MH-PUN-001245'); }} 
              style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', border: 'none', padding: '0.15rem 0.4rem', borderRadius: '3px', fontSize: '0.7rem', cursor: 'pointer' }}
            >
              MH-PUN-001245 (Flagged)
            </button>
            <button 
              onClick={() => { setSearchQuery('MH-PUN-001246'); }} 
              style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', border: 'none', padding: '0.15rem 0.4rem', borderRadius: '3px', fontSize: '0.7rem', cursor: 'pointer' }}
            >
              MH-PUN-001246 (Verified)
            </button>
          </div>
        </div>

        {/* Filter Controls & Base Map Switcher */}
        <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #EAECF0', backgroundColor: '#F8FAFC', display: 'flex', gap: '0.5rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: '0.7rem', fontWeight: 600, color: '#667085', display: 'block', marginBottom: '0.2rem' }}>Filter Status:</label>
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
              className="input-field" 
              style={{ padding: '0.3rem 0.5rem', fontSize: '0.78rem' }}
            >
              <option value="ALL">All 50 Demo Parcels</option>
              <option value="VERIFIED">✓ Fully Verified (35)</option>
              <option value="ISSUES">⚠ Data Discrepancy (8)</option>
              <option value="CHANGES">🚨 Satellite Alerts (4)</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.7rem', fontWeight: 600, color: '#667085', display: 'block', marginBottom: '0.2rem' }}>Base Layer:</label>
            <select 
              value={baseMap} 
              onChange={(e) => setBaseMap(e.target.value)}
              className="input-field" 
              style={{ padding: '0.3rem 0.5rem', fontSize: '0.78rem' }}
            >
              <option value="satellite">Satellite View</option>
              <option value="streets">Cadastral Streets</option>
              <option value="topo">Topographic</option>
            </select>
          </div>
        </div>

        {/* List of matching parcels */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '0.5rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#667085', padding: '0.3rem 0.5rem', textTransform: 'uppercase' }}>
            Found {filteredParcels.length} Parcels in Study Area
          </div>

          {filteredParcels.map((parcel) => {
            const isSelected = selectedParcel && selectedParcel.id === parcel.id;
            return (
              <div
                key={parcel.id}
                onClick={() => setSelectedParcel(parcel)}
                style={{
                  padding: '0.75rem',
                  border: `1px solid ${isSelected ? '#0757A0' : '#EAECF0'}`,
                  borderRadius: '6px',
                  marginBottom: '0.5rem',
                  backgroundColor: isSelected ? '#EAF4FC' : '#FFFFFF',
                  cursor: 'pointer',
                  transition: 'all 0.12s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#063B6D' }}>
                    {parcel.ulpin}
                  </div>
                  {parcel.verificationStatus === 'VERIFIED' ? (
                    <span className="status-pill success" style={{ fontSize: '0.68rem', padding: '0.1rem 0.4rem' }}>Verified</span>
                  ) : (
                    <span className="status-pill warning" style={{ fontSize: '0.68rem', padding: '0.1rem 0.4rem' }}>{parcel.issues.length} Issues</span>
                  )}
                </div>

                <div style={{ fontSize: '0.78rem', color: '#475467', marginTop: '0.2rem' }}>
                  Survey No: <strong>{parcel.surveyNo}</strong> | {parcel.village}
                </div>

                <div style={{ fontSize: '0.75rem', color: '#667085', marginTop: '0.2rem' }}>
                  Area: <strong>{parcel.area}</strong> | Use: {parcel.landUse}
                </div>

                {isSelected && (
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDigitalTwin(parcel);
                    }}
                    style={{ width: '100%', marginTop: '0.5rem', fontSize: '0.78rem' }}
                  >
                    Open Digital Twin <ChevronRight size={14} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Full GIS Map Display */}
      <div style={{ flex: 1, position: 'relative' }}>
        <MapComponent
          parcels={filteredParcels}
          selectedParcel={selectedParcel}
          onSelectParcel={(parcel) => setSelectedParcel(parcel)}
          onOpenDigitalTwin={handleOpenDigitalTwin}
          baseMap={baseMap}
        />

        {/* Map Legend Overlay */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid #D0D5DD',
          borderRadius: '6px',
          padding: '0.75rem 1rem',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          fontSize: '0.78rem'
        }}>
          <div style={{ fontWeight: 700, color: '#063B6D', marginBottom: '0.4rem' }}>GIS Layer Legend</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '14px', height: '14px', backgroundColor: 'rgba(22, 128, 60, 0.5)', border: '1.5px solid #16803C', borderRadius: '2px' }}></span>
              <span>Verified Parcel (Record Matched)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '14px', height: '14px', backgroundColor: 'rgba(216, 137, 0, 0.5)', border: '1.5px dashed #D88900', borderRadius: '2px' }}></span>
              <span>Data Inconsistency Flagged</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '14px', height: '14px', backgroundColor: 'rgba(198, 40, 40, 0.5)', border: '2px solid #C62828', borderRadius: '2px' }}></span>
              <span>Satellite Change Alert (Geo-AI)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
