import React, { useState } from 'react';
import { MOCK_AUDIT_LOGS } from '../data/mockParcels';
import { ShieldCheck, Lock, Search, Filter, Database, CheckCircle2, UserCheck } from 'lucide-react';

export default function AuditPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLogs = MOCK_AUDIT_LOGS.filter(log => 
    log.ulpin.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.officerId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.action.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="content-container">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <ShieldCheck size={24} color="#0757A0" /> Security Architecture & System Audit Trail
          </h1>
          <p className="page-subtitle">
            Role-based attribute access control, data classification matrix, and immutable audit logs.
          </p>
        </div>
      </div>

      {/* DATA CLASSIFICATION MATRIX */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-header" style={{ backgroundColor: '#063B6D', color: '#FFFFFF' }}>
          <span className="card-title" style={{ color: '#FFFFFF' }}>
            <Lock size={18} /> Attribute-Level Access Data Classification Policy
          </span>
        </div>

        <div className="card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {/* PUBLIC */}
            <div style={{ border: '1px solid #16803C', borderRadius: '6px', padding: '1rem', background: '#EDF7ED' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#16803C', marginBottom: '0.3rem' }}>
                PUBLIC ACCESS TIER
              </div>
              <p style={{ fontSize: '0.78rem', color: '#16803C', lineHeight: 1.4 }}>
                Cadastral parcel polygon boundary, 14-digit ULPIN, General master plan zoning, Public encumbrance indicators.
              </p>
            </div>

            {/* CONTROLLED */}
            <div style={{ border: '1px solid #D88900', borderRadius: '6px', padding: '1rem', background: '#FFF8E6' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#D88900', marginBottom: '0.3rem' }}>
                CONTROLLED ACCESS TIER
              </div>
              <p style={{ fontSize: '0.78rem', color: '#794D00', lineHeight: 1.4 }}>
                Registered owner full names, Khata mutation history, Sub-Registrar deed references, Municipal property tax balance.
              </p>
            </div>

            {/* RESTRICTED */}
            <div style={{ border: '1px solid #C62828', borderRadius: '6px', padding: '1rem', background: '#FDE8E8' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#C62828', marginBottom: '0.3rem' }}>
                RESTRICTED OFFICER TIER
              </div>
              <p style={{ fontSize: '0.78rem', color: '#8C1D1D', lineHeight: 1.4 }}>
                Internal revenue inspector site notes, Unverified enforcement notices, Confidential dispute files, System security logs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SYSTEM AUDIT TRAIL TABLE */}
      <div className="card">
        <div className="card-header">
          <span className="card-title">Immutable Audit Trail Log ({filteredLogs.length} Events)</span>
          <div style={{ position: 'relative', width: '250px' }}>
            <Search size={14} color="#667085" style={{ position: 'absolute', left: '10px', top: '8px' }} />
            <input 
              type="text" 
              placeholder="Search audit events..." 
              className="input-field" 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ paddingLeft: '30px', fontSize: '0.78rem' }}
            />
          </div>
        </div>

        <div className="card-body" style={{ padding: 0 }}>
          <div className="data-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Audit ID & Time</th>
                  <th>Officer Identity</th>
                  <th>Target ULPIN</th>
                  <th>Action Performed</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map(log => (
                  <tr key={log.id}>
                    <td>
                      <strong style={{ color: '#063B6D' }}>{log.id}</strong>
                      <div style={{ fontSize: '0.72rem', color: '#667085' }}>{log.timestamp}</div>
                    </td>
                    <td style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                      {log.officerId}
                    </td>
                    <td>
                      <strong style={{ color: '#0757A0' }}>{log.ulpin}</strong>
                    </td>
                    <td style={{ fontSize: '0.8rem' }}>
                      {log.action}
                    </td>
                    <td style={{ fontSize: '0.75rem', color: '#667085' }}>
                      {log.department}
                    </td>
                    <td>
                      <span className="status-pill success" style={{ fontSize: '0.68rem' }}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
