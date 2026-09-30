import React, { useState } from 'react';
import { 
  Map, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  GitPullRequest, 
  UserCheck, 
  LayoutDashboard, 
  Share2, 
  FileText, 
  Settings, 
  LogOut, 
  ShieldCheck, 
  Search, 
  ChevronRight,
  Sparkles,
  Building2,
  Home
} from 'lucide-react';

export default function Layout({ 
  children, 
  activeRoute, 
  navigate, 
  selectedState, 
  setSelectedState, 
  userRole, 
  setUserRole, 
  onRunDemoStory 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'landing', label: 'Landing Page', icon: Home, route: '/' },
    { id: 'explorer', label: 'GIS Parcel Explorer', icon: Map, route: '/explorer' },
    { id: 'digital-twin', label: 'Parcel Digital Twin', icon: Layers, route: '/parcel/MH-PUN-001245' },
    { id: 'verification', label: 'Verification Center', icon: CheckCircle2, route: '/verification', badge: '5 Issues' },
    { id: 'changes', label: 'Spatial Change Detection', icon: AlertTriangle, route: '/changes', badge: '3 Alerts' },
    { id: 'workflows', label: 'Department Workflow', icon: GitPullRequest, route: '/workflows', badge: '3 Active' },
    { id: 'citizen', label: 'Citizen Portal', icon: UserCheck, route: '/citizen' },
    { id: 'officer', label: 'Officer Dashboard', icon: LayoutDashboard, route: '/officer' },
    { id: 'interoperability', label: 'API & Interoperability', icon: Share2, route: '/interoperability' },
    { id: 'audit', label: 'Audit Trail & Security', icon: ShieldCheck, route: '/audit' },
    { id: 'admin', label: 'Administration', icon: Settings, route: '/admin' }
  ];

  return (
    <div className="app-container">
      {/* Top Header */}
      <header className="topbar">
        <div className="topbar-brand" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <div className="topbar-logo-icon">LS</div>
          <div>
            <div className="topbar-title">LAND STACK</div>
            <div style={{ fontSize: '0.68rem', color: '#93C5FD', fontWeight: 600, letterSpacing: '0.4px' }}>
              INTELLIGENT PARCEL GOVERNANCE
            </div>
          </div>
          <span className="topbar-tagline">
            "One Parcel. One Identity. Connected Data. Intelligent Governance."
          </span>
        </div>

        <div className="topbar-actions">
          {/* State Configuration Dropdown */}
          <div className="state-badge">
            <Building2 size={14} color="#93C5FD" />
            <select 
              value={selectedState} 
              onChange={(e) => setSelectedState(e.target.value)}
              style={{ background: 'transparent', color: '#FFFFFF', border: 'none', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}
            >
              <option value="MH" style={{ color: '#172B4D' }}>State: Maharashtra (Pune Demo)</option>
              <option value="TN" style={{ color: '#172B4D' }}>State: Tamil Nadu (Chennai Demo)</option>
              <option value="KA" style={{ color: '#172B4D' }}>State: Karnataka (Bengaluru Demo)</option>
            </select>
          </div>

          {/* Role Switcher */}
          <select 
            className="role-selector"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option value="Revenue Officer">Role: Revenue Officer</option>
            <option value="Registration Officer">Role: Registration Officer</option>
            <option value="Planning Officer">Role: Planning Officer</option>
            <option value="Citizen">Role: Citizen</option>
            <option value="Administrator">Role: System Admin</option>
          </select>

          <button 
            className="btn btn-sm btn-secondary" 
            onClick={() => navigate('/login')}
            style={{ fontSize: '0.75rem' }}
          >
            <LogOut size={13} /> Switch Login
          </button>
        </div>
      </header>

      {/* SIH Presentation Demo Story Bar */}
      <div className="demo-story-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Sparkles size={16} color="#0757A0" />
          <strong style={{ color: '#063B6D' }}>SIH End-to-End Judge Walkthrough Flow:</strong>
        </div>
        
        <div className="demo-story-steps">
          <button className="demo-step-btn" onClick={() => navigate('/explorer?ulpin=MH-PUN-001245')}>
            1. GIS Search ULPIN
          </button>
          <ChevronRight size={14} color="#667085" />
          <button className="demo-step-btn" onClick={() => navigate('/parcel/MH-PUN-001245')}>
            2. Parcel Digital Twin
          </button>
          <ChevronRight size={14} color="#667085" />
          <button className="demo-step-btn" onClick={() => navigate('/verification')}>
            3. Consistency Engine
          </button>
          <ChevronRight size={14} color="#667085" />
          <button className="demo-step-btn" onClick={() => navigate('/changes')}>
            4. Geo-AI Satellite Alert
          </button>
          <ChevronRight size={14} color="#667085" />
          <button className="demo-step-btn" onClick={() => navigate('/workflows')}>
            5. Officer Workflow Task
          </button>
        </div>
      </div>

      <div className="app-body">
        {/* Navigation Sidebar */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            <div className="nav-section-title">Core Platform</div>
            
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeRoute === item.route || (item.id === 'digital-twin' && activeRoute.startsWith('/parcel/'));
              
              return (
                <a
                  key={item.id}
                  className={`nav-item ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(item.route);
                  }}
                  href={item.route}
                >
                  <Icon size={17} />
                  <span>{item.label}</span>
                  {item.badge && <span className="nav-badge">{item.badge}</span>}
                </a>
              );
            })}
          </nav>

          <div style={{ padding: '1rem', borderTop: '1px solid #EAECF0', fontSize: '0.72rem', color: '#667085', backgroundColor: '#F8FAFC' }}>
            <div style={{ fontWeight: 700, color: '#063B6D', marginBottom: '0.2rem' }}>LAND STACK v2.4</div>
            <div>Interoperable Governance Layer</div>
            <div style={{ marginTop: '0.4rem', color: '#16803C', fontWeight: 600 }}>✓ Prototype Engine Online</div>
          </div>
        </aside>

        {/* Main Content Workspace */}
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}
