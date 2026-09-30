import React from 'react';
import { 
  Layers, 
  FileCheck2, 
  Radio, 
  TrendingUp, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  GitPullRequest
} from 'lucide-react';

export default function LandingPage({ navigate }) {
  const cards = [
    {
      title: 'Unified Parcel View',
      desc: 'Connects data across departments',
      icon: Layers,
      route: '/explorer'
    },
    {
      title: 'Data Verification',
      desc: 'Detects inconsistencies',
      icon: FileCheck2,
      route: '/verification'
    },
    {
      title: 'Geospatial Intelligence',
      desc: 'Monitors changes using satellite data',
      icon: Radio,
      route: '/changes'
    },
    {
      title: 'Faster Governance',
      desc: 'Enables informed decisions',
      icon: TrendingUp,
      route: '/officer'
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Landing Page Top Navigation Bar */}
      <header style={{
        height: '70px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 3rem'
      }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', cursor: 'pointer' }} onClick={() => navigate('/')}>
          BhoomiDrishti
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('/'); }} style={{ color: '#0F172A', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); navigate('/explorer'); }} style={{ color: '#64748B', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>About</a>
          <a href="#features" onClick={(e) => { e.preventDefault(); navigate('/verification'); }} style={{ color: '#64748B', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>Features</a>
          <a href="#how" onClick={(e) => { e.preventDefault(); navigate('/changes'); }} style={{ color: '#64748B', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>How it Works</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); navigate('/citizen'); }} style={{ color: '#64748B', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>Contact</a>

          <button 
            className="btn btn-primary"
            onClick={() => navigate('/login')}
            style={{ padding: '0.5rem 1.4rem', backgroundColor: '#1D4ED8', fontSize: '0.9rem', borderRadius: '6px' }}
          >
            Login
          </button>
        </nav>
      </header>

      {/* Hero Section with Landscape Background Image */}
      <div style={{
        position: 'relative',
        minHeight: '480px',
        backgroundImage: 'linear-gradient(rgba(240, 246, 255, 0.82), rgba(224, 236, 255, 0.88)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1.5rem 6rem 1.5rem'
      }}>
        <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.5px', marginBottom: '0.5rem' }}>
          BhoomiDrishti
        </h1>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.5rem' }}>
          Intelligent Parcel-Centric Land Governance
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#475467', fontWeight: 500 }}>
          One Parcel. Connected Data. Intelligent Governance.
        </p>

        {/* 4 Floating Feature Cards at the bottom of hero */}
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '1100px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
          zIndex: 10
        }}>
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                onClick={() => navigate(c.route)}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#EFF6FF', color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem auto' }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.3rem' }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.3 }}>
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Spacer for floating cards */}
      <div style={{ height: '80px', backgroundColor: '#F8FAFC' }}></div>

      {/* Main Content Info */}
      <div style={{ backgroundColor: '#F8FAFC', padding: '3rem 2rem 5rem 2rem', flex: 1 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
            Transforming State Land Governance Around ULPIN Identity
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#64748B', marginBottom: '2rem' }}>
            BhoomiDrishti connects Mahabhulekh (7/12 RoR), Sub-Registrar deed conveyance, PMRDA planning zoning, and satellite spatial imagery into a unified intelligent verification platform.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => navigate('/login')} style={{ backgroundColor: '#1D4ED8', padding: '0.7rem 1.5rem' }}>
              Launch Prototype Portal <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/explorer')} style={{ padding: '0.7rem 1.5rem' }}>
              Explore GIS Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
