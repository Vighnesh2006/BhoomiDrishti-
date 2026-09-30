import React, { useState } from 'react';
import { MOCK_PARCELS } from '../data/mockParcels';
import MapComponent from '../components/MapComponent';
import { ArrowLeft, CheckCircle2, FileText, GitPullRequest, MapPin, X, Printer } from 'lucide-react';

export default function ParcelDigitalTwinPage({ ulpinId, navigate }) {
  const targetUlpin = ulpinId || 'MH-PUN-001245-6789';
  const parcel = MOCK_PARCELS.find(p => p.ulpin.toLowerCase().includes('1245')) || MOCK_PARCELS[0];
  
  const [activeTab, setActiveTab] = useState('Overview');
  const [showReportModal, setShowReportModal] = useState(false);

  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#F8FAFC', minHeight: '100%' }}>
      {/* Subheader Back Button */}
      <div style={{ marginBottom: '0.75rem' }}>
        <button 
          onClick={() => navigate('/explorer')}
          style={{ background: 'none', border: 'none', color: '#64748B', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <ArrowLeft size={16} /> Back to Search
        </button>
      </div>

      {/* Main Page Title Header Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A' }}>
              Parcel Digital Twin
            </h1>
            <span style={{ backgroundColor: '#DCFCE7', color: '#15803D', padding: '0.2rem 0.65rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <CheckCircle2 size={14} /> Verified
            </span>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#64748B', marginTop: '0.2rem' }}>
            Complete information of the selected parcel
          </p>
        </div>

        <button 
          className="btn btn-secondary" 
          onClick={() => setShowReportModal(true)}
          style={{ fontSize: '0.85rem' }}
        >
          <FileText size={16} /> Generate Report
        </button>
      </div>

      {/* Metadata Strip matching mockup */}
      <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '0.85rem 1.25rem', marginBottom: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem', fontSize: '0.85rem' }}>
        <div><span style={{ color: '#64748B', fontSize: '0.75rem' }}>ULPIN</span> <br/><strong style={{ color: '#1D4ED8', fontWeight: 800 }}>MH-PUN-001245-6789</strong></div>
        <div><span style={{ color: '#64748B', fontSize: '0.75rem' }}>Area (GIS)</span> <br/><strong>2.40 Ha</strong></div>
        <div><span style={{ color: '#64748B', fontSize: '0.75rem' }}>Land Use</span> <br/><strong>Residential</strong></div>
        <div><span style={{ color: '#64748B', fontSize: '0.75rem' }}>Village</span> <br/><strong>Moshi</strong></div>
        <div><span style={{ color: '#64748B', fontSize: '0.75rem' }}>District</span> <br/><strong>Pune</strong></div>
      </div>

      {/* Navigation Tabs matching mockup */}
      <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid #E2E8F0', marginBottom: '1.25rem' }}>
        {['Overview', 'Ownership', 'Registration', 'Land Use & Planning', 'Encumbrance'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.6rem 1.2rem',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === tab ? '2.5px solid #1D4ED8' : 'none',
              color: activeTab === tab ? '#1D4ED8' : '#64748B',
              fontWeight: activeTab === tab ? 700 : 500,
              fontSize: '0.88rem',
              cursor: 'pointer'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Two Column Layout matching mockup */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '1.25rem' }}>
        {/* Left Column: Attribute Details Table */}
        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', overflow: 'hidden' }}>
          <table className="data-table">
            <tbody>
              <tr>
                <td style={{ width: '200px', color: '#64748B', fontWeight: 600 }}>Survey Number</td>
                <td style={{ fontWeight: 700, color: '#0F172A' }}>123/2</td>
              </tr>
              <tr>
                <td style={{ color: '#64748B', fontWeight: 600 }}>Area (Cadastral)</td>
                <td style={{ fontWeight: 700 }}>2.40 Ha</td>
              </tr>
              <tr>
                <td style={{ color: '#64748B', fontWeight: 600 }}>Area (RoR)</td>
                <td style={{ fontWeight: 700, color: '#DC2626' }}>2.35 Ha (0.05 Ha Variance)</td>
              </tr>
              <tr>
                <td style={{ color: '#64748B', fontWeight: 600 }}>Area (Registration)</td>
                <td style={{ fontWeight: 700 }}>2.40 Ha</td>
              </tr>
              <tr>
                <td style={{ color: '#64748B', fontWeight: 600 }}>Current Owner</td>
                <td style={{ fontWeight: 700, color: '#0F172A' }}>Demo Owner (Kulkarni Estate LLP)</td>
              </tr>
              <tr>
                <td style={{ color: '#64748B', fontWeight: 600 }}>Land Use</td>
                <td style={{ fontWeight: 700 }}>Residential</td>
              </tr>
              <tr>
                <td style={{ color: '#64748B', fontWeight: 600 }}>Registration Status</td>
                <td><span style={{ color: '#15803D', fontWeight: 700 }}>Registered</span></td>
              </tr>
              <tr>
                <td style={{ color: '#64748B', fontWeight: 600 }}>Property Tax Status</td>
                <td><span style={{ color: '#15803D', fontWeight: 700 }}>Paid</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Column: GIS Preview Map Box matching mockup */}
        <div style={{ height: '360px', backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', overflow: 'hidden' }}>
          <MapComponent
            parcels={[parcel]}
            selectedParcel={parcel}
            onSelectParcel={() => {}}
            onOpenDigitalTwin={() => {}}
            baseMap="satellite"
          />
        </div>
      </div>

      {/* Verification Report Printable Modal */}
      {showReportModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '700px' }}>
            <div className="modal-header">
              <span className="modal-title">BhoomiDrishti Verification Report</span>
              <button className="modal-close" onClick={() => setShowReportModal(false)}><X size={20} /></button>
            </div>
            <div className="modal-body" style={{ padding: '1.75rem' }}>
              <div style={{ borderBottom: '2px solid #1D4ED8', paddingBottom: '0.75rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A' }}>PARCEL VERIFICATION SUMMARY</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>ULPIN: MH-PUN-001245-6789 | Village: Moshi</div>
                </div>
                <span className="status-pill success">Verified Excerpt</span>
              </div>
              <div style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
                <div>• <strong>Survey No:</strong> 123/2</div>
                <div>• <strong>GIS Area:</strong> 2.40 Ha | <strong>RoR Recorded Area:</strong> 2.35 Ha</div>
                <div>• <strong>Ownership Status:</strong> Registered Title Deed Matched</div>
                <div>• <strong>Encumbrance:</strong> Nil Mortgage Charge Registered</div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowReportModal(false)}>Close</button>
              <button className="btn btn-primary" onClick={() => window.print()}><Printer size={16} /> Print</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
