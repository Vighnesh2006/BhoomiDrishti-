import React from 'react';
import { Settings, Server, Database, ShieldCheck, Activity, CheckCircle2, AlertTriangle, RefreshCw } from 'lucide-react';

export default function AdminPage() {
  const dataSources = [
    { name: '7/12 RoR API (Mahabhulekh)', status: 'Connected', type: 'State Production Gateway', latency: '24ms', health: 'HEALTHY' },
    { name: 'Registration & Stamps API (SGR)', status: 'Connected', type: 'Sub-Registrar Integration', latency: '38ms', health: 'HEALTHY' },
    { name: 'PMRDA Planning Zone API', status: 'Connected', type: 'Master Plan Spatial DB', latency: '45ms', health: 'HEALTHY' },
    { name: 'Municipal Property Tax Engine', status: 'Simulated', type: 'Prototype Mock Connector', latency: '12ms', health: 'SIMULATED' },
    { name: 'Sentinel-2 Satellite Dataset', status: 'Demo Dataset', type: 'Optical High-Res Imagery', latency: '110ms', health: 'HEALTHY' }
  ];

  return (
    <div className="content-container">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <Settings size={24} color="#0757A0" /> System Administration & Data Source Management
          </h1>
          <p className="page-subtitle">
            Configure connected state data gateways, API connectors, rules engine, and role permissions.
          </p>
        </div>
      </div>

      {/* DATA SOURCE STATUS BOX */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-header" style={{ backgroundColor: '#063B6D', color: '#FFFFFF' }}>
          <span className="card-title" style={{ color: '#FFFFFF' }}>
            <Server size={18} /> Connected State Data Source Gateways Status
          </span>
          <button className="btn btn-sm btn-secondary" style={{ color: '#063B6D' }}>
            <RefreshCw size={13} /> Refresh Connectivity
          </button>
        </div>

        <div className="card-body" style={{ padding: 0 }}>
          <div className="data-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Data Source Name</th>
                  <th>Integration Status</th>
                  <th>Gateway Type</th>
                  <th>API Latency</th>
                  <th>Health Rating</th>
                </tr>
              </thead>
              <tbody>
                {dataSources.map((ds, idx) => (
                  <tr key={idx}>
                    <td><strong style={{ color: '#063B6D' }}>{ds.name}</strong></td>
                    <td>
                      <span className={`status-pill ${ds.status === 'Connected' ? 'success' : ds.status === 'Simulated' ? 'warning' : 'neutral'}`}>
                        {ds.status}
                      </span>
                    </td>
                    <td style={{ fontSize: '0.8rem', color: '#667085' }}>{ds.type}</td>
                    <td style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem' }}>{ds.latency}</td>
                    <td>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: ds.health === 'HEALTHY' ? '#16803C' : '#D88900' }}>
                        ✓ {ds.health}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ADMIN CONTROLS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        <div className="card">
          <div className="card-header">
            <span className="card-title" style={{ fontSize: '0.9rem' }}>Deterministic Rule Engine</span>
          </div>
          <div className="card-body" style={{ fontSize: '0.82rem' }}>
            <div>Active Consistency Rules: <strong>10 Active Checks</strong></div>
            <div style={{ marginTop: '0.4rem', color: '#667085' }}>Area Tolerance Threshold: <strong>0.02 Ha (2%)</strong></div>
            <button className="btn btn-sm btn-primary" style={{ marginTop: '0.8rem' }}>Configure Rule Parameters</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title" style={{ fontSize: '0.9rem' }}>State Adapter Schema</span>
          </div>
          <div className="card-body" style={{ fontSize: '0.82rem' }}>
            <div>Active State Adapter: <strong>Maharashtra (MH)</strong></div>
            <div style={{ marginTop: '0.4rem', color: '#667085' }}>Target Dataset: <strong>50 Demo Parcels (Mulshi Study Area)</strong></div>
            <button className="btn btn-sm btn-secondary" style={{ marginTop: '0.8rem' }}>Switch State Configuration</button>
          </div>
        </div>
      </div>
    </div>
  );
}
