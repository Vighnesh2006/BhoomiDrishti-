import React, { useState, useEffect } from 'react';
import MapComponent from '../components/MapComponent';
import { MOCK_PARCELS } from '../data/mockParcels';
import { Search, ChevronDown, MapPin, ChevronRight } from 'lucide-react';

export default function GisExplorerPage({ navigate, initialUlpin }) {
  const [searchQuery, setSearchQuery] = useState(initialUlpin || 'MH-PUN-001245-6789');
  const [searchType, setSearchType] = useState('ULPIN');
  const [selectedParcel, setSelectedParcel] = useState(null);

  useEffect(() => {
    const query = (initialUlpin || 'MH-PUN-001245').split('-')[0] + '-' + (initialUlpin || 'MH-PUN-001245').split('-')[1] + '-' + (initialUlpin || 'MH-PUN-001245').split('-')[2];
    const match = MOCK_PARCELS.find(p => p.ulpin.toLowerCase().includes('1245')) || MOCK_PARCELS[0];
    setSelectedParcel(match);
  }, [initialUlpin]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const match = MOCK_PARCELS.find(p => p.ulpin.toLowerCase().includes(searchQuery.toLowerCase().trim())) || MOCK_PARCELS[0];
    setSelectedParcel(match);
  };

  const handleOpenDigitalTwin = (parcel) => {
    navigate(`/parcel/${parcel.ulpin}`);
  };

  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#F8FAFC', minHeight: '100%' }}>
      {/* Search Header Container */}
      <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1.25rem 1.5rem', marginBottom: '1.25rem', boxShadow: '0 1px 3px rgba(0,0,0,0.02)' }}>
        <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.2rem' }}>
          Search Parcel
        </h1>
        <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '1rem' }}>
          Search by ULPIN, Survey Number or Owner Name
        </p>

        {/* Search Bar Input Group */}
        <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '0.5rem', maxWidth: '680px' }}>
          <select 
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            style={{ 
              width: '110px', 
              padding: '0.6rem 0.75rem', 
              border: '1px solid #E2E8F0', 
              borderRadius: '6px', 
              fontSize: '0.88rem', 
              fontWeight: 600, 
              color: '#0F172A',
              backgroundColor: '#F8FAFC',
              cursor: 'pointer'
            }}
          >
            <option value="ULPIN">ULPIN</option>
            <option value="SURVEY">Survey No</option>
            <option value="OWNER">Owner</option>
          </select>

          <input
            type="text"
            className="input-field"
            placeholder="Enter ULPIN (e.g. MH-PUN-001245-6789)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ flex: 1, height: '42px' }}
          />

          <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#1D4ED8', padding: '0.6rem 1.5rem', borderRadius: '6px' }}>
            Search
          </button>
        </form>
      </div>

      {/* GIS Full Satellite Map Area */}
      <div style={{ height: '560px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
        <MapComponent
          parcels={MOCK_PARCELS}
          selectedParcel={selectedParcel}
          onSelectParcel={(p) => setSelectedParcel(p)}
          onOpenDigitalTwin={handleOpenDigitalTwin}
          baseMap="satellite"
        />

        {/* Overlay Label matching Mockup bottom-left panel */}
        {selectedParcel && (
          <div style={{
            position: 'absolute',
            top: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#FFFFFF',
            border: '1px solid #1D4ED8',
            borderRadius: '6px',
            padding: '0.5rem 1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 700 }}>SELECTED ULPIN PARCEL</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#1D4ED8' }}>
                ULPIN MH-PUN-001245-6789
              </div>
            </div>

            <button 
              className="btn btn-sm btn-primary"
              onClick={() => handleOpenDigitalTwin(selectedParcel)}
              style={{ backgroundColor: '#1D4ED8' }}
            >
              Open Digital Twin →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
