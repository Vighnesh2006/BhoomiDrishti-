import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function VerificationPage({ navigate }) {
  const comparisonRows = [
    {
      parameter: 'Area (Ha)',
      cadastral: '2.40',
      ror: '2.35',
      registration: '2.40',
      tax: '2.38',
      status: 'Mismatch',
      statusType: 'danger'
    },
    {
      parameter: 'Land Use',
      cadastral: 'Residential',
      ror: 'Residential',
      registration: 'Residential',
      tax: 'Residential',
      status: 'Consistent',
      statusType: 'success'
    },
    {
      parameter: 'Owner Name',
      cadastral: 'Owner A',
      ror: 'Owner A',
      registration: 'Owner A',
      tax: 'Owner A',
      status: 'Consistent',
      statusType: 'success'
    },
    {
      parameter: 'Survey No.',
      cadastral: '123/2',
      ror: '123/2',
      registration: '123/2',
      tax: '-',
      status: 'Consistent',
      statusType: 'success'
    },
    {
      parameter: 'Plot Boundary',
      cadastral: 'Available',
      ror: 'Available',
      registration: '-',
      tax: '-',
      status: 'Consistent',
      statusType: 'success'
    }
  ];

  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#F8FAFC', minHeight: '100%' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.2rem' }}>
          Data Consistency Check
        </h1>
        <p style={{ fontSize: '0.88rem', color: '#64748B' }}>
          Compare records from different departments
        </p>
      </div>

      {/* 4 Metric Cards matching mockup */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {/* Metric 1 */}
        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '1.25rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#DC2626' }}>1</div>
          <div style={{ fontSize: '0.8rem', color: '#DC2626', fontWeight: 700, marginTop: '0.2rem' }}>Discrepancy Found</div>
        </div>

        {/* Metric 2 */}
        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '1.25rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#15803D' }}>3</div>
          <div style={{ fontSize: '0.8rem', color: '#15803D', fontWeight: 700, marginTop: '0.2rem' }}>Consistent Records</div>
        </div>

        {/* Metric 3 */}
        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '1.25rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#D97706' }}>0</div>
          <div style={{ fontSize: '0.8rem', color: '#D97706', fontWeight: 700, marginTop: '0.2rem' }}>Missing Records</div>
        </div>

        {/* Metric 4 */}
        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '1.25rem', textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#64748B' }}>5</div>
          <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700, marginTop: '0.2rem' }}>Total Datasets</div>
        </div>
      </div>

      {/* Multi-Source Comparison Table matching mockup */}
      <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Cadastral</th>
              <th>RoR</th>
              <th>Registration</th>
              <th>Property Tax</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, idx) => (
              <tr key={idx}>
                <td style={{ fontWeight: 700, color: '#0F172A' }}>{row.parameter}</td>
                <td>{row.cadastral}</td>
                <td>{row.ror}</td>
                <td>{row.registration}</td>
                <td>{row.tax}</td>
                <td>
                  {row.statusType === 'danger' ? (
                    <span className="status-pill danger">Mismatch</span>
                  ) : (
                    <span className="status-pill success">Consistent</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Red Alert Banner matching mockup */}
      <div style={{
        backgroundColor: '#FEE2E2',
        border: '1px solid #FCA5A5',
        borderRadius: '8px',
        padding: '1.25rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#DC2626', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 800 }}>!</div>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#991B1B', marginBottom: '0.2rem' }}>
              Area Discrepancy Detected
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#7F1D1D' }}>
              The area in RoR (2.35 Ha) does not match with Cadastral (2.40 Ha) and Registration (2.40 Ha). This may require verification.
            </p>
          </div>
        </div>

        <button 
          className="btn btn-danger"
          onClick={() => navigate('/parcel/MH-PUN-001245-6789')}
          style={{ padding: '0.55rem 1.25rem', borderRadius: '6px', fontSize: '0.88rem' }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
