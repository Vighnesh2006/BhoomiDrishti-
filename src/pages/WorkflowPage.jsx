import React, { useState } from 'react';
import { MOCK_WORKFLOWS } from '../data/mockParcels';
import { 
  GitPullRequest, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  UserCheck, 
  ArrowRight, 
  FileCheck, 
  ChevronRight,
  ShieldCheck,
  Building
} from 'lucide-react';

export default function WorkflowPage({ navigate }) {
  const [workflows, setWorkflows] = useState(MOCK_WORKFLOWS);
  const [selectedWf, setSelectedWf] = useState(MOCK_WORKFLOWS[0]);
  const [activeWorkflowTab, setActiveWorkflowTab] = useState('EVENT_FLOW');

  const handleAction = (statusUpdate) => {
    const updated = workflows.map(w => {
      if (w.id === selectedWf.id) {
        return { ...w, status: statusUpdate };
      }
      return w;
    });
    setWorkflows(updated);
    setSelectedWf({ ...selectedWf, status: statusUpdate });
  };

  return (
    <div className="content-container">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1 className="page-title">
            <GitPullRequest size={24} color="#0757A0" /> Event-Driven Departmental Workflow Engine
          </h1>
          <p className="page-subtitle">
            Automated inter-departmental task routing triggered by Deed Registrations and Geo-AI Satellite Alerts.
          </p>
        </div>
      </div>

      {/* Workflow Navigation Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
        <button 
          className={`btn ${activeWorkflowTab === 'EVENT_FLOW' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveWorkflowTab('EVENT_FLOW')}
        >
          Visual Event Pipelines (Architecture Flow)
        </button>
        <button 
          className={`btn ${activeWorkflowTab === 'TASKS' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveWorkflowTab('TASKS')}
        >
          Active Officer Tasks Queue ({workflows.length})
        </button>
      </div>

      {activeWorkflowTab === 'EVENT_FLOW' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Workflow Diagram 1: Registration Event */}
          <div className="card">
            <div className="card-header" style={{ backgroundColor: '#063B6D', color: '#FFFFFF' }}>
              <span className="card-title" style={{ color: '#FFFFFF' }}>
                <Building size={18} /> PIPELINE A: REGISTRATION EVENT WORKFLOW
              </span>
              <span className="status-pill success" style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>Automated Trigger</span>
            </div>

            <div className="card-body">
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
                gap: '0.5rem', 
                alignItems: 'center',
                textAlign: 'center',
                fontSize: '0.78rem'
              }}>
                <div style={{ background: '#EAF4FC', border: '1px solid #0757A0', padding: '0.6rem', borderRadius: '4px', fontWeight: 700 }}>
                  Sale Registration Completed
                </div>
                <div style={{ color: '#0757A0', fontWeight: 800 }}>→</div>
                <div style={{ background: '#F8FAFC', border: '1px solid #D0D5DD', padding: '0.6rem', borderRadius: '4px', fontWeight: 600 }}>
                  Identify ULPIN
                </div>
                <div style={{ color: '#0757A0', fontWeight: 800 }}>→</div>
                <div style={{ background: '#F8FAFC', border: '1px solid #D0D5DD', padding: '0.6rem', borderRadius: '4px', fontWeight: 600 }}>
                  Update Parcel Event
                </div>
                <div style={{ color: '#0757A0', fontWeight: 800 }}>→</div>
                <div style={{ background: '#FFF8E6', border: '1px solid #D88900', padding: '0.6rem', borderRadius: '4px', fontWeight: 700, color: '#D88900' }}>
                  Consistency Check
                </div>
                <div style={{ color: '#0757A0', fontWeight: 800 }}>→</div>
                <div style={{ background: '#F8FAFC', border: '1px solid #D0D5DD', padding: '0.6rem', borderRadius: '4px', fontWeight: 600 }}>
                  Notify Revenue Officer
                </div>
                <div style={{ color: '#0757A0', fontWeight: 800 }}>→</div>
                <div style={{ background: '#EDF7ED', border: '1px solid #16803C', padding: '0.6rem', borderRadius: '4px', fontWeight: 700, color: '#16803C' }}>
                  Update Audit Trail
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Diagram 2: Satellite Change Detected */}
          <div className="card">
            <div className="card-header" style={{ backgroundColor: '#C62828', color: '#FFFFFF' }}>
              <span className="card-title" style={{ color: '#FFFFFF' }}>
                <AlertTriangle size={18} /> PIPELINE B: SATELLITE CHANGE DETECTED WORKFLOW
              </span>
              <span className="status-pill danger" style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}>Geo-AI Alert</span>
            </div>

            <div className="card-body">
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
                gap: '0.5rem', 
                alignItems: 'center',
                textAlign: 'center',
                fontSize: '0.78rem'
              }}>
                <div style={{ background: '#FDE8E8', border: '1px solid #C62828', padding: '0.6rem', borderRadius: '4px', fontWeight: 700, color: '#C62828' }}>
                  Satellite Change Detected
                </div>
                <div style={{ color: '#C62828', fontWeight: 800 }}>→</div>
                <div style={{ background: '#F8FAFC', border: '1px solid #D0D5DD', padding: '0.6rem', borderRadius: '4px', fontWeight: 600 }}>
                  Identify Parcel ULPIN
                </div>
                <div style={{ color: '#C62828', fontWeight: 800 }}>→</div>
                <div style={{ background: '#F8FAFC', border: '1px solid #D0D5DD', padding: '0.6rem', borderRadius: '4px', fontWeight: 600 }}>
                  Check Building Permits
                </div>
                <div style={{ color: '#C62828', fontWeight: 800 }}>→</div>
                <div style={{ background: '#FFF8E6', border: '1px solid #D88900', padding: '0.6rem', borderRadius: '4px', fontWeight: 700, color: '#D88900' }}>
                  Check Land Use Zoning
                </div>
                <div style={{ color: '#C62828', fontWeight: 800 }}>→</div>
                <div style={{ background: '#FDE8E8', border: '1px solid #C62828', padding: '0.6rem', borderRadius: '4px', fontWeight: 700, color: '#C62828' }}>
                  Assign Field Officer
                </div>
                <div style={{ color: '#C62828', fontWeight: 800 }}>→</div>
                <div style={{ background: '#EDF7ED', border: '1px solid #16803C', padding: '0.6rem', borderRadius: '4px', fontWeight: 700, color: '#16803C' }}>
                  Close / Escalate
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Active Workflows Queue Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: '1.25rem', marginTop: activeWorkflowTab === 'EVENT_FLOW' ? '1.5rem' : 0 }}>
        {/* Left Task List */}
        <div className="card">
          <div className="card-header">
            <span className="card-title">Active Workflows</span>
          </div>

          <div className="card-body" style={{ padding: '0.5rem' }}>
            {workflows.map((wf) => {
              const isSelected = selectedWf.id === wf.id;
              return (
                <div
                  key={wf.id}
                  onClick={() => setSelectedWf(wf)}
                  style={{
                    padding: '0.75rem',
                    border: `1px solid ${isSelected ? '#0757A0' : '#EAECF0'}`,
                    borderRadius: '6px',
                    marginBottom: '0.5rem',
                    backgroundColor: isSelected ? '#EAF4FC' : '#FFFFFF',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0757A0' }}>{wf.id}</span>
                    <span className={`status-pill ${wf.status === 'RESOLVED' ? 'success' : 'warning'}`} style={{ fontSize: '0.65rem' }}>
                      {wf.status}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#063B6D', marginTop: '0.2rem' }}>
                    ULPIN: {wf.ulpin}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#475467', marginTop: '0.1rem' }}>
                    {wf.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Task Detail & Officer Action Panel */}
        <div className="card">
          <div className="card-header" style={{ backgroundColor: '#063B6D', color: '#FFFFFF' }}>
            <span className="card-title" style={{ color: '#FFFFFF' }}>
              Workflow Task Inspector — {selectedWf.id}
            </span>
            <span className="status-pill warning" style={{ backgroundColor: '#FFF8E6', color: '#D88900' }}>
              Priority: {selectedWf.priority}
            </span>
          </div>

          <div className="card-body">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
              <div><span style={{ color: '#667085' }}>Target ULPIN:</span> <br/><strong style={{ color: '#0757A0' }}>{selectedWf.ulpin}</strong></div>
              <div><span style={{ color: '#667085' }}>Triggering Event:</span> <br/><strong>{selectedWf.triggerEvent}</strong></div>
              <div><span style={{ color: '#667085' }}>Assigned Department:</span> <br/><strong>{selectedWf.assignedDepartment}</strong></div>
              <div><span style={{ color: '#667085' }}>Assigned Officer:</span> <br/><strong>{selectedWf.assignedOfficer}</strong></div>
            </div>

            {/* Steps Progress Checklist */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#063B6D', marginBottom: '0.6rem' }}>
                Workflow Step Progress:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedWf.steps.map((st, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 0.75rem', background: st.status === 'COMPLETED' ? '#EDF7ED' : '#F8FAFC', borderRadius: '4px', border: '1px solid #EAECF0', fontSize: '0.8rem' }}>
                    <span style={{ fontWeight: st.status === 'COMPLETED' ? 700 : 500, color: st.status === 'COMPLETED' ? '#16803C' : '#172B4D' }}>
                      {idx + 1}. {st.name}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#667085' }}>{st.date} ({st.status})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Officer Action Bar */}
            <div style={{ borderTop: '1px solid #EAECF0', paddingTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button className="btn btn-secondary" onClick={() => handleAction('REQUEST_SURVEY')}>
                Order Physical Survey
              </button>
              <button className="btn btn-primary" onClick={() => handleAction('RESOLVED')}>
                ✓ Approve & Mark Resolved
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
