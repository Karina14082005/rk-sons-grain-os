import React, { useState } from 'react';
import '../styles/theme.css';

export default function Reports() {
  const [selectedMonth, setSelectedMonth] = useState('August 2026');

  const monthlyBreakdown = [
    { category: 'Grain Sales Revenue', amount: '₹ 98,50,000', type: 'inflow', percentage: '100%' },
    { category: 'Grain Purchase Cost', amount: '₹ 85,00,000', type: 'outflow', percentage: '86.2%' },
    { category: 'Transport & Freight', amount: '₹ 3,20,000', type: 'outflow', percentage: '3.2%' },
    { category: 'Labor & Hamali Charges', amount: '₹ 1,45,000', type: 'outflow', percentage: '1.4%' },
    { category: 'Godown Maintenance & Utilities', amount: '₹ 60,000', type: 'outflow', percentage: '0.6%' }
  ];

  const reportModules = [
    { title: 'Purchase Reports', desc: 'Detailed grain-wise purchase logs and farmer bills', icon: '🌾', count: '48 Invoices' },
    { title: 'Sales Reports', desc: 'Party-wise dispatches, billing summaries, and invoices', icon: '📦', count: '32 Invoices' },
    { title: 'Stock Valuation Report', desc: 'Godown-wise closing balance and market rates', icon: '🏢', count: '3 Warehouses' },
    { title: 'Outstanding & Party Ledger', desc: 'Pending dues from buyers and payment obligations', icon: '💰', count: '12 Active Dues' }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* Header & Month Selector */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ color: '#1B4D3E', margin: 0, fontSize: '22px' }}>Business Reports & Profit Analytics</h2>
          <p style={{ color: '#718096', fontSize: '13px', margin: '4px 0 0 0' }}>Comprehensive financial statements and operational audits for RK Sons.</p>
        </div>
        <select 
          value={selectedMonth} 
          onChange={(e) => setSelectedMonth(e.target.value)}
          style={selectStyle}
        >
          <option value="August 2026">August 2026</option>
          <option value="July 2026">July 2026</option>
          <option value="June 2026">June 2026</option>
        </select>
      </div>

      {/* Primary Financial Overview Card */}
      <div style={netProfitCardStyle}>
        <div>
          <span style={{ fontSize: '13px', opacity: 0.85, fontWeight: '600' }}>Estimated Net Profit — {selectedMonth}</span>
          <div style={{ fontSize: '32px', fontWeight: 'bold', margin: '6px 0' }}>₹ 8,25,000</div>
          <span style={{ fontSize: '12px', background: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '6px' }}>
            ✨ Operating Profit Margin: 8.38%
          </span>
        </div>

        <div style={{ display: 'flex', gap: '30px', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '30px' }}>
          <div>
            <div style={{ fontSize: '12px', opacity: 0.8 }}>Total Sales</div>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>₹ 98.5L</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', opacity: 0.8 }}>Total Purchases</div>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>₹ 85.0L</div>
          </div>
          <div>
            <div style={{ fontSize: '12px', opacity: 0.8 }}>Total Expenses</div>
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>₹ 5.25L</div>
          </div>
        </div>
      </div>

      {/* Detailed Financial Breakdown Table */}
      <div style={sectionContainer}>
        <h3 style={{ fontSize: '16px', color: '#1B4D3E', margin: '0 0 15px 0' }}>Monthly Financial Statement Breakdown</h3>
        <div style={{ border: '1px solid #E2E8F0', borderRadius: '8px', overflow: 'hidden' }}>
          {monthlyBreakdown.map((row, index) => (
            <div key={index} style={rowStyle}>
              <span style={{ fontWeight: '600', color: '#2D3748', fontSize: '14px' }}>{row.category}</span>
              <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#718096' }}>Share: {row.percentage}</span>
                <span style={{ fontWeight: 'bold', fontSize: '14px', color: row.type === 'inflow' ? '#27AE60' : '#E53E3E' }}>
                  {row.type === 'inflow' ? '+' : '-'} {row.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Report Categories Grid */}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ fontSize: '16px', color: '#1B4D3E', margin: '0 0 15px 0' }}>Advanced Report Categories</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
          {reportModules.map((mod, index) => (
            <div key={index} style={reportCardStyle}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={iconBoxStyle}>{mod.icon}</div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#2D3748', fontSize: '15px' }}>{mod.title}</div>
                  <div style={{ fontSize: '12px', color: '#718096', marginTop: '2px' }}>{mod.desc}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '11px', background: '#EDF2F7', padding: '4px 8px', borderRadius: '6px', fontWeight: '600', color: '#4A5568' }}>{mod.count}</span>
                <span style={{ color: '#A0AEC0', fontWeight: 'bold', fontSize: '18px' }}>›</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

const selectStyle = { padding: '8px 14px', borderRadius: '8px', border: '1px solid #CBD5E0', background: '#FFF', fontSize: '13px', fontWeight: '600', color: '#2D3748', outline: 'none', cursor: 'pointer' };
const netProfitCardStyle = { background: 'linear-gradient(135deg, #1B4D3E 0%, #276749 100%)', color: '#FFF', padding: '24px 30px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', boxShadow: '0 4px 15px rgba(27,77,62,0.15)' };
const sectionContainer = { background: '#FFF', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #E2E8F0' };
const rowStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', borderBottom: '1px solid #EDF2F7', background: '#FFF' };
const reportCardStyle = { background: '#FFF', padding: '18px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.02)', cursor: 'pointer', transition: 'all 0.2s' };
const iconBoxStyle = { background: '#F8FAFC', width: '42px', height: '42px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', border: '1px solid #E2E8F0' };