import React from 'react';
import { User, Landmark, Users, Settings, ArrowRight, ArrowLeft } from 'lucide-react';

export default function RoleSelectionPage({ navigate, setUserRole }) {
  const roles = [
    {
      title: 'Citizen',
      desc: 'View parcel information, check status and track applications',
      icon: User,
      role: 'Citizen',
      route: '/citizen'
    },
    {
      title: 'Department Officer',
      desc: 'Verification, approvals and administration',
      icon: Landmark,
      role: 'Department Officer',
      route: '/verification'
    },
    {
      title: 'Planning Authority',
      desc: 'Land use, planning and infrastructure decisions',
      icon: Users,
      role: 'Planning Authority',
      route: '/changes'
    },
    {
      title: 'Administrator',
      desc: 'System management and configuration',
      icon: Settings,
      role: 'Administrator',
      route: '/admin'
    }
  ];

  const handleSelect = (item) => {
    setUserRole(item.role);
    navigate(item.route);
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header */}
      <div style={{ padding: '1.25rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', cursor: 'pointer' }} onClick={() => navigate('/')}>
          BhoomiDrishti
        </div>
        <button 
          onClick={() => navigate('/')} 
          style={{ background: 'none', border: 'none', color: '#64748B', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>

      {/* Main Container */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2.5rem 1rem' }}>
        <div style={{ width: '100%', maxWidth: '780px' }}>
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.4rem' }}>
              Select Your Role
            </h1>
            <p style={{ fontSize: '0.95rem', color: '#64748B' }}>
              Choose the role that best describes you
            </p>
          </div>

          {/* 2x2 Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem' }}>
            {roles.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  onClick={() => handleSelect(item)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '160px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#1D4ED8';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(29,78,216,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)';
                  }}
                >
                  <div>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#EFF6FF', color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={22} />
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.35rem' }}>
                      {item.title}
                    </h3>

                    <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.4 }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                    <ArrowRight size={18} color="#1D4ED8" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
