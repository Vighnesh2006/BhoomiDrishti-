import React from 'react';
import { 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Map, 
  GitPullRequest, 
  CheckCircle2, 
  FileCheck2, 
  Building, 
  Database,
  Search,
  Eye,
  Activity
} from 'lucide-react';

export default function LandingPage({ navigate }) {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100%' }}>
      {/* Hero Banner */}
      <div style={{ 
        backgroundColor: '#063B6D', 
        color: '#FFFFFF', 
        padding: '3.5rem 2rem 4rem 2rem', 
        borderBottom: '4px solid #0757A0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'rgba(255, 255, 255, 0.1)', 
            padding: '0.35rem 0.9rem', 
            borderRadius: '20px', 
            fontSize: '0.8rem', 
            fontWeight: 600, 
            letterSpacing: '0.5px',
            marginBottom: '1.25rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <Sparkles size={14} color="#93C5FD" />
            INTELLIGENT PARCEL-CENTRIC LAND GOVERNANCE PLATFORM
          </div>

          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-0.5px', margin: '0.5rem 0 1rem 0', color: '#FFFFFF' }}>
            LAND STACK
          </h1>

          <h2 style={{ fontSize: '1.35rem', fontWeight: 500, color: '#EAF4FC', marginBottom: '1.25rem' }}>
            Intelligent Parcel-Centric Land Governance & Verification
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#D0E1FD', maxWidth: '720px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
            Connect land records, spatial information and governance workflows around a common parcel identity.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              className="btn btn-primary" 
              onClick={() => navigate('/explorer')}
              style={{ fontSize: '1rem', padding: '0.75rem 1.75rem', backgroundColor: '#0757A0', borderRadius: '6px' }}
            >
              Explore Land Stack <ArrowRight size={18} />
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => navigate('/workflows')}
              style={{ fontSize: '1rem', padding: '0.75rem 1.75rem', borderRadius: '6px', color: '#063B6D' }}
            >
              View Prototype Workflow <GitPullRequest size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Simplified Architecture Flow */}
      <div style={{ backgroundColor: '#F8FAFC', padding: '3rem 2rem', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#063B6D' }}>
              Interoperable Land Governance Architecture
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#667085', marginTop: '0.3rem' }}>
              We provide an interoperable intelligence and verification layer on top of existing government systems.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
            gap: '0.75rem', 
            alignItems: 'center' 
          }}>
            {/* Step 1 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #D0D5DD', padding: '1rem', borderRadius: '6px', textAlign: 'center' }}>
              <Database size={24} color="#0757A0" style={{ marginBottom: '0.4rem' }} />
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#063B6D' }}>Existing Systems</div>
              <div style={{ fontSize: '0.7rem', color: '#667085', marginTop: '0.2rem' }}>7/12 RoR, Sub-Registrar, Tax</div>
            </div>

            <div style={{ textAlign: 'center', color: '#0757A0', fontWeight: 800, fontSize: '1.2rem' }}>↓</div>

            {/* Step 2 */}
            <div style={{ background: '#EAF4FC', border: '1.5px solid #0757A0', padding: '1rem', borderRadius: '6px', textAlign: 'center' }}>
              <Map size={24} color="#0757A0" style={{ marginBottom: '0.4rem' }} />
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#063B6D' }}>ULPIN + GIS</div>
              <div style={{ fontSize: '0.7rem', color: '#475467', marginTop: '0.2rem' }}>14-Digit Parcel Identity</div>
            </div>

            <div style={{ textAlign: 'center', color: '#0757A0', fontWeight: 800, fontSize: '1.2rem' }}>↓</div>

            {/* Step 3 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #D0D5DD', padding: '1rem', borderRadius: '6px', textAlign: 'center' }}>
              <Layers size={24} color="#0757A0" style={{ marginBottom: '0.4rem' }} />
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#063B6D' }}>Parcel Digital Twin</div>
              <div style={{ fontSize: '0.7rem', color: '#667085', marginTop: '0.2rem' }}>360° Multi-Source View</div>
            </div>

            <div style={{ textAlign: 'center', color: '#0757A0', fontWeight: 800, fontSize: '1.2rem' }}>↓</div>

            {/* Step 4 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #D0D5DD', padding: '1rem', borderRadius: '6px', textAlign: 'center' }}>
              <CheckCircle2 size={24} color="#0757A0" style={{ marginBottom: '0.4rem' }} />
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#063B6D' }}>Verification Engine</div>
              <div style={{ fontSize: '0.7rem', color: '#667085', marginTop: '0.2rem' }}>Consistency & Geo-AI</div>
            </div>

            <div style={{ textAlign: 'center', color: '#0757A0', fontWeight: 800, fontSize: '1.2rem' }}>↓</div>

            {/* Step 5 */}
            <div style={{ background: '#FFFFFF', border: '1px solid #D0D5DD', padding: '1rem', borderRadius: '6px', textAlign: 'center' }}>
              <GitPullRequest size={24} color="#0757A0" style={{ marginBottom: '0.4rem' }} />
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#063B6D' }}>Department Workflow</div>
              <div style={{ fontSize: '0.7rem', color: '#667085', marginTop: '0.2rem' }}>Event-Driven Officer Tasks</div>
            </div>

            <div style={{ textAlign: 'center', color: '#0757A0', fontWeight: 800, fontSize: '1.2rem' }}>↓</div>

            {/* Step 6 */}
            <div style={{ background: '#EDF7ED', border: '1px solid #16803C', padding: '1rem', borderRadius: '6px', textAlign: 'center' }}>
              <FileCheck2 size={24} color="#16803C" style={{ marginBottom: '0.4rem' }} />
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#16803C' }}>Citizen Services</div>
              <div style={{ fontSize: '0.7rem', color: '#16803C', marginTop: '0.2rem' }}>Verified Due-Diligence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div style={{ padding: '3.5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#063B6D' }}>
            Core Capabilities & Innovation Layer
          </h3>
          <p style={{ fontSize: '0.92rem', color: '#667085', marginTop: '0.3rem' }}>
            Moving land governance from disconnected databases to parcel-centric intelligence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {/* Card 1 */}
          <div className="card card-blue" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => navigate('/parcel/MH-PUN-001245')}>
            <div style={{ width: '48px', height: '48px', borderRadius: '6px', background: '#0757A0', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Layers size={24} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#063B6D', marginBottom: '0.5rem' }}>
              1. Parcel Digital Twin
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#475467', lineHeight: 1.5 }}>
              Aggregates identity, 7/12 RoR, Sub-Registrar deeds, encumbrance, tax, master plan zoning, and infrastructure into a unified 360-degree view.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => navigate('/verification')}>
            <div style={{ width: '48px', height: '48px', borderRadius: '6px', background: '#0757A0', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <CheckCircle2 size={24} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#063B6D', marginBottom: '0.5rem' }}>
              2. Data Consistency Engine
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#475467', lineHeight: 1.5 }}>
              Runs 10+ deterministic verification rules across Cadastral Maps, RoRs, Deeds, and Tax records to instantly flag area and ownership discrepancies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => navigate('/changes')}>
            <div style={{ width: '48px', height: '48px', borderRadius: '6px', background: '#0757A0', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Activity size={24} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#063B6D', marginBottom: '0.5rem' }}>
              3. Geo-AI Change Detection
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#475467', lineHeight: 1.5 }}>
              Compares high-resolution satellite imagery across time periods to detect unpermitted construction, encroached boundaries, and land-use shifts.
            </p>
          </div>

          {/* Card 4 */}
          <div className="card" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => navigate('/workflows')}>
            <div style={{ width: '48px', height: '48px', borderRadius: '6px', background: '#0757A0', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <ShieldCheck size={24} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#063B6D', marginBottom: '0.5rem' }}>
              4. Explainable Verification
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#475467', lineHeight: 1.5 }}>
              Provides evidence-backed rationale for every alert, generating actionable departmental workflow tasks with full tamper-proof audit trails.
            </p>
          </div>
        </div>
      </div>

      {/* Key Differentiator Box */}
      <div style={{ backgroundColor: '#EAF4FC', borderTop: '1px solid #BEE3F8', padding: '2.5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#063B6D', marginBottom: '0.6rem' }}>
            Key Platform Differentiator
          </h4>
          <p style={{ fontSize: '1rem', color: '#172B4D', fontStyle: 'italic', lineHeight: 1.6 }}>
            "Existing platforms provide land records and services. Land Stack Intelligence connects, verifies, interprets and acts on them."
          </p>
        </div>
      </div>
    </div>
  );
}
