import React, { useState } from 'react';
import { MOCK_PARCELS } from '../data/mockParcels';
import { 
  UserCheck, 
  Search, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Lock, 
  Send,
  Eye,
  Info
} from 'lucide-react';

export default function CitizenPortalPage({ navigate }) {
  const [searchUlpin, setSearchUlpin] = useState('MH-PUN-001245');
  const [searchedParcel, setSearchedParcel] = useState(MOCK_PARCELS[0]);
  const [showReqForm, setShowReqForm] = useState(false);
  const [reqSubmitted, setReqSubmitted] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const match = MOCK_PARCELS.find(p => p.ulpin.toLowerCase() === searchUlpin.toLowerCase().trim());
    if (match) {
      setSearchedParcel(match);
    }
  };

  return (
    <div className="content-container">
      {/* Header */}
      <div className="page-header" style={{ backgroundColor: '#16803C', color: '#FFFFFF', padding: '1.25rem 1.5rem', borderRadius: '6px' }}>
        <div>
          <div style={{ fontSize: '0.78rem', color: '#C8E6C9', fontWeight: 700, letterSpacing: '0.5px' }}>
            CITIZEN SELF-SERVICE & DUE DILIGENCE PORTAL
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', margin: '0.2rem 0' }}>
            Public Land Parcel Verification & Search
          </h1>
          <div style={{ fontSize: '0.85rem', color: '#EDF7ED' }}>
            Access verified parcel identities, encumbrance status, and official land service requests.
          </div>
        </div>

        <button className="btn btn-secondary" onClick={() => setShowReqForm(true)} style={{ color: '#16803C', fontWeight: 700 }}>
          <FileText size={16} /> Request Official Verification
        </button>
      </div>

      {/* Access Classification Notice */}
      <div className="alert alert-info" style={{ marginBottom: '1.25rem' }}>
        <Lock size={18} />
        <div>
          <strong>Privacy Access Policy Applied:</strong> You are viewing Public & Controlled attributes. Internal departmental notes, officer logs, and unmasked personal identifiers are restricted under state data privacy policy.
        </div>
      </div>

      {/* Citizen Search Bar */}
      <div className="card" style={{ marginBottom: '1.5rem', padding: '1.25rem' }}>
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.75rem' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={18} color="#667085" style={{ position: 'absolute', left: '12px', top: '11px' }} />
            <input 
              type="text" 
              className="input-field" 
              placeholder="Enter 14-Digit ULPIN (e.g. MH-PUN-001245)..."
              value={searchUlpin}
              onChange={e => setSearchUlpin(e.target.value)}
              style={{ paddingLeft: '38px' }}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#16803C' }}>
            Verify Parcel Identity →
          </button>
        </form>
      </div>

      {/* Parcel Due-Diligence Summary Card */}
      {searchedParcel && (
        <div className="card">
          <div className="card-header" style={{ backgroundColor: '#063B6D', color: '#FFFFFF' }}>
            <span className="card-title" style={{ color: '#FFFFFF' }}>
              Citizen Due-Diligence View — ULPIN {searchedParcel.ulpin}
            </span>
            <span className="status-pill success" style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>
              PUBLIC CERTIFIED EXCERPT
            </span>
          </div>

          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              <div><span style={{ color: '#667085' }}>Location & Village:</span> <br/><strong>{searchedParcel.village}, Taluka Mulshi, Pune</strong></div>
              <div><span style={{ color: '#667085' }}>Survey Number:</span> <br/><strong>{searchedParcel.surveyNo}</strong></div>
              <div><span style={{ color: '#667085' }}>Parcel Extent Area:</span> <br/><strong>{searchedParcel.area}</strong></div>
              <div><span style={{ color: '#667085' }}>Sanctioned Land Use:</span> <br/><strong>{searchedParcel.landUse}</strong></div>
            </div>

            {/* Status Checklist for Citizen */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.75rem', border: '1px solid #D0D5DD', borderRadius: '4px', background: '#F8FAFC' }}>
                <div style={{ fontSize: '0.75rem', color: '#667085', fontWeight: 700 }}>TITLE REGISTRATION</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#16803C', marginTop: '0.2rem' }}>
                  ✓ Record Registered in SGR
                </div>
              </div>

              <div style={{ padding: '0.75rem', border: '1px solid #D0D5DD', borderRadius: '4px', background: searchedParcel.statusSummary.encumbrance === 'OK' ? '#EDF7ED' : '#FFF8E6' }}>
                <div style={{ fontSize: '0.75rem', color: '#667085', fontWeight: 700 }}>ENCUMBRANCE INDICATOR</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: searchedParcel.statusSummary.encumbrance === 'OK' ? '#16803C' : '#D88900', marginTop: '0.2rem' }}>
                  {searchedParcel.statusSummary.encumbrance === 'OK' ? '✓ Nil Charge' : '⚠ Bank Charge Registered'}
                </div>
              </div>

              <div style={{ padding: '0.75rem', border: '1px solid #D0D5DD', borderRadius: '4px', background: searchedParcel.statusSummary.propertyTax === 'OK' ? '#EDF7ED' : '#FFF8E6' }}>
                <div style={{ fontSize: '0.75rem', color: '#667085', fontWeight: 700 }}>PROPERTY TAX STATUS</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: searchedParcel.statusSummary.propertyTax === 'OK' ? '#16803C' : '#D88900', marginTop: '0.2rem' }}>
                  {searchedParcel.statusSummary.propertyTax === 'OK' ? '✓ Dues Paid' : '⚠ Outstanding Dues'}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button className="btn btn-primary" onClick={() => navigate(`/parcel/${searchedParcel.ulpin}`)} style={{ backgroundColor: '#0757A0' }}>
                View Complete Digital Twin Summary →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Service Request Form Modal */}
      {showReqForm && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '550px' }}>
            <div className="modal-header" style={{ backgroundColor: '#16803C' }}>
              <span className="modal-title">Request Citizen Parcel Verification Service</span>
              <button className="modal-close" onClick={() => setShowReqForm(false)}>✕</button>
            </div>

            <div className="modal-body">
              {reqSubmitted ? (
                <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                  <CheckCircle2 size={44} color="#16803C" style={{ margin: '0 auto 0.5rem auto' }} />
                  <h3 style={{ fontSize: '1.1rem', color: '#16803C', fontWeight: 700 }}>Service Request Dispatched</h3>
                  <p style={{ fontSize: '0.85rem', color: '#475467', marginTop: '0.3rem' }}>
                    Reference Ticket: <strong>CIT-REQ-2026-9901</strong>. Track status in Citizen Portal.
                  </p>
                  <button className="btn btn-primary" onClick={() => { setReqSubmitted(false); setShowReqForm(false); }} style={{ marginTop: '1rem', backgroundColor: '#16803C' }}>
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setReqSubmitted(true); }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 700 }}>Parcel ULPIN:</label>
                    <input type="text" className="input-field" value={searchedParcel.ulpin} readOnly style={{ background: '#F1F5F9' }} />
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 700 }}>Service Type:</label>
                    <select className="input-field">
                      <option>Official Title Verification Report</option>
                      <option>Cadastral Boundary Re-Measurement Request</option>
                      <option>Encumbrance Clearance Certificate</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 700 }}>Applicant Full Name:</label>
                    <input type="text" className="input-field" placeholder="Enter applicant name..." required />
                  </div>

                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShowReqForm(false)}>Cancel</button>
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#16803C' }}>Submit Application</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
