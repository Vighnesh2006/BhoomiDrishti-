import React, { useState } from 'react';
import { 
  Layers, 
  FileCheck2, 
  Radio, 
  TrendingUp, 
  ArrowRight,
  User,
  Landmark,
  MapPin,
  CheckCircle2,
  Search,
  Sparkles,
  Lock,
  X,
  FileText,
  ShieldCheck,
  Building,
  Database,
  GitPullRequest,
  Check,
  Zap,
  ShieldAlert
} from 'lucide-react';

export default function LandingPage({ navigate, isAuthenticated }) {
  const [showSpecModal, setShowSpecModal] = useState(false);
  const [authNotice, setAuthNotice] = useState(false);

  const handleProtectedAction = (targetRoute) => {
    if (!isAuthenticated) {
      setAuthNotice(true);
      return;
    }
    navigate(targetRoute);
  };

  const cards = [
    {
      title: 'Unified Parcel View',
      desc: 'Connects data across 9 departmental layers around ULPIN',
      icon: Layers,
      route: '/explorer'
    },
    {
      title: 'Data Verification',
      desc: 'Detects area & ownership inconsistencies across records',
      icon: FileCheck2,
      route: '/verification'
    },
    {
      title: 'Geospatial Intelligence',
      desc: 'Monitors unpermitted structural changes using satellite AI',
      icon: Radio,
      route: '/changes'
    },
    {
      title: 'Faster Governance',
      desc: 'Enables informed, transparent, and event-driven decisions',
      icon: TrendingUp,
      route: '/officer'
    }
  ];

  const howSteps = [
    {
      step: '01',
      title: 'ULPIN Parcel Identification',
      desc: 'Enter 14-digit geocoded ULPIN identifier or survey number to locate parcel geometry on the GIS map.',
      icon: Search
    },
    {
      step: '02',
      title: 'Digital Twin Aggregation',
      desc: 'Platform automatically compiles 7/12 RoR, Sub-Registrar deeds, tax records, and PMRDA zoning into one twin.',
      icon: Layers
    },
    {
      step: '03',
      title: 'Automated Consistency Check',
      desc: '10 deterministic verification rules reconcile cadastral area, mutated co-owners, and document references.',
      icon: CheckCircle2
    },
    {
      step: '04',
      title: 'Geo-AI Satellite Scan',
      desc: 'Temporal satellite analysis compares optical imagery over time to flag unpermitted structural expansions.',
      icon: Radio
    },
    {
      step: '05',
      title: 'Event-Driven Officer Task',
      desc: 'Discrepancies automatically create and assign field verification tasks to Circle Revenue Inspectors.',
      icon: GitPullRequest
    },
    {
      step: '06',
      title: 'Certified Due-Diligence Output',
      desc: 'Generates official printable parcel verification reports while recording immutable audit trail logs.',
      icon: FileText
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
      {/* Top Header Bar */}
      <header style={{
        height: '75px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 3rem',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        {/* Logo & Subtitle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: '1.2rem'
          }}>
            BD
          </div>
          <div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.1 }}>
              BhoomiDrishti
            </div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#64748B' }}>
              Intelligent Parcel-Centric Land Governance
            </div>
          </div>
        </div>

        {/* Header Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#home" style={{ color: '#1D4ED8', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid #1D4ED8', paddingBottom: '0.2rem' }}>Home</a>
          <a href="#about" style={{ color: '#475467', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>About</a>
          <a href="#features" style={{ color: '#475467', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>Features</a>
          <a href="#how" style={{ color: '#475467', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>How it Works</a>
          <a href="#usecases" style={{ color: '#475467', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>Use Cases</a>
          <button onClick={() => setShowSpecModal(true)} style={{ background: 'none', border: 'none', color: '#1D4ED8', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}>Full Platform Specs</button>
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/login')}
            style={{ padding: '0.5rem 1.2rem', borderColor: '#1D4ED8', color: '#1D4ED8', fontWeight: 600, fontSize: '0.9rem', borderRadius: '6px' }}
          >
            {isAuthenticated ? 'Portal Workspace' : 'Login'}
          </button>

          <button 
            className="btn btn-primary"
            onClick={() => navigate('/roles')}
            style={{ padding: '0.5rem 1.4rem', backgroundColor: '#1D4ED8', fontSize: '0.9rem', borderRadius: '6px', fontWeight: 600 }}
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Auth Guard Alert Bar if unauthenticated user tries to click a protected module */}
      {authNotice && (
        <div style={{ backgroundColor: '#FEF3C7', borderBottom: '1px solid #FCD34D', padding: '0.75rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#92400E', fontSize: '0.88rem', fontWeight: 600 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Lock size={18} />
            Authentication Required: Please sign in or select your role to access working governance modules.
          </div>
          <button 
            className="btn btn-sm btn-primary" 
            onClick={() => navigate('/login')}
            style={{ backgroundColor: '#1D4ED8' }}
          >
            Sign In Now →
          </button>
        </div>
      )}

      {/* Main Hero Section */}
      <div id="home" style={{
        position: 'relative',
        minHeight: '620px',
        backgroundImage: 'linear-gradient(rgba(240, 246, 255, 0.85), rgba(224, 236, 255, 0.92)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '3.5rem 3rem 8rem 3rem'
      }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Left Hero Text Column */}
          <div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-1px', marginBottom: '0.3rem', lineHeight: 1.1 }}>
              BhoomiDrishti
            </h1>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1D4ED8', marginBottom: '0.75rem' }}>
              Intelligent Parcel-Centric Land Governance
            </h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#334155', marginBottom: '1rem' }}>
              One Parcel. Connected Data. Intelligent Governance.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#475467', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '540px' }}>
              BhoomiDrishti is an intelligence and verification layer built around the Land Stack concept, connecting parcel-level data through ULPIN, GIS, interoperable APIs and geospatial intelligence for better governance and informed decision making.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                className="btn btn-primary"
                onClick={() => navigate('/roles')}
                style={{ padding: '0.75rem 1.75rem', backgroundColor: '#1D4ED8', fontSize: '1rem', borderRadius: '6px', fontWeight: 700 }}
              >
                Get Started <ArrowRight size={18} />
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => setShowSpecModal(true)}
                style={{ padding: '0.75rem 1.75rem', fontSize: '1rem', borderRadius: '6px', fontWeight: 600, color: '#0F172A', backgroundColor: '#FFFFFF' }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Laptop Frame Showcase */}
          <div style={{ position: 'relative' }}>
            <div 
              onClick={() => handleProtectedAction('/explorer')}
              style={{
                backgroundColor: '#0F172A',
                padding: '14px 14px 22px 14px',
                borderRadius: '16px',
                boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.35)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.01)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', overflow: 'hidden', border: '1px solid #334155', height: '340px', position: 'relative' }}>
                <div style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '0.5rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>BhoomiDrishti</div>
                  <div style={{ fontSize: '0.75rem', backgroundColor: '#EFF6FF', padding: '0.2rem 0.6rem', borderRadius: '4px', color: '#1D4ED8', fontWeight: 600 }}>
                    Search by ULPIN / Survey No. / Owner Name
                  </div>
                </div>

                <div style={{
                  height: 'calc(100% - 35px)',
                  backgroundImage: 'url("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/14/9512/5688")',
                  backgroundSize: 'cover',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '160px',
                    height: '130px',
                    border: '2.5px solid #1D4ED8',
                    backgroundColor: 'rgba(29, 78, 216, 0.35)',
                    borderRadius: '4px',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      right: '-110px',
                      top: '10px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                      borderRadius: '8px',
                      padding: '0.6rem 0.85rem',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.18)',
                      fontSize: '0.72rem',
                      width: '150px'
                    }}>
                      <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#64748B' }}>ULPIN</div>
                      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.3rem' }}>MH-PUN-001245-6789</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.2rem' }}>
                        <div><span style={{ color: '#64748B' }}>Area</span> <br/><strong>2.40 Ha</strong></div>
                        <div><span style={{ color: '#64748B' }}>Land Use</span> <br/><strong>Residential</strong></div>
                        <div><span style={{ color: '#64748B' }}>Village</span> <br/><strong>Moshi</strong></div>
                        <div><span style={{ color: '#64748B' }}>District</span> <br/><strong>Pune</strong></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: '110%', height: '10px', backgroundColor: '#334155', borderRadius: '0 0 10px 10px', margin: '0 auto', marginLeft: '-5%' }}></div>
          </div>
        </div>

        {/* 4 Floating Feature Cards */}
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '92%',
          maxWidth: '1280px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          zIndex: 10
        }}>
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                onClick={() => handleProtectedAction(c.route)}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '1.35rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: '#EFF6FF', color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.2rem' }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.3 }}>
                    {c.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ height: '70px', backgroundColor: '#F8FAFC' }}></div>

      {/* SECTION: DETAILED ABOUT */}
      <section id="about" style={{ backgroundColor: '#FFFFFF', padding: '4.5rem 3rem', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              ABOUT BHOOMIDRISHTI
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
              Solving Land Governance Fragmentation
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
              Existing platforms store land records across isolated departmental silos. BhoomiDrishti introduces an interoperable intelligence and verification layer built around a 14-digit ULPIN parcel identity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1.5rem' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                1. 14-Digit ULPIN Identity
              </div>
              <p style={{ fontSize: '0.88rem', color: '#475467', lineHeight: 1.5 }}>
                Establishes a single, geocoded spatial identity for every parcel across India under DILRMP standards, eliminating duplicate or ghost land records.
              </p>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1.5rem' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                2. 9-Layer Digital Twin
              </div>
              <p style={{ fontSize: '0.88rem', color: '#475467', lineHeight: 1.5 }}>
                Aggregates Cadastral Geometry, 7/12 RoR, Sub-Registrar Conveyance Deeds, Bank Mortgage Charges, Municipal Tax, PMRDA Master Plan Zoning, and Utilities.
              </p>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1.5rem' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                3. Deterministic Verification
              </div>
              <p style={{ fontSize: '0.88rem', color: '#475467', lineHeight: 1.5 }}>
                Executes 10 automated cross-reconciliation rules to instantly catch area discrepancies, un-mutated co-owners, or missing document links.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FEATURES */}
      <section id="features" style={{ backgroundColor: '#F8FAFC', padding: '4.5rem 3rem', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              CORE FEATURES
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
              Comprehensive Platform Capabilities
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B' }}>
              Empowering Revenue Officers, Planning Authorities, Sub-Registrars, and Citizens.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.75rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: '#EFF6FF', color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Layers size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                Parcel Digital Twin Engine
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5 }}>
                Provides 360-degree visibility over all connected records. Inspect 7/12 mutation histories, Sub-Registrar stamp duty payments, and PMRDA zoning rules on a single screen.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.75rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: '#EFF6FF', color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Radio size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                Temporal Geo-AI Satellite Scan
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5 }}>
                Compares high-resolution satellite imagery snapshots over time periods (2023 vs 2026) to detect unpermitted construction, encroached boundaries, and NA land-use violations.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.75rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: '#EFF6FF', color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <FileCheck2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                Event-Driven Officer Tasks
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.5 }}>
                Automates inter-departmental task routing. Sale deed registrations or satellite anomaly alerts automatically dispatch physical survey tasks to responsible Circle Officers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: HOW IT WORKS PIPELINE */}
      <section id="how" style={{ backgroundColor: '#FFFFFF', padding: '4.5rem 3rem', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8', padding: '0.35rem 0.85rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              HOW IT WORKS
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0F172A', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
              Step-by-Step Land Governance Pipeline
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748B', maxWidth: '750px', margin: '0 auto' }}>
              How BhoomiDrishti transforms raw parcel searches into verified, actionable governance workflows.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {howSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.step} style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.5rem', position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#1D4ED8', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <StepIcon size={20} />
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#CBD5E1' }}>
                      {step.step}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.4rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION: USE CASES */}
      <div id="usecases" style={{ backgroundColor: '#F8FAFC', padding: '4.5rem 3rem 6rem 3rem', flex: 1 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '380px 1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Left Text Column */}
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.5px', marginBottom: '0.75rem', lineHeight: 1.2 }}>
              Built for <br/>Smarter Land Governance
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#475467', lineHeight: 1.6, marginBottom: '1rem' }}>
              BhoomiDrishti helps citizens, departments and planning authorities access verified parcel information, detect inconsistencies and monitor changes for transparent governance.
            </p>
            <div style={{ height: '3px', width: '60px', backgroundColor: '#1D4ED8', borderRadius: '2px' }}></div>
          </div>

          {/* Right 3 Persona Cards Column */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            <div 
              onClick={() => handleProtectedAction('/citizen')}
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.5rem', cursor: 'pointer', textAlign: 'center', transition: 'all 0.15s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1D4ED8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#EFF6FF', color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <User size={24} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.4rem' }}>
                For Citizens
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.4 }}>
                View parcel information and track applications
              </p>
            </div>

            <div 
              onClick={() => handleProtectedAction('/verification')}
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.5rem', cursor: 'pointer', textAlign: 'center', transition: 'all 0.15s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1D4ED8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#EFF6FF', color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <Landmark size={24} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.4rem' }}>
                For Departments
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.4 }}>
                Verification, approvals and administration
              </p>
            </div>

            <div 
              onClick={() => handleProtectedAction('/changes')}
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '1.5rem', cursor: 'pointer', textAlign: 'center', transition: 'all 0.15s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1D4ED8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#EFF6FF', color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <MapPin size={24} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.4rem' }}>
                For Planning Authorities
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.4 }}>
                Land use, planning and infrastructure decisions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FULL PLATFORM SPECIFICATION MODAL */}
      {showSpecModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '850px' }}>
            <div className="modal-header">
              <span className="modal-title">BhoomiDrishti Full Platform Specifications</span>
              <button className="modal-close" onClick={() => setShowSpecModal(false)}><X size={20} /></button>
            </div>
            <div className="modal-body" style={{ padding: '2rem', backgroundColor: '#FFFFFF' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>
                Technical & Architectural Overview
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#475467', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                BhoomiDrishti is designed as an interoperable, parcel-centric intelligence and verification platform.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', fontSize: '0.85rem' }}>
                <div style={{ border: '1px solid #E2E8F0', padding: '1rem', borderRadius: '8px', background: '#F8FAFC' }}>
                  <strong style={{ color: '#1D4ED8' }}>1. Common Parcel Identity (ULPIN)</strong>
                  <p style={{ color: '#64748B', marginTop: '0.3rem' }}>
                    Utilizes 14-digit geocoded ULPIN standard to uniquely bind spatial polygon boundaries with 7/12 RoR excerpts and deed conveyance files.
                  </p>
                </div>

                <div style={{ border: '1px solid #E2E8F0', padding: '1rem', borderRadius: '8px', background: '#F8FAFC' }}>
                  <strong style={{ color: '#1D4ED8' }}>2. Data Consistency Engine</strong>
                  <p style={{ color: '#64748B', marginTop: '0.3rem' }}>
                    10 deterministic verification rules compare Cadastral GIS, 7/12 RoR, Sub-Registrar Conveyance Deeds, and Property Tax records.
                  </p>
                </div>

                <div style={{ border: '1px solid #E2E8F0', padding: '1rem', borderRadius: '8px', background: '#F8FAFC' }}>
                  <strong style={{ color: '#1D4ED8' }}>3. Satellite Geo-AI Change Alert</strong>
                  <p style={{ color: '#64748B', marginTop: '0.3rem' }}>
                    Temporal optical satellite scans detect unapproved structural expansions and un-converted agricultural land-use violations.
                  </p>
                </div>

                <div style={{ border: '1px solid #E2E8F0', padding: '1rem', borderRadius: '8px', background: '#F8FAFC' }}>
                  <strong style={{ color: '#1D4ED8' }}>4. State Adapter Architecture</strong>
                  <p style={{ color: '#64748B', marginTop: '0.3rem' }}>
                    Federated schema normalizer supporting Maharashtra Mahabhulekh (7/12 & Ferfar), Tamil Nadu Patta, and Karnataka Bhoomi data formats.
                  </p>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowSpecModal(false)}>Close Specifications</button>
              <button className="btn btn-primary" onClick={() => { setShowSpecModal(false); navigate('/roles'); }}>Get Started Now →</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
