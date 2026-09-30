import React, { useState } from 'react';
import { UserCheck, ShieldCheck, Lock, ArrowRight, Building2, User, KeyRound } from 'lucide-react';

export default function LoginPage({ setUserRole, navigate }) {
  const [selectedRole, setSelectedRole] = useState('Revenue Officer');

  const demoRoles = [
    {
      role: 'Revenue Officer',
      dept: 'Department of Land Revenue & Survey',
      desc: 'Access mutation audits, 7/12 consistency checks, and field verification workflows.',
      redirect: '/officer',
      color: '#0757A0'
    },
    {
      role: 'Registration Officer',
      dept: 'Department of Stamps & Registration',
      desc: 'Verify title conveyance deeds, deed history, and encumbrance certificates.',
      redirect: '/verification',
      color: '#063B6D'
    },
    {
      role: 'Planning Officer',
      dept: 'Urban & Metropolitan Planning Authority (PMRDA)',
      desc: 'Inspect master plan compliance, zoning restrictions, and satellite change alerts.',
      redirect: '/changes',
      color: '#D88900'
    },
    {
      role: 'Citizen',
      dept: 'Public Self-Service Due-Diligence Portal',
      desc: 'Access verified land reports, service requests, and public parcel information.',
      redirect: '/citizen',
      color: '#16803C'
    },
    {
      role: 'Administrator',
      dept: 'State Land Governance Technology Portal',
      desc: 'Configure state adapters, API integrations, data sources, and audit permissions.',
      redirect: '/admin',
      color: '#475467'
    }
  ];

  const handleLogin = (roleObj) => {
    setUserRole(roleObj.role);
    navigate(roleObj.redirect);
  };

  return (
    <div className="content-container" style={{ maxWidth: '900px', margin: '2rem auto' }}>
      <div className="card">
        <div className="card-header" style={{ backgroundColor: '#063B6D', color: '#FFFFFF', padding: '1.25rem 1.5rem' }}>
          <div>
            <h2 className="card-title" style={{ color: '#FFFFFF', fontSize: '1.3rem' }}>
              <Lock size={20} /> LAND STACK — Institutional Portal Login
            </h2>
            <div style={{ fontSize: '0.82rem', color: '#93C5FD', marginTop: '0.2rem' }}>
              State Governance & Verification Platform Prototype Login
            </div>
          </div>
          <span className="status-pill success" style={{ background: 'rgba(255,255,255,0.15)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.3)' }}>
            Prototype Sandbox
          </span>
        </div>

        <div className="card-body" style={{ padding: '1.75rem' }}>
          <div className="alert alert-info" style={{ marginBottom: '1.5rem' }}>
            <KeyRound size={18} />
            <div>
              <strong>Prototype Demonstration Mode:</strong> Select any government role below to log in instantly without entering credentials.
            </div>
          </div>

          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#063B6D', marginBottom: '1rem' }}>
            Select Demo Role Persona:
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {demoRoles.map((item) => (
              <div
                key={item.role}
                style={{
                  border: `2px solid ${selectedRole === item.role ? item.color : '#D0D5DD'}`,
                  backgroundColor: selectedRole === item.role ? '#EAF4FC' : '#FFFFFF',
                  borderRadius: '6px',
                  padding: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onClick={() => setSelectedRole(item.role)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: item.color }}>
                    {item.role}
                  </span>
                  {selectedRole === item.role && <UserCheck size={18} color={item.color} />}
                </div>

                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#667085', marginBottom: '0.5rem' }}>
                  {item.dept}
                </div>

                <p style={{ fontSize: '0.8rem', color: '#475467', lineHeight: 1.4, marginBottom: '0.8rem' }}>
                  {item.desc}
                </p>

                <button
                  className="btn btn-sm btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLogin(item);
                  }}
                  style={{ width: '100%', backgroundColor: item.color }}
                >
                  Log In as {item.role} <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
