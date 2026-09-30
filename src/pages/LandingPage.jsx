import React from 'react';
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
  Sparkles
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
      desc: 'Detects inconsistencies across records',
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
      desc: 'Enables informed and transparent decisions',
      icon: TrendingUp,
      route: '/officer'
    }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
      {/* Top Header Bar matching attached image */}
      <header style={{
        height: '75px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 3rem',
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

        {/* Header Nav Links matching image */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#home" onClick={(e) => { e.preventDefault(); navigate('/'); }} style={{ color: '#1D4ED8', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid #1D4ED8', paddingBottom: '0.2rem' }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); navigate('/explorer'); }} style={{ color: '#475467', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>About</a>
          <a href="#features" onClick={(e) => { e.preventDefault(); navigate('/verification'); }} style={{ color: '#475467', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>Features</a>
          <a href="#how" onClick={(e) => { e.preventDefault(); navigate('/changes'); }} style={{ color: '#475467', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>How it Works</a>
          <a href="#usecases" onClick={(e) => { e.preventDefault(); navigate('/workflows'); }} style={{ color: '#475467', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>Use Cases</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); navigate('/citizen'); }} style={{ color: '#475467', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>Contact</a>
        </nav>

        {/* Buttons & SIH Badge matching image */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/login')}
            style={{ padding: '0.5rem 1.2rem', borderColor: '#1D4ED8', color: '#1D4ED8', fontWeight: 600, fontSize: '0.9rem', borderRadius: '6px' }}
          >
            Login
          </button>

          <button 
            className="btn btn-primary"
            onClick={() => navigate('/roles')}
            style={{ padding: '0.5rem 1.4rem', backgroundColor: '#1D4ED8', fontSize: '0.9rem', borderRadius: '6px', fontWeight: 600 }}
          >
            Get Started
          </button>

          {/* Smart India Hackathon Badge matching top right of image */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderLeft: '1px solid #E2E8F0', paddingLeft: '1rem', marginLeft: '0.5rem' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF9933 50%, #138808 50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '0.75rem'
            }}>
              SIH
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0F172A', letterSpacing: '0.3px', lineHeight: 1.1 }}>
                SMART INDIA
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#1D4ED8', lineHeight: 1.1 }}>
                HACKATHON 2024
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Hero Section with Landscape Background and Laptop Mockup */}
      <div style={{
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
                onClick={() => navigate('/explorer')}
                style={{ padding: '0.75rem 1.75rem', fontSize: '1rem', borderRadius: '6px', fontWeight: 600, color: '#0F172A', backgroundColor: '#FFFFFF' }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Laptop Frame Mockup Showcase matching image */}
          <div style={{ position: 'relative' }}>
            <div 
              onClick={() => navigate('/explorer')}
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
              {/* Laptop Screen Viewport */}
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', overflow: 'hidden', border: '1px solid #334155', height: '340px', position: 'relative' }}>
                {/* Simulated Header inside Laptop Screen */}
                <div style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '0.5rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>BhoomiDrishti</div>
                  <div style={{ fontSize: '0.75rem', backgroundColor: '#EFF6FF', padding: '0.2rem 0.6rem', borderRadius: '4px', color: '#1D4ED8', fontWeight: 600 }}>
                    Search by ULPIN / Survey No. / Owner Name
                  </div>
                </div>

                {/* Simulated GIS Map Inside Laptop Screen */}
                <div style={{
                  height: 'calc(100% - 35px)',
                  backgroundImage: 'url("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/14/9512/5688")',
                  backgroundSize: 'cover',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Highlighted Blue Parcel Polygon */}
                  <div style={{
                    width: '160px',
                    height: '130px',
                    border: '2.5px solid #1D4ED8',
                    backgroundColor: 'rgba(29, 78, 216, 0.35)',
                    borderRadius: '4px',
                    position: 'relative'
                  }}>
                    {/* Floating Info Card Overlay matching mockup image */}
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
            {/* Laptop Base Stand */}
            <div style={{ width: '110%', height: '10px', backgroundColor: '#334155', borderRadius: '0 0 10px 10px', margin: '0 auto', marginLeft: '-5%' }}></div>
          </div>
        </div>

        {/* 4 Floating Feature Cards at the bottom of hero matching image */}
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
                onClick={() => navigate(c.route)}
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

      {/* Spacer for floating cards */}
      <div style={{ height: '70px', backgroundColor: '#F8FAFC' }}></div>

      {/* "Built for Smarter Land Governance" Section matching bottom of image */}
      <div style={{ backgroundColor: '#F8FAFC', padding: '4rem 3rem 6rem 3rem', borderTop: '1px solid #E2E8F0', flex: 1 }}>
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

          {/* Right 3 Persona Cards Column matching image */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {/* Card 1: For Citizens */}
            <div 
              onClick={() => navigate('/citizen')}
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

            {/* Card 2: For Departments */}
            <div 
              onClick={() => navigate('/verification')}
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

            {/* Card 3: For Planning Authorities */}
            <div 
              onClick={() => navigate('/changes')}
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
    </div>
  );
}
