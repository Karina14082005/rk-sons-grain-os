import React from 'react';
import '../styles/theme.css';

export default function Dashboard({ onNavigate }) {
  return (
    <div style={{ padding: '0 10px', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* Welcome Banner */}
      <div style={welcomeBannerStyle}>
        <div>
          <span style={{ fontSize: '13px', color: '#4A5568', fontWeight: '600' }}>Good Morning, Admin</span>
          <h2 style={{ margin: '4px 0 0 0', fontSize: '24px', color: '#1B4D3E' }}>RK Sons Mandi Overview</h2>
        </div>
        <div style={{ background: '#E6FFFA', color: '#234E52', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold', border: '1px solid #B2F5EA' }}>
          📅 Today: 01 Sep 2026
        </div>
      </div>

      {/* Primary Metrics Grid (4 Columns for Desktop) */}
      <div style={metricsGridStyle}>
        
        <div style={{ ...metricCardStyle, borderLeft: '4px solid #1B4D3E' }}>
          <span style={metricLabel}>Today's Purchase</span>
          <div style={metricValue}>₹ 4,85,000</div>
          <span style={{ fontSize: '11px', color: '#27AE60', fontWeight: '600' }}>↑ 12% vs yesterday</span>
        </div>

        <div style={{ ...metricCardStyle, borderLeft: '4px solid #27AE60' }}>
          <span style={metricLabel}>Today's Sales</span>
          <div style={metricValue}>₹ 6,25,000</div>
          <span style={{ fontSize: '11px', color: '#27AE60', fontWeight: '600' }}>↑ 18% vs yesterday</span>
        </div>

        <div style={{ ...metricCardStyle, borderLeft: '4px solid #D69E2E' }}>
          <span style={metricLabel}>Total Stock Available</span>
          <div style={metricValue}>1,245.5 Qtl</div>
          <span style={{ fontSize: '11px', color: '#718096' }}>Across 3 commodities</span>
        </div>

        <div style={{ ...metricCardStyle, borderLeft: '4px solid #E53E3E' }}>
          <span style={metricLabel}>Total Receivables</span>
          <div style={{ ...metricValue, color: '#E53E3E' }}>₹ 28,45,000</div>
          <span style={{ fontSize: '11px', color: '#E53E3E' }}>Pending from parties</span>
        </div>

      </div>

      {/* Quick Actions Bar */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '16px', color: '#2D3748', marginBottom: '15px' }}>Quick Actions</h3>
        <div style={quickActionsGrid}>
          
          <div onClick={() => onNavigate('newPurchase')} style={actionCard}>
            <span style={{ fontSize: '24px' }}>📥</span>
            <span style={actionText}>New Purchase</span>
          </div>

          <div onClick={() => onNavigate('newSale')} style={actionCard}>
            <span style={{ fontSize: '24px' }}>🛒</span>
            <span style={actionText}>New Sale Entry</span>
          </div>

          <div onClick={() => onNavigate('payments')} style={actionCard}>
            <span style={{ fontSize: '24px' }}>💰</span>
            <span style={actionText}>Record Payment</span>
          </div>

          <div onClick={() => onNavigate('expenses')} style={actionCard}>
            <span style={{ fontSize: '24px' }}>⚙️</span>
            <span style={actionText}>Add Expense</span>
          </div>

          <div onClick={() => onNavigate('transactions')} style={actionCard}>
            <span style={{ fontSize: '24px' }}>📑</span>
            <span style={actionText}>View Ledgers</span>
          </div>

        </div>
      </div>

      {/* Activity Summary Section */}
      <div style={{ background: '#FFF', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #E2E8F0' }}>
        <h3 style={{ fontSize: '16px', color: '#1B4D3E', margin: '0 0 15px 0' }}>Today's Financial Activity</h3>
        
        <div style={activityRow}>
          <span style={{ color: '#4A5568', fontSize: '14px' }}>Total Grain Purchased</span>
          <span style={{ fontWeight: 'bold', color: '#2D3748' }}>₹ 4,85,000 (750 Qtl)</span>
        </div>
        <div style={activityRow}>
          <span style={{ color: '#4A5568', fontSize: '14px' }}>Total Grain Sold</span>
          <span style={{ fontWeight: 'bold', color: '#2D3748' }}>₹ 6,25,000 (920 Qtl)</span>
        </div>
        <div style={activityRow}>
          <span style={{ color: '#4A5568', fontSize: '14px' }}>Payments Received from Parties</span>
          <span style={{ fontWeight: 'bold', color: '#27AE60' }}>₹ 3,20,000</span>
        </div>
        <div style={{ ...activityRow, borderBottom: 'none' }}>
          <span style={{ color: '#4A5568', fontSize: '14px' }}>Mandi Expenses & Hamali</span>
          <span style={{ fontWeight: 'bold', color: '#E53E3E' }}>₹ 45,000</span>
        </div>

      </div>

    </div>
  );
}

// STYLES FOR RESPONSIVE DESKTOP DASHBOARD
const welcomeBannerStyle = {
  background: '#FFF',
  padding: '20px 24px',
  borderRadius: '12px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '24px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  border: '1px solid #E2E8F0'
};

const metricsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '20px',
  marginBottom: '30px'
};

const metricCardStyle = {
  background: '#FFF',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  border: '1px solid #E2E8F0',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px'
};

const metricLabel = {
  fontSize: '13px',
  color: '#718096',
  fontWeight: '600'
};

const metricValue = {
  fontSize: '22px',
  fontWeight: 'bold',
  color: '#1A202C'
};

const quickActionsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '15px'
};

const actionCard = {
  background: '#FFF',
  padding: '18px 12px',
  borderRadius: '12px',
  textAlign: 'center',
  boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
  border: '1px solid #E2E8F0',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
};

const actionText = {
  fontSize: '13px',
  fontWeight: '600',
  color: '#2D3748'
};

const activityRow = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '12px 0',
  borderBottom: '1px solid #EDF2F7'
};

