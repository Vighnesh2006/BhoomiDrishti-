import React, { useState } from 'react';
import { MOCK_PARCELS } from '../data/mockParcels';
import { 
  AlertTriangle, 
  Eye, 
  Calendar, 
  Layers, 
  ShieldAlert, 
  GitPullRequest, 
  ArrowRight, 
  Info,
  CheckCircle2,
  Activity
} from 'lucide-react';

export default function SpatialChangePage({ navigate }) {
  const [selectedUlpin, setSelectedUlpin] = useState('MH-PUN-001245');
  const parcel = MOCK_PARCELS.find(p => p.ulpin === selectedUlpin) || MOCK_PARCELS[0];

  return (
    <div className="content-container">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <AlertTriangle size={24} color="#C62828" /> Spatial Change Detection & Geo-AI Temporal Analysis
          </h1>
          <p className="page-subtitle">
            Satellite imagery comparison across time baselines to detect unpermitted construction and land-use shifts.
          </p>
        </div>
      </div>

      {/* Prototype Simulated API Notice */}
      <div className="alert alert-warning" style={{ marginBottom: '1.25rem' }}>
        <Info size={18} />
        <div>
          <strong>Prototype Simulation Notice:</strong> High-resolution optical satellite imagery temporal scan is simulated using Sentinel-2 dataset snapshots. Geo-AI anomaly flags serve as administrative alerts and do NOT constitute legal conclusions.
        </div>
      </div>

      {/* Parcel Selector Banner */}
      <div className="card" style={{ marginBottom: '1.25rem', padding: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.78rem', color: '#667085', fontWeight: 700 }}>SELECT PARCEL FOR TEMPORAL COMPARISON:</span>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#063B6D', marginTop: '0.1rem' }}>
              ULPIN: {parcel.ulpin} (Survey No: {parcel.surveyNo} — {parcel.village})
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              className={`btn btn-sm ${selectedUlpin === 'MH-PUN-001245' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedUlpin('MH-PUN-001245')}
            >
              MH-PUN-001245 (Change Alert)
            </button>
            <button 
              className={`btn btn-sm ${selectedUlpin === 'MH-PUN-001246' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedUlpin('MH-PUN-001246')}
            >
              MH-PUN-001246 (Baseline)
            </button>
          </div>
        </div>
      </div>

      {/* Side-by-Side Satellite Viewers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
        {/* Baseline 2023 Viewer */}
        <div className="card">
          <div className="card-header" style={{ backgroundColor: '#063B6D', color: '#FFFFFF' }}>
            <span className="card-title" style={{ color: '#FFFFFF', fontSize: '0.9rem' }}>
              <Eye size={16} /> Satellite / Spatial View — Baseline (Year 2023)
            </span>
            <span className="status-pill success" style={{ fontSize: '0.68rem' }}>Verified Baseline</span>
          </div>
          <div className="card-body" style={{ padding: '1.25rem', backgroundColor: '#F8FAFC' }}>
            {/* Simulated Satellite Canvas Representation */}
            <div style={{
              height: '240px',
              backgroundColor: '#2D3748',
              borderRadius: '6px',
              border: '2px solid #4A5568',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Background texture simulation */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.3, background: 'radial-gradient(circle, #48BB78 10%, transparent 11%)', backgroundSize: '15px 15px' }}></div>
              <div style={{ width: '180px', height: '140px', border: '2px solid #48BB78', background: 'rgba(72, 187, 120, 0.2)', borderRadius: '4px', position: 'relative' }}>
                <span style={{ position: 'absolute', bottom: '6px', left: '6px', color: '#FFFFFF', fontSize: '0.72rem', background: 'rgba(0,0,0,0.6)', padding: '0.1rem 0.4rem', borderRadius: '3px' }}>
                  Open Vacant Parcel (2.35 Ha)
                </span>
              </div>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#667085', marginTop: '0.75rem', textAlign: 'center' }}>
              Source: High-Resolution Optical Satellite Scan (12 March 2023)
            </div>
          </div>
        </div>

        {/* Current 2026 Viewer */}
        <div className="card">
          <div className="card-header" style={{ backgroundColor: '#C62828', color: '#FFFFFF' }}>
            <span className="card-title" style={{ color: '#FFFFFF', fontSize: '0.9rem' }}>
              <AlertTriangle size={16} /> Satellite / Spatial View — Scan (Year 2026)
            </span>
            <span className="status-pill danger" style={{ backgroundColor: '#FDE8E8', color: '#C62828' }}>Change Flagged</span>
          </div>
          <div className="card-body" style={{ padding: '1.25rem', backgroundColor: '#F8FAFC' }}>
            {/* Simulated Satellite Canvas with Red Built-up Footprint */}
            <div style={{
              height: '240px',
              backgroundColor: '#2D3748',
              borderRadius: '6px',
              border: '2px solid #C62828',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.3, background: 'radial-gradient(circle, #48BB78 10%, transparent 11%)', backgroundSize: '15px 15px' }}></div>
              <div style={{ width: '180px', height: '140px', border: '2px solid #48BB78', background: 'rgba(72, 187, 120, 0.2)', borderRadius: '4px', position: 'relative' }}>
                {/* Red Footprint for New Structure */}
                {selectedUlpin === 'MH-PUN-001245' && (
                  <div style={{
                    position: 'absolute',
                    top: '25px',
                    left: '35px',
                    width: '65px',
                    height: '55px',
                    background: 'rgba(198, 40, 40, 0.7)',
                    border: '2px dashed #FFCDD2',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textAlign: 'center'
                  }}>
                    +420 m² Built-up
                  </div>
                )}
              </div>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#667085', marginTop: '0.75rem', textAlign: 'center' }}>
              Source: High-Resolution Scan (15 September 2026)
            </div>
          </div>
        </div>
      </div>

      {/* Geo-AI Detection Rationale Box */}
      <div className="card card-blue" style={{ marginBottom: '1.5rem', border: '1.5px solid #C62828' }}>
        <div className="card-header" style={{ backgroundColor: '#C62828', color: '#FFFFFF' }}>
          <span className="card-title" style={{ color: '#FFFFFF' }}>
            <ShieldAlert size={18} /> Geo-AI Temporal Anomaly Analysis Rationale
          </span>
          <span className="status-pill danger" style={{ backgroundColor: '#FFFFFF', color: '#C62828' }}>
            ACTION REQUIRED
          </span>
        </div>

        <div className="card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: '0.85rem', marginBottom: '1rem' }}>
            <div>
              <span style={{ color: '#667085' }}>Target Parcel:</span> <br/>
              <strong style={{ fontSize: '1rem', color: '#063B6D' }}>{parcel.ulpin}</strong>
            </div>
            <div>
              <span style={{ color: '#667085' }}>Change Classification:</span> <br/>
              <strong style={{ color: '#C62828' }}>New Built-up Structure Expansion</strong>
            </div>
            <div>
              <span style={{ color: '#667085' }}>AI Detection Confidence:</span> <br/>
              <strong>87% Neural Net Classification</strong>
            </div>
            <div>
              <span style={{ color: '#667085' }}>Detected Structure Extent:</span> <br/>
              <strong>420 sq. m. Footprint</strong>
            </div>
          </div>

          {/* Cross Check Result */}
          <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '6px', border: '1px solid #D0D5DD', marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#063B6D', marginBottom: '0.5rem' }}>
              Multi-Source Cross-Check Result:
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.8rem' }}>
              <div>• Municipal Building Permission: <span style={{ color: '#C62828', fontWeight: 700 }}>Not Found in Prototype Records</span></div>
              <div>• PMRDA Zoning Plan: <span style={{ color: '#063B6D', fontWeight: 700 }}>Residential Zone R-2</span></div>
            </div>
            <div style={{ marginTop: '0.75rem', padding: '0.5rem', background: '#FDE8E8', border: '1px solid #FFCDD2', borderRadius: '4px', color: '#C62828', fontWeight: 800, fontSize: '0.9rem', textAlign: 'center' }}>
              RESULT: POTENTIAL ANOMALY — REQUIRES OFFICIAL VERIFICATION
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
            <button className="btn btn-primary" onClick={() => navigate('/workflows')}>
              <GitPullRequest size={15} /> Create Officer Inspection Workflow
            </button>
          </div>
        </div>
      </div>

      {/* PARCEL CHANGE TIMELINE */}
      <div className="card">
        <div className="card-header">
          <span className="card-title">
            <Calendar size={18} color="#0757A0" /> Parcel Lifecycle & Change History Timeline
          </span>
        </div>

        <div className="card-body">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', paddingLeft: '1.5rem', borderLeft: '3px solid #0757A0' }}>
            {parcel.timeline.map((event, idx) => (
              <div key={idx} style={{ position: 'relative' }}>
                {/* Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: '-31px',
                  top: '2px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: idx === parcel.timeline.length - 1 ? '#C62828' : '#0757A0',
                  border: '2px solid #FFFFFF'
                }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#063B6D' }}>
                    {event.event} ({event.year})
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#667085', fontWeight: 600 }}>{event.date}</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#475467', marginTop: '0.2rem' }}>
                  {event.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
