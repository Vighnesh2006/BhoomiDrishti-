import React, { useState } from 'react';
import { MOCK_PARCELS } from '../data/mockParcels';
import MapComponent from '../components/MapComponent';
import { 
  ArrowLeft, 
  CheckCircle2, 
  FileText, 
  Layers, 
  Building, 
  MapPin, 
  ShieldAlert, 
  Activity, 
  X, 
  Printer, 
  CreditCard, 
  Zap, 
  Shield, 
  Calendar,
  ChevronDown
} from 'lucide-react';

export default function ParcelDigitalTwinPage({ ulpinId, navigate }) {
  const [selectedUlpin, setSelectedUlpin] = useState(ulpinId || MOCK_PARCELS[0].ulpin);
  const [activeTab, setActiveTab] = useState('Overview');
  const [showReportModal, setShowReportModal] = useState(false);

  // Match selected parcel from dataset
  const parcel = MOCK_PARCELS.find(p => p.ulpin.toLowerCase().includes(selectedUlpin.toLowerCase().replace('/parcel/', ''))) || MOCK_PARCELS[0];

  return (
    <div style={{ padding: '1.75rem', backgroundColor: '#F8FAFC', minHeight: '100%' }}>
      {/* Top Header Bar & Parcel Selection Selector */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
        <button 
          onClick={() => navigate('/explorer')}
          style={{ background: 'none', border: 'none', color: '#64748B', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <ArrowLeft size={16} /> Back to GIS Map
        </button>

        {/* Parcel Selector Dropdown allowing user to explore all 20 demo parcels */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748B' }}>Select Demo Parcel (20 Examples):</span>
          <select
            value={selectedUlpin}
            onChange={(e) => setSelectedUlpin(e.target.value)}
            style={{
              padding: '0.45rem 0.85rem',
              borderRadius: '6px',
              border: '1px solid #1D4ED8',
              backgroundColor: '#EFF6FF',
              color: '#1D4ED8',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            {MOCK_PARCELS.map(p => (
              <option key={p.id} value={p.ulpin}>
                {p.ulpin} — {p.village} ({p.landUse})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Digital Twin Header Card */}
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '1.25rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1D4ED8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            MAHARASHTRA STATE PARCEL DIGITAL TWIN
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.2rem' }}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A' }}>
              {parcel.ulpin}
            </h1>
            {parcel.verificationStatus === 'VERIFIED' ? (
              <span className="status-pill success">✓ Fully Verified</span>
            ) : (
              <span className="status-pill warning">⚠ {parcel.issues.length} Discrepancy Flagged</span>
            )}
          </div>
          <div style={{ fontSize: '0.9rem', color: '#64748B', marginTop: '0.3rem' }}>
            Survey No: <strong>{parcel.surveyNo}</strong> | Village: <strong>{parcel.village}</strong> | Taluka: <strong>{parcel.taluka}</strong> | District: <strong>{parcel.district}</strong>
          </div>
        </div>

        <button 
          className="btn btn-primary"
          onClick={() => setShowReportModal(true)}
          style={{ backgroundColor: '#1D4ED8', padding: '0.6rem 1.25rem', borderRadius: '6px' }}
        >
          <FileText size={16} /> Generate Official Verification Report
        </button>
      </div>

      {/* Metadata Parameter Strip */}
      <div style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '10px',
        padding: '1rem 1.25rem',
        marginBottom: '1.25rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '1rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
      }}>
        <div><span style={{ color: '#64748B', fontSize: '0.75rem', fontWeight: 600 }}>Cadastral Extent</span> <br/><strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>{parcel.area}</strong></div>
        <div><span style={{ color: '#64748B', fontSize: '0.75rem', fontWeight: 600 }}>Master Plan Zone</span> <br/><strong style={{ fontSize: '0.95rem', color: '#0F172A' }}>{parcel.landUse}</strong></div>
        <div><span style={{ color: '#64748B', fontSize: '0.75rem', fontWeight: 600 }}>Primary Owner</span> <br/><strong style={{ fontSize: '0.9rem', color: '#0F172A' }}>{parcel.owner}</strong></div>
        <div><span style={{ color: '#64748B', fontSize: '0.75rem', fontWeight: 600 }}>7/12 RoR Excerpt</span> <br/><strong style={{ fontSize: '0.9rem', color: '#15803D' }}>{parcel.ownership.khataNo}</strong></div>
        <div><span style={{ color: '#64748B', fontSize: '0.75rem', fontWeight: 600 }}>SGR Registration</span> <br/><strong style={{ fontSize: '0.9rem', color: '#15803D' }}>{parcel.registration.transactionId}</strong></div>
      </div>

      {/* Navigation Tabs for All Detail Categories */}
      <div style={{ display: 'flex', gap: '0.4rem', borderBottom: '1px solid #E2E8F0', marginBottom: '1.25rem', overflowX: 'auto', paddingBottom: '0.2rem' }}>
        {[
          'Overview',
          'Ownership (7/12)',
          'Registration (SGR)',
          'Land Use & Planning',
          'Encumbrance & Mortgage',
          'Tax & Fiscal',
          'Infrastructure',
          'Statutory Restrictions',
          'Spatial AI Analysis'
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.65rem 1.1rem',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === tab ? '2.5px solid #1D4ED8' : 'none',
              color: activeTab === tab ? '#1D4ED8' : '#64748B',
              fontWeight: activeTab === tab ? 700 : 500,
              fontSize: '0.88rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Two Column Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '1.25rem' }}>
        {/* Left Column: Tabbed Information Details */}
        <div>
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'Overview' && (
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #F1F5F9', backgroundColor: '#F8FAFC', fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>
                Unified Multi-Source Record Overview
              </div>
              <table className="data-table">
                <tbody>
                  <tr><td style={{ width: '220px', color: '#64748B', fontWeight: 600 }}>14-Digit ULPIN ID</td><td style={{ fontWeight: 800, color: '#1D4ED8' }}>{parcel.identity.ulpin}</td></tr>
                  <tr><td style={{ color: '#64748B', fontWeight: 600 }}>Survey / Gut Number</td><td style={{ fontWeight: 700 }}>{parcel.identity.surveyNo} (Sub-Division: {parcel.identity.subDivision})</td></tr>
                  <tr><td style={{ color: '#64748B', fontWeight: 600 }}>Cadastral Boundary Extent</td><td style={{ fontWeight: 700 }}>{parcel.identity.areaHa} ({parcel.identity.areaSqM})</td></tr>
                  <tr><td style={{ color: '#64748B', fontWeight: 600 }}>7/12 RoR Recorded Extent</td><td style={{ fontWeight: 700, color: parcel.issues.length > 0 ? '#DC2626' : '#15803D' }}>{parcel.issues.length > 0 ? `${parcel.issues[0].sources.ror} (Variance Flagged)` : parcel.identity.areaHa}</td></tr>
                  <tr><td style={{ color: '#64748B', fontWeight: 600 }}>Sub-Registrar Deed Extent</td><td style={{ fontWeight: 700 }}>{parcel.registration.deedType} ({parcel.identity.areaHa})</td></tr>
                  <tr><td style={{ color: '#64748B', fontWeight: 600 }}>Primary Mutated Khatedar</td><td style={{ fontWeight: 700, color: '#0F172A' }}>{parcel.ownership.primaryOwner}</td></tr>
                  <tr><td style={{ color: '#64748B', fontWeight: 600 }}>Land Use Zoning</td><td style={{ fontWeight: 700 }}>{parcel.masterPlanZone}</td></tr>
                  <tr><td style={{ color: '#64748B', fontWeight: 600 }}>Encumbrance Status</td><td style={{ fontWeight: 700, color: parcel.encumbrance.mortgageStatus.includes('Nil') ? '#15803D' : '#D97706' }}>{parcel.encumbrance.mortgageStatus}</td></tr>
                  <tr><td style={{ color: '#64748B', fontWeight: 600 }}>Municipal Property Tax</td><td style={{ fontWeight: 700, color: '#15803D' }}>{parcel.fiscal.propertyTaxStatus} ({parcel.fiscal.assessmentId})</td></tr>
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 2: OWNERSHIP (7/12) */}
          {activeTab === 'Ownership (7/12)' && (
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>7/12 RoR Excerpt & Khata Mutation Record</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                <div><span style={{ color: '#64748B' }}>RoR Verification Status:</span> <br/><strong style={{ color: '#15803D' }}>{parcel.ownership.rorStatus}</strong></div>
                <div><span style={{ color: '#64748B' }}>Khata / Account Number:</span> <br/><strong>{parcel.ownership.khataNo}</strong></div>
                <div><span style={{ color: '#64748B' }}>Mutation Entry Number:</span> <br/><strong>{parcel.ownership.mutationNo}</strong></div>
                <div><span style={{ color: '#64748B' }}>Mutation Date:</span> <br/><strong>{parcel.ownership.lastMutationDate}</strong></div>
                <div><span style={{ color: '#64748B' }}>Mutated Khatedar Name:</span> <br/><strong>{parcel.ownership.primaryOwner}</strong></div>
                <div><span style={{ color: '#64748B' }}>Joint Holders Count:</span> <br/><strong>{parcel.ownership.jointOwnersCount} Registered Holders</strong></div>
                <div><span style={{ color: '#64748B' }}>Tenure Classification:</span> <br/><strong>{parcel.ownership.rightsType}</strong></div>
              </div>
            </div>
          )}

          {/* TAB 3: REGISTRATION */}
          {activeTab === 'Registration (SGR)' && (
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Sub-Registrar (SGR) Deed Conveyance History</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                <div><span style={{ color: '#64748B' }}>Registration Status:</span> <br/><strong style={{ color: '#15803D' }}>{parcel.registration.status}</strong></div>
                <div><span style={{ color: '#64748B' }}>Sub-Registrar Office:</span> <br/><strong>{parcel.registration.sgrOffice}</strong></div>
                <div><span style={{ color: '#64748B' }}>Document Transaction ID:</span> <br/><strong>{parcel.registration.transactionId}</strong></div>
                <div><span style={{ color: '#64748B' }}>Registration Date:</span> <br/><strong>{parcel.registration.registrationDate}</strong></div>
                <div><span style={{ color: '#64748B' }}>Deed Instrument:</span> <br/><strong>{parcel.registration.deedType}</strong></div>
                <div><span style={{ color: '#64748B' }}>Stamp Duty Verification:</span> <br/><strong>{parcel.registration.stampDutyStatus}</strong></div>
              </div>
            </div>
          )}

          {/* TAB 4: LAND USE & PLANNING */}
          {activeTab === 'Land Use & Planning' && (
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>PMRDA Master Plan & Development Control Rules</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                <div><span style={{ color: '#64748B' }}>Current Land Use:</span> <br/><strong>{parcel.landUsePlanning.currentLandUse}</strong></div>
                <div><span style={{ color: '#64748B' }}>Development Plan Zone:</span> <br/><strong>{parcel.landUsePlanning.masterPlanZone}</strong></div>
                <div><span style={{ color: '#64748B' }}>Permitted Activity:</span> <br/><strong>{parcel.landUsePlanning.permittedUse}</strong></div>
                <div><span style={{ color: '#64748B' }}>Building Permit Record:</span> <br/><strong style={{ color: parcel.landUsePlanning.buildingPermissionStatus.includes('Unapproved') ? '#DC2626' : '#15803D' }}>{parcel.landUsePlanning.buildingPermissionStatus}</strong></div>
              </div>
            </div>
          )}

          {/* TAB 5: ENCUMBRANCE */}
          {activeTab === 'Encumbrance & Mortgage' && (
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Bank Mortgage Charges & Civil Dispute Status</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                <div><span style={{ color: '#64748B' }}>Mortgage Charge:</span> <br/><strong style={{ color: parcel.encumbrance.mortgageStatus.includes('Nil') ? '#15803D' : '#D97706' }}>{parcel.encumbrance.mortgageStatus}</strong></div>
                <div><span style={{ color: '#64748B' }}>Financial Institution:</span> <br/><strong>{parcel.encumbrance.bankName}</strong></div>
                <div><span style={{ color: '#64748B' }}>Hypothecation Loan Amount:</span> <br/><strong>{parcel.encumbrance.loanAmount}</strong></div>
                <div><span style={{ color: '#64748B' }}>Civil Court Dispute:</span> <br/><strong>{parcel.encumbrance.disputeIndicator}</strong></div>
              </div>
            </div>
          )}

          {/* TAB 6: TAX & FISCAL */}
          {activeTab === 'Tax & Fiscal' && (
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Municipal Property Tax Assessment</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                <div><span style={{ color: '#64748B' }}>Property Tax Status:</span> <br/><strong style={{ color: '#15803D' }}>{parcel.fiscal.propertyTaxStatus}</strong></div>
                <div><span style={{ color: '#64748B' }}>Assessment ID:</span> <br/><strong>{parcel.fiscal.assessmentId}</strong></div>
                <div><span style={{ color: '#64748B' }}>Outstanding Dues Balance:</span> <br/><strong>{parcel.fiscal.outstandingAmount}</strong></div>
                <div><span style={{ color: '#64748B' }}>Taxed Area Extent:</span> <br/><strong>{parcel.fiscal.taxedArea}</strong></div>
              </div>
            </div>
          )}

          {/* TAB 7: INFRASTRUCTURE */}
          {activeTab === 'Infrastructure' && (
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Connected Utility Infrastructure</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                <div><span style={{ color: '#64748B' }}>Electricity Connection:</span> <br/><strong>{parcel.infrastructure.electricity}</strong></div>
                <div><span style={{ color: '#64748B' }}>Water Supply Pipeline:</span> <br/><strong>{parcel.infrastructure.water}</strong></div>
                <div><span style={{ color: '#64748B' }}>Road Access Frontage:</span> <br/><strong>{parcel.infrastructure.roadAccess}</strong></div>
                <div><span style={{ color: '#64748B' }}>Drainage & STP Connection:</span> <br/><strong>{parcel.infrastructure.drainage}</strong></div>
              </div>
            </div>
          )}

          {/* TAB 8: STATUTORY RESTRICTIONS */}
          {activeTab === 'Statutory Restrictions' && (
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Statutory Clearances & Environmental Buffers</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                <div><span style={{ color: '#64748B' }}>Environmental Buffer Clearance:</span> <br/><strong>{parcel.restrictions.environmental}</strong></div>
                <div><span style={{ color: '#64748B' }}>Permissible FAR / FSI:</span> <br/><strong>{parcel.restrictions.planning}</strong></div>
                <div style={{ gridColumn: 'span 2' }}><span style={{ color: '#64748B' }}>Statutory Approvals:</span> <br/><strong>{parcel.restrictions.otherRestrictions}</strong></div>
              </div>
            </div>
          )}

          {/* TAB 9: SPATIAL AI */}
          {activeTab === 'Spatial AI Analysis' && (
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Geo-AI Satellite Temporal Footprint Scan</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                <div><span style={{ color: '#64748B' }}>Satellite Temporal Scan:</span> <br/><strong style={{ color: parcel.spatialIntelligence.changeStatus.includes('Flagged') ? '#DC2626' : '#15803D' }}>{parcel.spatialIntelligence.changeStatus}</strong></div>
                <div><span style={{ color: '#64748B' }}>Scan Date / Source:</span> <br/><strong>{parcel.spatialIntelligence.lastSatelliteScan}</strong></div>
                <div><span style={{ color: '#64748B' }}>Detected Structural Footprint:</span> <br/><strong>{parcel.spatialIntelligence.detectedStructureArea}</strong></div>
                <div><span style={{ color: '#64748B' }}>AI Neural Net Confidence:</span> <br/><strong>{parcel.spatialIntelligence.confidenceScore}</strong></div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Interactive Cadastral GIS Preview Card */}
        <div>
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '10px', overflow: 'hidden', height: '400px', marginBottom: '1.25rem' }}>
            <div style={{ padding: '0.75rem 1rem', backgroundColor: '#0F172A', color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 700 }}>
              Cadastral Boundary GIS Satellite Preview
            </div>
            <div style={{ height: 'calc(100% - 40px)' }}>
              <MapComponent
                parcels={[parcel]}
                selectedParcel={parcel}
                onSelectParcel={() => {}}
                onOpenDigitalTwin={() => {}}
                baseMap="satellite"
              />
            </div>
          </div>

          <div style={{ backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '10px', padding: '1rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1D4ED8', marginBottom: '0.4rem' }}>
              GIS Coordinates Center
            </div>
            <div style={{ fontSize: '0.8rem', color: '#1E293B', fontFamily: 'JetBrains Mono, monospace' }}>
              {parcel.identity.gisCoordinates}
            </div>
          </div>
        </div>
      </div>

      {/* Official Report Modal */}
      {showReportModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '750px' }}>
            <div className="modal-header">
              <span className="modal-title">BhoomiDrishti Official Verification Excerpt</span>
              <button className="modal-close" onClick={() => setShowReportModal(false)}><X size={20} /></button>
            </div>
            <div className="modal-body" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
              <div style={{ borderBottom: '2px solid #1D4ED8', paddingBottom: '1rem', marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1D4ED8', textTransform: 'uppercase' }}>STATE GOVERNMENT OF MAHARASHTRA</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A' }}>ULPIN PARCEL VERIFICATION REPORT</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '0.2rem' }}>ULPIN: <strong>{parcel.ulpin}</strong> | Village: <strong>{parcel.village}</strong></div>
                </div>
                <span className="status-pill success">Verified Excerpt</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem', lineHeight: 1.6 }}>
                <div>• <strong>Survey Number:</strong> {parcel.surveyNo}</div>
                <div>• <strong>GIS Boundary Extent:</strong> {parcel.area}</div>
                <div>• <strong>7/12 RoR Khatedar:</strong> {parcel.ownership.primaryOwner}</div>
                <div>• <strong>SGR Sub-Registrar Status:</strong> Registered</div>
                <div>• <strong>Encumbrance:</strong> {parcel.encumbrance.mortgageStatus}</div>
                <div>• <strong>Property Tax Status:</strong> {parcel.fiscal.propertyTaxStatus}</div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowReportModal(false)}>Close</button>
              <button className="btn btn-primary" onClick={() => window.print()}><Printer size={16} /> Print Official Excerpt</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
