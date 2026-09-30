import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
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
  const [userRole, setUserRole] = useState('Revenue Officer');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  // Route renderer logic
  const renderRoute = () => {
    if (currentPath === '/' || currentPath === '') {
      return <LandingPage navigate={navigate} />;
    }
    if (currentPath === '/login') {
      return <LoginPage setUserRole={setUserRole} navigate={navigate} />;
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

    // Default fallback
    return <LandingPage navigate={navigate} />;
  };

  return (
    <Layout
      activeRoute={currentPath}
      navigate={navigate}
      selectedState={selectedState}
      setSelectedState={setSelectedState}
      userRole={userRole}
      setUserRole={setUserRole}
    >
      {renderRoute()}
    </Layout>
  );
}
