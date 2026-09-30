import React, { useState } from 'react';
import { MOCK_PARCELS } from '../data/mockParcels';
import MapComponent from '../components/MapComponent';
import { 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Printer, 
  GitPullRequest, 
  Building, 
  MapPin, 
  ShieldAlert, 
  Activity, 
  X, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';

export default function ParcelDigitalTwinPage({ ulpinId, navigate }) {
  const targetUlpin = ulpinId || 'MH-PUN-001245';
  const parcel = MOCK_PARCELS.find(p => p.ulpin.toLowerCase() === targetUlpin.toLowerCase()) || MOCK_PARCELS[0];

  const [showReportModal, setShowReportModal] = useState(false);
  const [showWorkflowModal, setShowWorkflowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('identity');

  const [workflowForm, setWorkflowForm] = useState({
    title: `Department Verification for ULPIN ${parcel.ulpin}`,
    department: 'Revenue & Planning Department',
    officer: 'S. K. Kulkarni (Revenue Inspector)',
    priority: 'HIGH',
    notes: 'Generated from Digital Twin anomaly flag.'
  });

  const handleCreateWorkflow = (e) => {
    e.preventDefault();
    setShowWorkflowModal(false);
    navigate('/workflows');
  };

  return (
    <div className="content-container">
      {/* Header Banner */}
      <div className="page-header" style={{ backgroundColor: '#063B6D', color: '#FFFFFF', padding: '1.25rem 1.5rem', borderRadius: '6px', marginBottom: '1.25rem' }}>
        <div>
          <div style={{ fontSize: '0.78rem', color: '#93C5FD', fontWeight: 700, letterSpacing: '0.5px' }}>
            PARCEL DIGITAL TWIN — ULPIN IDENTITY
          </div>
          <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', margin: '0.2rem 0' }}>
            {parcel.ulpin}
          </h1>
          <div style={{ fontSize: '0.88rem', color: '#EAF4FC' }}>
            Survey No: <strong>{parcel.surveyNo}</strong> | Village: <strong>{parcel.village}</strong> | District: <strong>{parcel.district}</strong> | Area: <strong>{parcel.area}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => setShowReportModal(true)}
            style={{ color: '#063B6D', fontWeight: 700 }}
          >
            <FileText size={16} /> Generate Verification Report
          </button>
          
          <button 
            className="btn btn-primary"
            onClick={() => setShowWorkflowModal(true)}
            style={{ backgroundColor: '#0757A0', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            <GitPullRequest size={16} /> Create Department Workflow
          </button>
        </div>
      </div>

      {/* TOP STATUS SUMMARY MATRIX */}
      <div className="card" style={{ marginBottom: '1.25rem' }}>
        <div className="card-header">
          <span className="card-title">
            <Activity size={18} color="#0757A0" /> Connected Parcel Status Summary Matrix
          </span>
          <span className="status-pill neutral" style={{ fontSize: '0.72rem' }}>
            Automated Cross-Check Result
          </span>
        </div>

        <div className="card-body">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            {/* OWNERSHIP */}
            <div style={{ padding: '0.65rem', border: '1px solid #D0D5DD', borderRadius: '4px', textAlign: 'center', background: parcel.statusSummary.ownership === 'OK' ? '#EDF7ED' : '#FFF8E6' }}>
              <div style={{ fontSize: '0.7rem', color: '#667085', fontWeight: 700 }}>OWNERSHIP</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: '0.2rem', color: parcel.statusSummary.ownership === 'OK' ? '#16803C' : '#D88900' }}>
                {parcel.statusSummary.ownership === 'OK' ? '✓ Verified' : '⚠ Issue'}
              </div>
            </div>

            {/* REGISTRATION */}
            <div style={{ padding: '0.65rem', border: '1px solid #D0D5DD', borderRadius: '4px', textAlign: 'center', background: '#EDF7ED' }}>
              <div style={{ fontSize: '0.7rem', color: '#667085', fontWeight: 700 }}>REGISTRATION</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: '0.2rem', color: '#16803C' }}>
                ✓ Record Found
              </div>
            </div>

            {/* ENCUMBRANCE */}
            <div style={{ padding: '0.65rem', border: '1px solid #D0D5DD', borderRadius: '4px', textAlign: 'center', background: parcel.statusSummary.encumbrance === 'OK' ? '#EDF7ED' : '#FFF8E6' }}>
              <div style={{ fontSize: '0.7rem', color: '#667085', fontWeight: 700 }}>ENCUMBRANCE</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: '0.2rem', color: parcel.statusSummary.encumbrance === 'OK' ? '#16803C' : '#D88900' }}>
                {parcel.statusSummary.encumbrance === 'OK' ? '✓ Nil Charge' : '⚠ Mortgage Record'}
              </div>
            </div>

            {/* LAND USE */}
            <div style={{ padding: '0.65rem', border: '1px solid #D0D5DD', borderRadius: '4px', textAlign: 'center', background: '#EDF7ED' }}>
              <div style={{ fontSize: '0.7rem', color: '#667085', fontWeight: 700 }}>LAND USE</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: '0.2rem', color: '#16803C' }}>
                ✓ {parcel.landUse}
              </div>
            </div>

            {/* BUILDING PERMISSION */}
            <div style={{ padding: '0.65rem', border: '1px solid #D0D5DD', borderRadius: '4px', textAlign: 'center', background: parcel.statusSummary.buildingPermission === 'OK' ? '#EDF7ED' : '#FDE8E8' }}>
              <div style={{ fontSize: '0.7rem', color: '#667085', fontWeight: 700 }}>PERMITS</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: '0.2rem', color: parcel.statusSummary.buildingPermission === 'OK' ? '#16803C' : '#C62828' }}>
                {parcel.statusSummary.buildingPermission === 'OK' ? '✓ Sanctioned' : '⚠ Missing Record'}
              </div>
            </div>

            {/* PROPERTY TAX */}
            <div style={{ padding: '0.65rem', border: '1px solid #D0D5DD', borderRadius: '4px', textAlign: 'center', background: parcel.statusSummary.propertyTax === 'OK' ? '#EDF7ED' : '#FFF8E6' }}>
              <div style={{ fontSize: '0.7rem', color: '#667085', fontWeight: 700 }}>PROPERTY TAX</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: '0.2rem', color: parcel.statusSummary.propertyTax === 'OK' ? '#16803C' : '#D88900' }}>
                {parcel.statusSummary.propertyTax === 'OK' ? '✓ Clear' : '⚠ Outstanding'}
              </div>
            </div>

            {/* DATA CONSISTENCY */}
            <div style={{ padding: '0.65rem', border: '1px solid #D0D5DD', borderRadius: '4px', textAlign: 'center', background: parcel.issues.length === 0 ? '#EDF7ED' : '#FFF8E6' }}>
              <div style={{ fontSize: '0.7rem', color: '#667085', fontWeight: 700 }}>CONSISTENCY</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: '0.2rem', color: parcel.issues.length === 0 ? '#16803C' : '#D88900' }}>
                {parcel.issues.length === 0 ? '✓ Matched' : `⚠ ${parcel.issues.length} Issues`}
              </div>
            </div>

            {/* SATELLITE CHANGE */}
            <div style={{ padding: '0.65rem', border: '1px solid #D0D5DD', borderRadius: '4px', textAlign: 'center', background: parcel.statusSummary.satelliteChange === 'NONE' ? '#EDF7ED' : '#FDE8E8' }}>
              <div style={{ fontSize: '0.7rem', color: '#667085', fontWeight: 700 }}>SATELLITE</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, marginTop: '0.2rem', color: parcel.statusSummary.satelliteChange === 'NONE' ? '#16803C' : '#C62828' }}>
                {parcel.statusSummary.satelliteChange === 'NONE' ? '✓ Baseline' : '🚨 Change Alert'}
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.78rem', color: '#667085', display: 'flex', alignItems: 'center', gap: '0.4rem', borderTop: '1px solid #EAECF0', paddingTop: '0.6rem' }}>
            <Info size={14} color="#0757A0" />
            <span>
              <strong>Platform Notice:</strong> Verified in connected prototype data. Potential issues require official departmental verification before legal execution.
            </span>
          </div>
        </div>
      </div>

      {/* TWO COLUMN DIGITAL TWIN MAIN LAYOUT */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 360px) 1fr', gap: '1.25rem' }}>
        {/* Left Column: GIS Map Preview & Identity Summary */}
        <div>
          <div className="card" style={{ height: '320px', marginBottom: '1rem', overflow: 'hidden' }}>
            <div className="card-header" style={{ padding: '0.6rem 1rem' }}>
              <span className="card-title" style={{ fontSize: '0.85rem' }}>
                <MapPin size={16} color="#0757A0" /> Cadastral Boundary GIS Preview
              </span>
            </div>
            <div style={{ height: 'calc(100% - 40px)', width: '100%' }}>
              <MapComponent
                parcels={[parcel]}
                selectedParcel={parcel}
                onSelectParcel={() => {}}
                onOpenDigitalTwin={() => {}}
                baseMap="satellite"
              />
            </div>
          </div>

          <div className="card card-blue" style={{ padding: '1rem' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#063B6D', marginBottom: '0.4rem' }}>
              ULPIN Spatial Coordinates
            </div>
            <div style={{ fontSize: '0.78rem', color: '#475467', fontFamily: 'JetBrains Mono, monospace' }}>
              Center: {parcel.identity.gisCoordinates}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#475467', marginTop: '0.3rem' }}>
              State Geo-Database Reference: <strong>27-MH-PUN-{parcel.id}</strong>
            </div>
          </div>

          {/* Connected Data Sources List */}
          <div className="card" style={{ marginTop: '1rem', padding: '1rem' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#063B6D', marginBottom: '0.5rem' }}>
              Connected Data Providers
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.78rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>7/12 Mahabhulekh RoR:</span> <strong style={{ color: '#16803C' }}>Connected</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Sub-Registrar SGR:</span> <strong style={{ color: '#16803C' }}>Connected</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>PMRDA Master Plan DP:</span> <strong style={{ color: '#16803C' }}>Connected</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Property Tax Engine:</span> <strong style={{ color: '#D88900' }}>Simulated API</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Sentinel-2 Satellite:</span> <strong style={{ color: '#16803C' }}>Active Scan</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 9 Detailed Digital Twin Sections */}
        <div>
          {/* Navigation Tabs for Sections A-I */}
          <div style={{ 
            display: 'flex', 
            gap: '0.25rem', 
            overflowX: 'auto', 
            paddingBottom: '0.5rem', 
            marginBottom: '1rem',
            borderBottom: '2px solid #D0D5DD' 
          }}>
            {[
              { id: 'identity', label: 'A. Identity' },
              { id: 'ownership', label: 'B. Rights (7/12)' },
              { id: 'registration', label: 'C. Registration' },
              { id: 'encumbrance', label: 'D. Encumbrance' },
              { id: 'planning', label: 'E. Land Use & Planning' },
              { id: 'fiscal', label: 'F. Property Tax' },
              { id: 'infra', label: 'G. Infrastructure' },
              { id: 'restrictions', label: 'H. Restrictions' },
              { id: 'spatial', label: 'I. Spatial AI' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '0.4rem 0.8rem',
                  border: 'none',
                  background: activeTab === tab.id ? '#0757A0' : 'transparent',
                  color: activeTab === tab.id ? '#FFFFFF' : '#475467',
                  borderRadius: '4px 4px 0 0',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Section A: Parcel Identity */}
          {activeTab === 'identity' && (
            <div className="card">
              <div className="card-header">
                <span className="card-title">A. PARCEL IDENTITY & BASELINE GEOMETRY</span>
              </div>
              <div className="card-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                  <div><span style={{ color: '#667085' }}>ULPIN Identifier:</span> <br/><strong>{parcel.identity.ulpin}</strong></div>
                  <div><span style={{ color: '#667085' }}>Survey / Gut Number:</span> <br/><strong>{parcel.identity.surveyNo}</strong></div>
                  <div><span style={{ color: '#667085' }}>Sub-Division Hissa:</span> <br/><strong>{parcel.identity.subDivision}</strong></div>
                  <div><span style={{ color: '#667085' }}>Cadastral Parcel Area:</span> <br/><strong>{parcel.identity.areaHa} ({parcel.identity.areaSqM})</strong></div>
                  <div><span style={{ color: '#667085' }}>Village / Settlement:</span> <br/><strong>{parcel.identity.village}</strong></div>
                  <div><span style={{ color: '#667085' }}>Taluka / Sub-District:</span> <br/><strong>{parcel.identity.taluka}</strong></div>
                  <div><span style={{ color: '#667085' }}>District:</span> <br/><strong>{parcel.identity.district}</strong></div>
                  <div><span style={{ color: '#667085' }}>State Code:</span> <br/><strong>{parcel.identity.state} (Code: {parcel.identity.stateCode})</strong></div>
                </div>
              </div>
            </div>
          )}

          {/* Section B: Ownership & Rights */}
          {activeTab === 'ownership' && (
            <div className="card">
              <div className="card-header">
                <span className="card-title">B. OWNERSHIP & RIGHTS (7/12 ROR MUTATION RECORD)</span>
              </div>
              <div className="card-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                  <div><span style={{ color: '#667085' }}>RoR Status:</span> <br/><strong style={{ color: '#16803C' }}>{parcel.ownership.rorStatus}</strong></div>
                  <div><span style={{ color: '#667085' }}>Khata / Account No:</span> <br/><strong>{parcel.ownership.khataNo}</strong></div>
                  <div><span style={{ color: '#667085' }}>Latest Mutation Entry:</span> <br/><strong>{parcel.ownership.mutationNo} ({parcel.ownership.lastMutationDate})</strong></div>
                  <div><span style={{ color: '#667085' }}>Primary Owner Name:</span> <br/><strong>{parcel.ownership.primaryOwner}</strong></div>
                  <div><span style={{ color: '#667085' }}>Joint Holders Count:</span> <br/><strong>{parcel.ownership.jointOwnersCount} Registered Holders</strong></div>
                  <div><span style={{ color: '#667085' }}>Tenure / Rights Type:</span> <br/><strong>{parcel.ownership.rightsType}</strong></div>
                </div>
              </div>
            </div>
          )}

          {/* Section C: Registration */}
          {activeTab === 'registration' && (
            <div className="card">
              <div className="card-header">
                <span className="card-title">C. REGISTRATION & DEED HISTORY (SUB-REGISTRAR)</span>
              </div>
              <div className="card-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                  <div><span style={{ color: '#667085' }}>SGR Status:</span> <br/><strong style={{ color: '#16803C' }}>{parcel.registration.status}</strong></div>
                  <div><span style={{ color: '#667085' }}>Sub-Registrar Office:</span> <br/><strong>{parcel.registration.sgrOffice}</strong></div>
                  <div><span style={{ color: '#667085' }}>Transaction Doc ID:</span> <br/><strong>{parcel.registration.transactionId}</strong></div>
                  <div><span style={{ color: '#667085' }}>Registration Date:</span> <br/><strong>{parcel.registration.registrationDate}</strong></div>
                  <div><span style={{ color: '#667085' }}>Deed Instrument Type:</span> <br/><strong>{parcel.registration.deedType}</strong></div>
                  <div><span style={{ color: '#667085' }}>Stamp Duty Verification:</span> <br/><strong>{parcel.registration.stampDutyStatus}</strong></div>
                </div>
              </div>
            </div>
          )}

          {/* Section D: Encumbrance */}
          {activeTab === 'encumbrance' && (
            <div className="card">
              <div className="card-header">
                <span className="card-title">D. ENCUMBRANCE, MORTGAGES & DISPUTES</span>
              </div>
              <div className="card-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                  <div><span style={{ color: '#667085' }}>Mortgage Charge:</span> <br/><strong style={{ color: parcel.statusSummary.encumbrance === 'OK' ? '#16803C' : '#D88900' }}>{parcel.encumbrance.mortgageStatus}</strong></div>
                  <div><span style={{ color: '#667085' }}>Financial Institution:</span> <br/><strong>{parcel.encumbrance.bankName}</strong></div>
                  <div><span style={{ color: '#667085' }}>Hypothecation Charge Amount:</span> <br/><strong>{parcel.encumbrance.loanAmount}</strong></div>
                  <div><span style={{ color: '#667085' }}>Civil Litigation Status:</span> <br/><strong>{parcel.encumbrance.disputeIndicator}</strong></div>
                </div>
              </div>
            </div>
          )}

          {/* Section E: Land Use & Planning */}
          {activeTab === 'planning' && (
            <div className="card">
              <div className="card-header">
                <span className="card-title">E. LAND USE & MASTER PLAN ZONING</span>
              </div>
              <div className="card-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                  <div><span style={{ color: '#667085' }}>Current Land Use:</span> <br/><strong>{parcel.landUsePlanning.currentLandUse}</strong></div>
                  <div><span style={{ color: '#667085' }}>Development Plan Zone:</span> <br/><strong>{parcel.landUsePlanning.masterPlanZone}</strong></div>
                  <div><span style={{ color: '#667085' }}>Permitted Activity:</span> <br/><strong>{parcel.landUsePlanning.permittedUse}</strong></div>
                  <div><span style={{ color: '#667085' }}>Building Permission Record:</span> <br/><strong style={{ color: parcel.statusSummary.buildingPermission === 'OK' ? '#16803C' : '#C62828' }}>{parcel.landUsePlanning.buildingPermissionStatus}</strong></div>
                </div>
              </div>
            </div>
          )}

          {/* Section F: Fiscal */}
          {activeTab === 'fiscal' && (
            <div className="card">
              <div className="card-header">
                <span className="card-title">F. FISCAL & PROPERTY TAX ASSESSMENT</span>
              </div>
              <div className="card-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                  <div><span style={{ color: '#667085' }}>Property Tax Clearance:</span> <br/><strong style={{ color: parcel.statusSummary.propertyTax === 'OK' ? '#16803C' : '#D88900' }}>{parcel.fiscal.propertyTaxStatus}</strong></div>
                  <div><span style={{ color: '#667085' }}>Municipal Assessment ID:</span> <br/><strong>{parcel.fiscal.assessmentId}</strong></div>
                  <div><span style={{ color: '#667085' }}>Outstanding Balance:</span> <br/><strong>{parcel.fiscal.outstandingAmount}</strong></div>
                  <div><span style={{ color: '#667085' }}>Taxed Land Extent:</span> <br/><strong>{parcel.fiscal.taxedArea}</strong></div>
                </div>
              </div>
            </div>
          )}

          {/* Section G: Infrastructure */}
          {activeTab === 'infra' && (
            <div className="card">
              <div className="card-header">
                <span className="card-title">G. CONNECTED UTILITIES & INFRASTRUCTURE</span>
              </div>
              <div className="card-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                  <div><span style={{ color: '#667085' }}>Electricity Connection:</span> <br/><strong>{parcel.infrastructure.electricity}</strong></div>
                  <div><span style={{ color: '#667085' }}>Water Supply Pipeline:</span> <br/><strong>{parcel.infrastructure.water}</strong></div>
                  <div><span style={{ color: '#667085' }}>Road Access Frontage:</span> <br/><strong>{parcel.infrastructure.roadAccess}</strong></div>
                  <div><span style={{ color: '#667085' }}>Drainage Connection:</span> <br/><strong>{parcel.infrastructure.drainage}</strong></div>
                </div>
              </div>
            </div>
          )}

          {/* Section H: Restrictions */}
          {activeTab === 'restrictions' && (
            <div className="card">
              <div className="card-header">
                <span className="card-title">H. STATUTORY RESTRICTIONS & BUFFER ZONES</span>
              </div>
              <div className="card-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                  <div><span style={{ color: '#667085' }}>Environmental Restriction:</span> <br/><strong>{parcel.restrictions.environmental}</strong></div>
                  <div><span style={{ color: '#667085' }}>Permissible FAR / FSI:</span> <br/><strong>{parcel.restrictions.planning}</strong></div>
                  <div style={{ gridColumn: 'span 2' }}><span style={{ color: '#667085' }}>Other Statutory Clearances:</span> <br/><strong>{parcel.restrictions.otherRestrictions}</strong></div>
                </div>
              </div>
            </div>
          )}

          {/* Section I: Spatial AI */}
          {activeTab === 'spatial' && (
            <div className="card">
              <div className="card-header">
                <span className="card-title">I. SPATIAL AI & SATELLITE CHANGE DETECTION</span>
              </div>
              <div className="card-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.88rem' }}>
                  <div><span style={{ color: '#667085' }}>Satellite Temporal Scan:</span> <br/><strong style={{ color: parcel.statusSummary.satelliteChange === 'NONE' ? '#16803C' : '#C62828' }}>{parcel.spatialIntelligence.changeStatus}</strong></div>
                  <div><span style={{ color: '#667085' }}>Scan Date / Source:</span> <br/><strong>{parcel.spatialIntelligence.lastSatelliteScan}</strong></div>
                  <div><span style={{ color: '#667085' }}>Detected New Footprint:</span> <br/><strong>{parcel.spatialIntelligence.detectedStructureArea}</strong></div>
                  <div><span style={{ color: '#667085' }}>AI Confidence Rating:</span> <br/><strong>{parcel.spatialIntelligence.confidenceScore}</strong></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* VERIFICATION REPORT PRINTABLE MODAL */}
      {showReportModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '850px' }}>
            <div className="modal-header">
              <span className="modal-title">OFFICIAL PARCEL VERIFICATION REPORT</span>
              <button className="modal-close" onClick={() => setShowReportModal(false)}><X size={20} /></button>
            </div>

            <div className="modal-body" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
              {/* Header inside Report */}
              <div style={{ borderBottom: '2px solid #063B6D', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0757A0', textTransform: 'uppercase' }}>STATE GOVERNMENT OF MAHARASHTRA</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#063B6D' }}>LAND STACK VERIFICATION REPORT</div>
                  <div style={{ fontSize: '0.8rem', color: '#667085', marginTop: '0.2rem' }}>Report Reference: <strong>LSR-2026-{parcel.id}-VER</strong> | Issued: <strong>30 Sep 2026</strong></div>
                </div>
                <div style={{ textAlign: 'right', border: '1px solid #D0D5DD', padding: '0.5rem 0.8rem', borderRadius: '4px', backgroundColor: '#F8FAFC' }}>
                  <div style={{ fontSize: '0.7rem', color: '#667085', fontWeight: 700 }}>PARCEL ULPIN</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#063B6D' }}>{parcel.ulpin}</div>
                </div>
              </div>

              {/* Report Sections */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                <div><strong>1. Ownership Status:</strong> {parcel.ownership.primaryOwner} ({parcel.ownershipStatus})</div>
                <div><strong>2. Sub-Registrar Status:</strong> {parcel.registration.status}</div>
                <div><strong>3. Encumbrance Charge:</strong> {parcel.encumbrance.mortgageStatus}</div>
                <div><strong>4. Land Use Zoning:</strong> {parcel.landUsePlanning.masterPlanZone}</div>
                <div><strong>5. Building Sanction:</strong> {parcel.landUsePlanning.buildingPermissionStatus}</div>
                <div><strong>6. Property Tax Dues:</strong> {parcel.fiscal.propertyTaxStatus} ({parcel.fiscal.outstandingAmount})</div>
                <div><strong>7. Data Consistency:</strong> {parcel.issues.length === 0 ? 'No Discrepancies Found' : `${parcel.issues.length} Inconsistencies Flagged`}</div>
                <div><strong>8. Satellite Scan:</strong> {parcel.spatialIntelligence.changeStatus}</div>
              </div>

              {/* Issues List in Report */}
              {parcel.issues.length > 0 && (
                <div style={{ background: '#FFF8E6', border: '1px solid #FFE0B2', padding: '1rem', borderRadius: '4px', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#D88900', marginBottom: '0.5rem' }}>
                    9. Detected Data & Spatial Issues Requiring Verification:
                  </div>
                  {parcel.issues.map(iss => (
                    <div key={iss.id} style={{ fontSize: '0.8rem', color: '#172B4D', marginBottom: '0.4rem' }}>
                      • <strong>{iss.title}</strong> [{iss.severity} SEVERITY]: {iss.description}
                    </div>
                  ))}
                </div>
              )}

              {/* Legal Wording Disclaimer */}
              <div style={{ fontSize: '0.75rem', color: '#667085', borderTop: '1px solid #EAECF0', paddingTop: '1rem', lineHeight: 1.5 }}>
                <strong>Disclaimer Wording:</strong> Information compiled from connected prototype state datasets. Requires official departmental field verification before legal title transfer or building sanction execution.
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowReportModal(false)}>Close</button>
              <button className="btn btn-primary" onClick={() => window.print()}><Printer size={16} /> Print Report</button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE WORKFLOW MODAL */}
      {showWorkflowModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '600px' }}>
            <div className="modal-header">
              <span className="modal-title">Create Departmental Verification Task</span>
              <button className="modal-close" onClick={() => setShowWorkflowModal(false)}><X size={20} /></button>
            </div>

            <form onSubmit={handleCreateWorkflow}>
              <div className="modal-body">
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#063B6D' }}>Target Parcel ULPIN:</label>
                  <input type="text" className="input-field" value={parcel.ulpin} readOnly style={{ background: '#F1F5F9' }} />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#063B6D' }}>Workflow Task Title:</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    value={workflowForm.title} 
                    onChange={e => setWorkflowForm({...workflowForm, title: e.target.value})}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#063B6D' }}>Assigned Department:</label>
                  <select 
                    className="input-field"
                    value={workflowForm.department}
                    onChange={e => setWorkflowForm({...workflowForm, department: e.target.value})}
                  >
                    <option value="Revenue & Planning Department">Revenue & Planning Department</option>
                    <option value="Registration & Stamps Department">Registration & Stamps Department</option>
                    <option value="PMRDA Municipal Authority">PMRDA Municipal Authority</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#063B6D' }}>Priority Level:</label>
                  <select 
                    className="input-field"
                    value={workflowForm.priority}
                    onChange={e => setWorkflowForm({...workflowForm, priority: e.target.value})}
                  >
                    <option value="HIGH">HIGH (Action within 48h)</option>
                    <option value="MEDIUM">MEDIUM (Standard Routine)</option>
                    <option value="LOW">LOW (Informational)</option>
                  </select>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowWorkflowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Dispatch Workflow Task →</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
