import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  FolderKanban, 
  ChevronDown,
  User,
  LogOut,
  Layers,
  Settings
} from 'lucide-react';

export default function Layout({ 
  children, 
  activeRoute, 
  navigate, 
  userRole, 
  setUserRole 
}) {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // If on landing, login, or role selection page, render without dashboard wrapper
  if (activeRoute === '/' || activeRoute === '/login' || activeRoute === '/roles') {
    return <>{children}</>;
  }

  const isCitizen = userRole === 'Citizen';
  const isOfficer = userRole === 'Department Officer' || userRole === 'Revenue Officer';
  const isPlanner = userRole === 'Planning Authority' || userRole === 'Planning Officer';

  const userName = isCitizen ? 'Rohan Patil' : isPlanner ? 'Prakash Joshi' : 'Anil Sharma';
  const roleDisplay = isCitizen ? 'Citizen' : isPlanner ? 'Planning Authority' : 'Department Officer';

  // Navigation Items matching Mockup Panels
  const navItems = isCitizen ? [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, route: '/officer' },
    { id: 'search', label: 'Parcel Search', icon: Search, route: '/explorer' },
    { id: 'applications', label: 'My Applications', icon: FolderKanban, route: '/citizen' },
    { id: 'reports', label: 'Reports', icon: FileText, route: '/parcel/MH-PUN-001245-6789' }
  ] : [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, route: '/officer' },
    { id: 'search', label: 'Parcel Search', icon: Search, route: '/explorer' },
    { id: 'consistency', label: 'Consistency Check', icon: CheckCircle2, route: '/verification' },
    { id: 'change', label: 'Change Detection', icon: AlertTriangle, route: '/changes' },
    { id: 'applications', label: 'Applications', icon: FolderKanban, route: '/workflows' },
    { id: 'reports', label: 'Reports', icon: FileText, route: '/audit' }
  ];

  return (
    <div className="app-container">
      {/* Top Header matching Mockup */}
      <header className="topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="topbar-brand" onClick={() => navigate('/')}>
            BhoomiDrishti
          </div>
          <span style={{ color: '#94A3B8', fontSize: '0.9rem' }}>|</span>
          <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#64748B' }}>
            {roleDisplay}
          </span>
        </div>

        {/* User Profile Dropdown */}
        <div style={{ position: 'relative' }}>
          <div 
            className="user-profile-badge" 
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
          >
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#EFF6FF', color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={16} />
            </div>
            <span>{userName}</span>
            <ChevronDown size={14} color="#64748B" />
          </div>

          {profileDropdownOpen && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: '42px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              padding: '0.5rem 0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              zIndex: 1000,
              minWidth: '180px'
            }}>
              <div style={{ padding: '0.4rem 1rem', fontSize: '0.75rem', fontWeight: 700, color: '#64748B', borderBottom: '1px solid #F1F5F9' }}>
                SWITCH ROLE DEMO
              </div>
              <a 
                href="#citizen" 
                onClick={(e) => { e.preventDefault(); setUserRole('Citizen'); setProfileDropdownOpen(false); navigate('/explorer'); }}
                style={{ display: 'block', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#0F172A', textDecoration: 'none' }}
              >
                Citizen Role
              </a>
              <a 
                href="#officer" 
                onClick={(e) => { e.preventDefault(); setUserRole('Department Officer'); setProfileDropdownOpen(false); navigate('/verification'); }}
                style={{ display: 'block', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#0F172A', textDecoration: 'none' }}
              >
                Department Officer Role
              </a>
              <div style={{ borderTop: '1px solid #F1F5F9', marginTop: '0.4rem', paddingTop: '0.4rem' }}>
                <a 
                  href="#logout" 
                  onClick={(e) => { e.preventDefault(); setProfileDropdownOpen(false); navigate('/login'); }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', fontSize: '0.85rem', color: '#DC2626', textDecoration: 'none' }}
                >
                  <LogOut size={14} /> Switch Persona
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="app-body">
        {/* Navigation Sidebar matching Mockup */}
        <aside className="sidebar">
          <nav className="sidebar-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeRoute === item.route || 
                (item.id === 'search' && activeRoute === '/explorer') ||
                (item.id === 'consistency' && activeRoute === '/verification');

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
                  <Icon size={18} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </aside>

        {/* Main Content Workspace */}
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}
