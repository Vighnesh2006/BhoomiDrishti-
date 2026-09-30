import React from 'react';
import { MOCK_PARCELS, MOCK_WORKFLOWS } from '../data/mockParcels';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  LineChart, 
  Line 
} from 'recharts';
import { 
  LayoutDashboard, 
  CheckCircle2, 
  AlertTriangle, 
  GitPullRequest, 
  Activity, 
  Layers, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export default function OfficerDashboardPage({ navigate }) {
  // Metric counts
  const totalParcels = MOCK_PARCELS.length; // 50
  const verifiedParcels = MOCK_PARCELS.filter(p => p.verificationStatus === 'VERIFIED').length; // 35
  const issueParcels = MOCK_PARCELS.filter(p => p.verificationStatus === 'ISSUES_DETECTED').length; // 8
  const changeParcels = MOCK_PARCELS.filter(p => p.statusSummary.satelliteChange === 'ALERT').length; // 4
  const activeWorkflowsCount = MOCK_WORKFLOWS.length; // 3

  // Data for Chart 1: Consistency Issues by Type
  const issuesByType = [
    { type: 'Area Mismatch', count: 5 },
    { type: 'Owner Name Mismatch', count: 3 },
    { type: 'Unapproved Construction', count: 5 },
    { type: 'Mortgage Warning', count: 4 },
    { type: 'Outstanding Tax', count: 4 }
  ];

  // Data for Chart 2: Spatial Changes by Month
  const spatialChangesByMonth = [
    { month: 'May 26', alerts: 1 },
    { month: 'Jun 26', alerts: 2 },
    { month: 'Jul 26', alerts: 1 },
    { month: 'Aug 26', alerts: 3 },
    { month: 'Sep 26', alerts: 4 }
  ];

  // Data for Chart 3: Workflows by Department
  const workflowsByDept = [
    { department: 'Revenue & Survey', pending: 3 },
    { department: 'Sub-Registrar', pending: 2 },
    { department: 'Planning (PMRDA)', pending: 3 },
    { department: 'Property Tax', pending: 1 }
  ];

  // Data for Chart 4: Verification Status Pie Distribution
  const pieData = [
    { name: 'Verified', value: verifiedParcels, color: '#16803C' },
    { name: 'Data Discrepancy', value: issueParcels, color: '#D88900' },
    { name: 'Spatial Change Alert', value: changeParcels, color: '#C62828' },
    { name: 'Pending Review', value: 3, color: '#0757A0' }
  ];

  const recentAlerts = [
    { id: 1, title: 'Area mismatch detected — ULPIN MH-PUN-001245', type: 'AREA_MISMATCH', severity: 'MEDIUM', date: '30 Sep 2026 10:30 AM', ulpin: 'MH-PUN-001245' },
    { id: 2, title: 'Potential new construction — ULPIN MH-PUN-001245', type: 'SATELLITE_ALERT', severity: 'HIGH', date: '28 Sep 2026 09:15 AM', ulpin: 'MH-PUN-001245' },
    { id: 3, title: 'Missing registration record link — ULPIN MH-PUN-001247', type: 'REG_MISMATCH', severity: 'HIGH', date: '26 Sep 2026 02:40 PM', ulpin: 'MH-PUN-001247' },
    { id: 4, title: 'Land-use mismatch (Agri vs Commercial) — ULPIN MH-PUN-001252', type: 'ZONING_MISMATCH', severity: 'MEDIUM', date: '24 Sep 2026 11:20 AM', ulpin: 'MH-PUN-001252' }
  ];

  return (
    <div className="content-container">
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <LayoutDashboard size={24} color="#0757A0" /> Officer Executive Dashboard
          </h1>
          <p className="page-subtitle">
            Real-time analytics, spatial change monitoring, and departmental workflow metrics.
          </p>
        </div>
      </div>

      {/* METRIC CARDS GRID */}
      <div className="metrics-grid">
        {/* Card 1 */}
        <div className="metric-card">
          <div>
            <div className="metric-value">{totalParcels}</div>
            <div className="metric-label">Total Monitored Parcels</div>
          </div>
          <div className="metric-icon"><Layers size={22} /></div>
        </div>

        {/* Card 2 */}
        <div className="metric-card" style={{ borderLeft: '4px solid #16803C' }}>
          <div>
            <div className="metric-value" style={{ color: '#16803C' }}>{verifiedParcels}</div>
            <div className="metric-label">Fully Verified Parcels</div>
          </div>
          <div className="metric-icon" style={{ background: '#EDF7ED', color: '#16803C' }}><CheckCircle2 size={22} /></div>
        </div>

        {/* Card 3 */}
        <div className="metric-card" style={{ borderLeft: '4px solid #D88900' }}>
          <div>
            <div className="metric-value" style={{ color: '#D88900' }}>{issueParcels}</div>
            <div className="metric-label">Data Inconsistency Issues</div>
          </div>
          <div className="metric-icon" style={{ background: '#FFF8E6', color: '#D88900' }}><AlertTriangle size={22} /></div>
        </div>

        {/* Card 4 */}
        <div className="metric-card" style={{ borderLeft: '4px solid #C62828' }}>
          <div>
            <div className="metric-value" style={{ color: '#C62828' }}>{changeParcels}</div>
            <div className="metric-label">Spatial Satellite Alerts</div>
          </div>
          <div className="metric-icon" style={{ background: '#FDE8E8', color: '#C62828' }}><Activity size={22} /></div>
        </div>

        {/* Card 5 */}
        <div className="metric-card">
          <div>
            <div className="metric-value" style={{ color: '#0757A0' }}>{activeWorkflowsCount}</div>
            <div className="metric-label">Active Workflows</div>
          </div>
          <div className="metric-icon"><GitPullRequest size={22} /></div>
        </div>
      </div>

      {/* CHARTS GRID (4 Recharts Visualizations) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
        {/* Chart 1: Data Consistency Issues by Type */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">1. Data Consistency Issues by Type</span>
          </div>
          <div className="card-body" style={{ height: '240px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={issuesByType} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                <XAxis dataKey="type" tick={{ fontSize: 11 }} interval={0} angle={-15} textAnchor="end" />
                <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="count" fill="#0757A0" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Spatial Changes by Month */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">2. Spatial Satellite Alerts Trend</span>
          </div>
          <div className="card-body" style={{ height: '240px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spatialChangesByMonth} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                <Tooltip />
                <Line type="monotone" dataKey="alerts" stroke="#C62828" strokeWidth={2.5} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Pending Workflows by Department */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">3. Workflows by Department</span>
          </div>
          <div className="card-body" style={{ height: '240px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={workflowsByDept} layout="vertical" margin={{ top: 10, right: 10, left: 30, bottom: 10 }}>
                <XAxis type="number" allowDecimals={false} tick={{ fontSize: 11 }} />
                <YAxis dataKey="department" type="category" tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="pending" fill="#063B6D" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4: Parcel Verification Status Distribution */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">4. Parcel Verification Distribution</span>
          </div>
          <div className="card-body" style={{ height: '240px', display: 'flex', alignItems: 'center' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={75} label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* RECENT ALERTS FEED */}
      <div className="card">
        <div className="card-header" style={{ backgroundColor: '#063B6D', color: '#FFFFFF' }}>
          <span className="card-title" style={{ color: '#FFFFFF' }}>
            <ShieldAlert size={18} /> Recent Automated Governance Alerts Feed
          </span>
          <button className="btn btn-sm btn-secondary" onClick={() => navigate('/verification')}>
            View All Discrepancies →
          </button>
        </div>

        <div className="card-body" style={{ padding: '0.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {recentAlerts.map(alert => (
              <div key={alert.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: '#FFFFFF', border: '1px solid #EAECF0', borderRadius: '4px' }}>
                <div>
                  <strong style={{ fontSize: '0.88rem', color: '#063B6D' }}>{alert.title}</strong>
                  <div style={{ fontSize: '0.75rem', color: '#667085', marginTop: '0.1rem' }}>
                    Timestamp: {alert.date}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span className={`status-pill ${alert.severity === 'HIGH' ? 'danger' : 'warning'}`}>
                    {alert.severity}
                  </span>
                  <button className="btn btn-sm btn-primary" onClick={() => navigate(`/parcel/${alert.ulpin}`)}>
                    Inspect Parcel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
