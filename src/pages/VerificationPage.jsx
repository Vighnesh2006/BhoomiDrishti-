import React, { useState } from 'react';
import { MOCK_PARCELS } from '../data/mockParcels';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Filter, 
  Layers, 
  ShieldAlert, 
  ArrowRight, 
  GitPullRequest,
  Check,
  Search,
  Database,
  Info
} from 'lucide-react';

export default function VerificationPage({ navigate }) {
  const [selectedSeverity, setSelectedSeverity] = useState('ALL');
  const [activeParcelId, setActiveParcelId] = useState('1245');

  // Collect all flagged issues across demo parcels
  const allIssues = MOCK_PARCELS.flatMap(p => 
    p.issues.map(iss => ({ ...iss, parcel: p }))
  );

  const filteredIssues = allIssues.filter(iss => {
    if (selectedSeverity === 'ALL') return true;
    return iss.severity === selectedSeverity;
  });

  const activeParcel = MOCK_PARCELS.find(p => p.id === activeParcelId) || MOCK_PARCELS[0];

  const consistencyRules = [
    { id: 'RULE-01', name: 'Parcel Area Mismatch', desc: 'Compares Cadastral GIS area with 7/12 RoR and Deed registered area.', status: 'ACTIVE' },
    { id: 'RULE-02', name: 'Owner Name Mismatch', desc: 'Cross-checks mutated Khata holders against recent Sub-Registrar sale deeds.', status: 'ACTIVE' },
    { id: 'RULE-03', name: 'Survey Number Mismatch', desc: 'Verifies Hissa sub-division consistency across revenue records.', status: 'ACTIVE' },
    { id: 'RULE-04', name: 'Land-Use Mismatch', desc: 'Reconciles 7/12 crop category with Municipal Master Plan Zoning.', status: 'ACTIVE' },
    { id: 'RULE-05', name: 'Registration Status Mismatch', desc: 'Flags unrecorded title conveyances or pending stamp duty claims.', status: 'ACTIVE' },
    { id: 'RULE-06', name: 'Building Permission Mismatch', desc: 'Cross-references Geo-AI satellite footprints with municipal building sanctions.', status: 'ACTIVE' },
    { id: 'RULE-07', name: 'Property Tax Status Mismatch', desc: 'Verifies tax assessment land area against cadastral boundaries.', status: 'ACTIVE' },
    { id: 'RULE-08', name: 'Missing / Omitted Record', desc: 'Flags missing 14-digit ULPIN links in legacy registration documents.', status: 'ACTIVE' },
    { id: 'RULE-09', name: 'Duplicate Parcel ID Alert', desc: 'Detects overlapping cadastral survey geometry polygons.', status: 'ACTIVE' },
    { id: 'RULE-10', name: 'Outdated Record Alert', desc: 'Identifies un-updated 7/12 mutations past 90-day statutory limit.', status: 'ACTIVE' }
  ];

  return (
    <div className="content-container">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <CheckCircle2 size={24} color="#0757A0" /> Verification Center & Data Consistency Engine
          </h1>
          <p className="page-subtitle">
            Automated multi-source cross-verification across Cadastral, RoR, Registration & Property Tax datasets.
          </p>
        </div>
      </div>

      {/* Featured Multi-Source Discrepancy Spotlight (Prompt Specification Example) */}
      <div className="card card-blue" style={{ marginBottom: '1.5rem', border: '1.5px solid #0757A0' }}>
        <div className="card-header" style={{ backgroundColor: '#063B6D', color: '#FFFFFF' }}>
          <span className="card-title" style={{ color: '#FFFFFF' }}>
            <AlertTriangle size={18} color="#FFE0B2" /> Multi-Source Area Discrepancy Spotlight — ULPIN {activeParcel.ulpin}
          </span>
          <span className="status-pill warning" style={{ backgroundColor: '#FFF8E6', color: '#D88900' }}>
            MEDIUM SEVERITY DISCREPANCY
          </span>
        </div>

        <div className="card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
            <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '6px', border: '1px solid #D0D5DD' }}>
              <div style={{ fontSize: '0.75rem', color: '#667085', fontWeight: 700 }}>CADASTRAL GIS MAP</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#063B6D', marginTop: '0.2rem' }}>2.40 Ha</div>
              <div style={{ fontSize: '0.7rem', color: '#475467', marginTop: '0.2rem' }}>Vector GeoJSON Boundary</div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '6px', border: '1.5px solid #D88900' }}>
              <div style={{ fontSize: '0.75rem', color: '#D88900', fontWeight: 700 }}>7/12 ROR RECORD</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#D88900', marginTop: '0.2rem' }}>2.35 Ha</div>
              <div style={{ fontSize: '0.7rem', color: '#D88900', marginTop: '0.2rem' }}>Revenue Department Excerpt</div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '6px', border: '1px solid #D0D5DD' }}>
              <div style={{ fontSize: '0.75rem', color: '#667085', fontWeight: 700 }}>SUB-REGISTRAR DEED</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#063B6D', marginTop: '0.2rem' }}>2.40 Ha</div>
              <div style={{ fontSize: '0.7rem', color: '#475467', marginTop: '0.2rem' }}>Registered Sale Conveyance</div>
            </div>

            <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '6px', border: '1px solid #D0D5DD' }}>
              <div style={{ fontSize: '0.75rem', color: '#667085', fontWeight: 700 }}>PROPERTY TAX RECORD</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#063B6D', marginTop: '0.2rem' }}>2.38 Ha</div>
              <div style={{ fontSize: '0.7rem', color: '#475467', marginTop: '0.2rem' }}>Municipal Assessment Extent</div>
            </div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '6px', border: '1px solid #D0D5DD', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#063B6D' }}>
                Calculated Variance Difference: <span style={{ color: '#D88900' }}>0.05 Ha (2.13% Difference)</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: '#667085', marginTop: '0.2rem' }}>
                Recommended Action: <strong>Requires Departmental Verification by Revenue Inspector</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-secondary" onClick={() => navigate(`/parcel/${activeParcel.ulpin}`)}>
                Inspect Digital Twin →
              </button>
              <button className="btn btn-primary" onClick={() => navigate('/workflows')}>
                <GitPullRequest size={15} /> Trigger Survey Task
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Consistency Rules & Detected Issues Table */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.25rem' }}>
        {/* Left: Active Issues Table */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">
              <ShieldAlert size={18} color="#0757A0" /> Flagged Data Discrepancies Across Parcels ({filteredIssues.length})
            </span>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <select 
                className="input-field" 
                value={selectedSeverity} 
                onChange={e => setSelectedSeverity(e.target.value)}
                style={{ padding: '0.25rem 0.5rem', fontSize: '0.78rem' }}
              >
                <option value="ALL">All Severities</option>
                <option value="HIGH">High Severity Only</option>
                <option value="MEDIUM">Medium Severity Only</option>
                <option value="LOW">Low Severity Only</option>
              </select>
            </div>
          </div>

          <div className="card-body" style={{ padding: 0 }}>
            <div className="data-table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ULPIN & Survey</th>
                    <th>Consistency Rule</th>
                    <th>Source Comparison</th>
                    <th>Difference</th>
                    <th>Severity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredIssues.map((iss) => (
                    <tr key={iss.id}>
                      <td>
                        <strong style={{ color: '#063B6D' }}>{iss.parcel.ulpin}</strong>
                        <div style={{ fontSize: '0.72rem', color: '#667085' }}>Survey: {iss.parcel.surveyNo}</div>
                      </td>
                      <td>
                        <strong style={{ fontSize: '0.8rem' }}>{iss.title}</strong>
                        <div style={{ fontSize: '0.72rem', color: '#667085' }}>Rule ID: {iss.ruleId}</div>
                      </td>
                      <td style={{ fontSize: '0.75rem' }}>
                        <div>Cadastral/Reg: {iss.sources.cadastral || iss.sources.registration}</div>
                        <div>RoR (7/12): {iss.sources.ror}</div>
                      </td>
                      <td style={{ fontSize: '0.78rem', color: '#D88900', fontWeight: 600 }}>
                        {iss.difference}
                      </td>
                      <td>
                        <span className={`status-pill ${iss.severity === 'HIGH' ? 'danger' : 'warning'}`}>
                          {iss.severity}
                        </span>
                      </td>
                      <td>
                        <button 
                          className="btn btn-sm btn-primary"
                          onClick={() => navigate(`/parcel/${iss.parcel.ulpin}`)}
                        >
                          View Parcel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Deterministic Rule Matrix */}
        <div className="card">
          <div className="card-header">
            <span className="card-title" style={{ fontSize: '0.9rem' }}>
              <CheckCircle2 size={16} color="#0757A0" /> Deterministic Rules (10 Checks)
            </span>
          </div>
          <div className="card-body" style={{ padding: '0.75rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {consistencyRules.map((rule) => (
                <div key={rule.id} style={{ padding: '0.5rem 0.75rem', border: '1px solid #EAECF0', borderRadius: '4px', background: '#F8FAFC' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#063B6D' }}>{rule.name}</span>
                    <span style={{ fontSize: '0.65rem', background: '#EDF7ED', color: '#16803C', padding: '0.1rem 0.3rem', borderRadius: '3px', fontWeight: 700 }}>Active</span>
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#667085', marginTop: '0.2rem' }}>{rule.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
