import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RoleSelectionPage from './pages/RoleSelectionPage';
import GisExplorerPage from './pages/GisExplorerPage';
import ParcelDigitalTwinPage from './pages/ParcelDigitalTwinPage';
import VerificationPage from './pages/VerificationPage';
import SpatialChangePage from './pages/SpatialChangePage';
import WorkflowPage from './pages/WorkflowPage';
import CitizenPortalPage from './pages/CitizenPortalPage';
import OfficerDashboardPage from './pages/OfficerDashboardPage';
import InteroperabilityPage from './pages/InteroperabilityPage';
import AuditPage from './pages/AuditPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [selectedState, setSelectedState] = useState('MH');
  const [userRole, setUserRole] = useState('Department Officer');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    // Authentication Access Guard Enforcement
    const publicPaths = ['/', '', '/login', '/roles'];
    if (!isAuthenticated && !publicPaths.includes(path)) {
      window.history.pushState({}, '', '/login');
      setCurrentPath('/login');
      window.scrollTo(0, 0);
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const handleLoginSuccess = (roleName) => {
    setIsAuthenticated(true);
    if (roleName) setUserRole(roleName);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  // Route renderer logic
  const renderRoute = () => {
    if (currentPath === '/' || currentPath === '') {
      return <LandingPage navigate={navigate} isAuthenticated={isAuthenticated} />;
    }
    if (currentPath === '/login') {
      return <LoginPage setUserRole={setUserRole} navigate={navigate} onLoginSuccess={handleLoginSuccess} />;
    }
    if (currentPath === '/roles') {
      return <RoleSelectionPage setUserRole={setUserRole} navigate={navigate} onLoginSuccess={handleLoginSuccess} />;
    }

    // Protected Routes (Requires Login)
    if (!isAuthenticated) {
      return <LoginPage setUserRole={setUserRole} navigate={navigate} onLoginSuccess={handleLoginSuccess} authRequiredMessage="Please sign in to access BhoomiDrishti governance modules." />;
    }

    if (currentPath === '/explorer' || currentPath.startsWith('/explorer')) {
      const urlParams = new URLSearchParams(window.location.search);
      const ulpin = urlParams.get('ulpin');
      return <GisExplorerPage navigate={navigate} initialUlpin={ulpin} />;
    }
    if (currentPath.startsWith('/parcel/')) {
      const ulpinId = currentPath.replace('/parcel/', '');
      return <ParcelDigitalTwinPage ulpinId={ulpinId} navigate={navigate} />;
    }
    if (currentPath === '/verification') {
      return <VerificationPage navigate={navigate} />;
    }
    if (currentPath === '/changes') {
      return <SpatialChangePage navigate={navigate} />;
    }
    if (currentPath === '/workflows') {
      return <WorkflowPage navigate={navigate} />;
    }
    if (currentPath === '/citizen') {
      return <CitizenPortalPage navigate={navigate} />;
    }
    if (currentPath === '/officer') {
      return <OfficerDashboardPage navigate={navigate} />;
    }
    if (currentPath === '/interoperability') {
      return <InteroperabilityPage navigate={navigate} />;
    }
    if (currentPath === '/audit') {
      return <AuditPage navigate={navigate} />;
    }
    if (currentPath === '/admin') {
      return <AdminPage navigate={navigate} />;
    }

    // Fallback
    return <LandingPage navigate={navigate} isAuthenticated={isAuthenticated} />;
  };

  return (
    <Layout
      activeRoute={currentPath}
      navigate={navigate}
      selectedState={selectedState}
      setSelectedState={setSelectedState}
      userRole={userRole}
      setUserRole={setUserRole}
      isAuthenticated={isAuthenticated}
      onLogout={handleLogout}
    >
      {renderRoute()}
    </Layout>
  );
}
