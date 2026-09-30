import React, { useState } from 'react';
import { STATE_ADAPTERS, MOCK_PARCELS } from '../data/mockParcels';
import { 
  Share2, 
  Code, 
  Layers, 
  Building2, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  Database
} from 'lucide-react';

export default function InteroperabilityPage() {
  const [selectedEndpoint, setSelectedEndpoint] = useState('/api/parcels/MH-PUN-001245');
  const [activeStateTab, setActiveStateTab] = useState('MH');

  const apiEndpoints = [
    { url: '/api/parcels/MH-PUN-001245', method: 'GET', desc: 'Fetch full Parcel Digital Twin record' },
    { url: '/api/parcels/MH-PUN-001245/ownership', method: 'GET', desc: 'Fetch 7/12 RoR & Khata ownership details' },
    { url: '/api/parcels/MH-PUN-001245/registration', method: 'GET', desc: 'Fetch Sub-Registrar conveyance deed history' },
    { url: '/api/parcels/MH-PUN-001245/verification', method: 'GET', desc: 'Fetch Data Consistency & Spatial AI verification alerts' },
    { url: '/api/workflows', method: 'POST', desc: 'Dispatch new event-driven departmental verification task' }
  ];

  const sampleResponses = {
    '/api/parcels/MH-PUN-001245': {
      ulpin: 'MH-PUN-001245',
      surveyNo: '125/2',
      areaHa: 2.35,
      village: 'Hinjawadi Phase 3',
      district: 'Pune',
      state: 'Maharashtra',
      verificationStatus: 'ISSUES_DETECTED',
      issuesCount: 2,
      lastUpdated: '2026-09-30T10:42:00Z'
    },
    '/api/parcels/MH-PUN-001245/ownership': {
      ulpin: 'MH-PUN-001245',
      khataNo: 'KHA-300',
      mutationNo: 'MUT-2024-890',
      primaryOwner: 'Kulkarni Estate Developers LLP',
      rightsType: 'Occupant Class I (Bhumiswami)',
      jointHoldersCount: 3
    },
    '/api/parcels/MH-PUN-001245/registration': {
      ulpin: 'MH-PUN-001245',
      sgrOffice: 'Sub-Registrar Mulshi-2',
      transactionId: 'REG-2023-4500',
      deedType: 'Deed of Conveyance',
      stampDutyStatus: 'FULLY_PAID'
    },
    '/api/parcels/MH-PUN-001245/verification': {
      ulpin: 'MH-PUN-001245',
      areaDiscrepancy: {
        cadastralHa: 2.40,
        rorHa: 2.35,
        differenceHa: 0.05,
        severity: 'MEDIUM'
      },
      spatialAlert: {
        unpermittedStructure: true,
        confidence: 0.87,
        detectedAreaSqM: 420
      }
    },
    '/api/workflows': {
      status: 'SUCCESS',
      taskId: 'WF-2026-809',
      assignedOfficer: 'S. K. Kulkarni',
      message: 'Workflow task created and audit log recorded.'
    }
  };

  return (
    <div className="content-container">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <Share2 size={24} color="#0757A0" /> State Adapter Architecture & Developer API
          </h1>
          <p className="page-subtitle">
            Federated schema mapping across diverse state land record systems (Maharashtra 7/12, TN Patta, KA Bhoomi).
          </p>
        </div>
      </div>

      {/* VISUAL STATE ADAPTER ARCHITECTURE */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-header" style={{ backgroundColor: '#063B6D', color: '#FFFFFF' }}>
          <span className="card-title" style={{ color: '#FFFFFF' }}>
            State Adapter & Common Land Data Model Architecture
          </span>
        </div>

        <div className="card-body">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', 
            gap: '0.75rem', 
            textAlign: 'center',
            alignItems: 'center',
            fontSize: '0.82rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{ background: '#FFFFFF', border: '1px solid #D0D5DD', padding: '0.75rem', borderRadius: '4px' }}>
              <Database size={20} color="#0757A0" style={{ marginBottom: '0.2rem' }} />
              <div style={{ fontWeight: 700, color: '#063B6D' }}>STATE RECORD DATA</div>
              <div style={{ fontSize: '0.7rem', color: '#667085' }}>Mahabhulekh / Patta</div>
            </div>

            <div style={{ fontWeight: 800, color: '#0757A0' }}>→</div>

            <div style={{ background: '#EAF4FC', border: '1.5px solid #0757A0', padding: '0.75rem', borderRadius: '4px' }}>
              <Building2 size={20} color="#0757A0" style={{ marginBottom: '0.2rem' }} />
              <div style={{ fontWeight: 700, color: '#063B6D' }}>STATE ADAPTER</div>
              <div style={{ fontSize: '0.7rem', color: '#475467' }}>Schema Normalizer</div>
            </div>

            <div style={{ fontWeight: 800, color: '#0757A0' }}>→</div>

            <div style={{ background: '#FFFFFF', border: '1px solid #D0D5DD', padding: '0.75rem', borderRadius: '4px' }}>
              <Layers size={20} color="#0757A0" style={{ marginBottom: '0.2rem' }} />
              <div style={{ fontWeight: 700, color: '#063B6D' }}>SEMANTIC MAPPING</div>
              <div style={{ fontSize: '0.7rem', color: '#667085' }}>Field Standardization</div>
            </div>

            <div style={{ fontWeight: 800, color: '#0757A0' }}>→</div>

            <div style={{ background: '#EDF7ED', border: '1.5px solid #16803C', padding: '0.75rem', borderRadius: '4px' }}>
              <CheckCircle2 size={20} color="#16803C" style={{ marginBottom: '0.2rem' }} />
              <div style={{ fontWeight: 700, color: '#16803C' }}>COMMON DATA MODEL</div>
              <div style={{ fontSize: '0.7rem', color: '#16803C' }}>ULPIN Identity Standard</div>
            </div>
          </div>

          {/* State Mappings Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {STATE_ADAPTERS.map((adapter) => (
              <div key={adapter.code} style={{ border: '1px solid #D0D5DD', borderRadius: '6px', padding: '1rem', background: '#F8FAFC' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#063B6D', marginBottom: '0.3rem' }}>
                  {adapter.state} Adapter ({adapter.code})
                </div>
                <div style={{ fontSize: '0.78rem', color: '#667085', marginBottom: '0.5rem' }}>
                  Native Terminology: <strong>{adapter.localTerm}</strong>
                </div>

                <div style={{ fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', borderTop: '1px solid #EAECF0', paddingTop: '0.5rem' }}>
                  <div>Survey No → <strong>{adapter.commonMapping.surveyNumber}</strong></div>
                  <div>Owner Name → <strong>{adapter.commonMapping.ownerName}</strong></div>
                  <div>Encumbrance → <strong>{adapter.commonMapping.encumbrance}</strong></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DEVELOPER API CONSOLE */}
      <div className="card">
        <div className="card-header" style={{ backgroundColor: '#063B6D', color: '#FFFFFF' }}>
          <span className="card-title" style={{ color: '#FFFFFF' }}>
            <Code size={18} /> Interactive Prototype REST API Sandbox
          </span>
        </div>

        <div className="card-body">
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '1.25rem' }}>
            {/* Endpoints selector */}
            <div>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#063B6D', marginBottom: '0.5rem' }}>
                Select API Endpoint:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {apiEndpoints.map(ep => (
                  <button
                    key={ep.url}
                    onClick={() => setSelectedEndpoint(ep.url)}
                    style={{
                      textAlign: 'left',
                      padding: '0.6rem 0.75rem',
                      border: `1px solid ${selectedEndpoint === ep.url ? '#0757A0' : '#EAECF0'}`,
                      borderRadius: '4px',
                      background: selectedEndpoint === ep.url ? '#EAF4FC' : '#FFFFFF',
                      fontSize: '0.78rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ fontWeight: 800, color: ep.method === 'GET' ? '#16803C' : '#D88900', marginRight: '0.4rem' }}>{ep.method}</span>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#063B6D' }}>{ep.url}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Response JSON Viewer */}
            <div style={{ background: '#1E293B', borderRadius: '6px', padding: '1rem', color: '#F8FAFC' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', borderBottom: '1px solid #334155', paddingBottom: '0.4rem', fontSize: '0.78rem' }}>
                <span style={{ color: '#38BDF8', fontFamily: 'JetBrains Mono, monospace' }}>HTTP/1.1 200 OK — Content-Type: application/json</span>
                <span style={{ color: '#4ADE80' }}>Response: 42ms</span>
              </div>

              <pre style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', overflowX: 'auto', margin: 0, color: '#E2E8F0' }}>
                {JSON.stringify(sampleResponses[selectedEndpoint] || {}, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
