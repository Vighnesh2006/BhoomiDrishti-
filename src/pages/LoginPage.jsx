import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function LoginPage({ navigate, setUserRole }) {
  const [activeTab, setActiveTab] = useState('email');
  const [email, setEmail] = useState('demo.officer@bhoomidrishti.gov.in');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/roles');
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

      {/* Main Centered Sign In Card */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '2.5rem', width: '100%', maxWidth: '440px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.3rem' }}>
              Welcome Back
            </h1>
            <p style={{ fontSize: '0.88rem', color: '#64748B' }}>
              Sign in to continue to BhoomiDrishti
            </p>
          </div>

          {/* Email / Google Tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #E2E8F0', marginBottom: '1.5rem' }}>
            <button
              onClick={() => setActiveTab('email')}
              style={{
                padding: '0.65rem',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'email' ? '2.5px solid #1D4ED8' : 'none',
                color: activeTab === 'email' ? '#1D4ED8' : '#64748B',
                fontWeight: activeTab === 'email' ? 700 : 500,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              Email
            </button>
            <button
              onClick={() => setActiveTab('google')}
              style={{
                padding: '0.65rem',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === 'google' ? '2.5px solid #1D4ED8' : 'none',
                color: activeTab === 'google' ? '#1D4ED8' : '#64748B',
                fontWeight: activeTab === 'google' ? 700 : 500,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              Google
            </button>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSignIn}>
            {/* Email Field */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ position: 'relative' }}>
                <Mail size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                <input
                  type="email"
                  className="input-field"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ paddingLeft: '38px', height: '42px' }}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div style={{ marginBottom: '0.75rem' }}>
              <div style={{ position: 'relative' }}>
                <Lock size={18} color="#94A3B8" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input-field"
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{ paddingLeft: '38px', paddingRight: '38px', height: '42px' }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', top: '12px', background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Forgot password */}
            <div style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); navigate('/roles'); }} style={{ fontSize: '0.82rem', color: '#1D4ED8', fontWeight: 600, textDecoration: 'none' }}>
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', height: '44px', backgroundColor: '#1D4ED8', fontSize: '0.95rem', borderRadius: '6px' }}
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Footer */}
          <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: '#64748B' }}>
            Don't have an account?{' '}
            <a href="#signup" onClick={(e) => { e.preventDefault(); navigate('/roles'); }} style={{ color: '#1D4ED8', fontWeight: 700, textDecoration: 'none' }}>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
