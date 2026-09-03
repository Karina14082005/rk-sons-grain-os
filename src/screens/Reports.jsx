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

  const analyticsSegments = [
    { label: 'Grain purchases', value: '₹ 85.0L', percentage: 86.3, color: '#195541' },
    { label: 'Operating expenses', value: '₹ 5.25L', percentage: 5.3, color: '#D8A94E' },
    { label: 'Net profit', value: '₹ 8.25L', percentage: 8.4, color: '#C55445' }
  ];

  const performanceTrend = [
    { month: 'Mar', sales: 62, profit: 44 }, { month: 'Apr', sales: 71, profit: 52 },
    { month: 'May', sales: 68, profit: 48 }, { month: 'Jun', sales: 78, profit: 60 },
    { month: 'Jul', sales: 88, profit: 70 }, { month: 'Aug', sales: 98, profit: 82 }
  ];

  const commodityMix = [
    { name: 'Wheat', quantity: '486 Qtl', percentage: 78, color: '#195541' },
    { name: 'Soybean', quantity: '318 Qtl', percentage: 56, color: '#D8A94E' },
    { name: 'Maize', quantity: '241 Qtl', percentage: 42, color: '#C55445' }
  ];

  return (
    <div className="reports-view" style={{ width: '100%', maxWidth: '1240px', margin: '0 auto', fontFamily: 'DM Sans, sans-serif' }}>
      
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

      <div className="analytics-grid" style={analyticsGridStyle}>
        <div className="analytics-card" style={analyticsCardStyle}>
          <div style={analyticsHeaderStyle}>
            <div><h3 style={{ fontSize: '17px', color: '#195541', margin: 0 }}>Revenue allocation</h3><p style={{ color: '#718078', fontSize: '12px', margin: '5px 0 0' }}>How every rupee of sales is distributed</p></div>
            <span style={periodPillStyle}>{selectedMonth}</span>
          </div>
          <div className="chart-layout" style={chartLayoutStyle}>
            <div className="donut-chart" style={{ background: 'conic-gradient(#195541 0deg 310.7deg, #D8A94E 310.7deg 329.8deg, #C55445 329.8deg 360deg)' }}>
              <div style={donutCenterStyle}><strong>₹ 98.5L</strong><span>total sales</span></div>
            </div>
            <div style={legendStyle}>{analyticsSegments.map((segment) => (
              <div key={segment.label} className="analytics-legend-row" style={legendRowStyle}>
                <span style={{ ...legendDotStyle, background: segment.color }} />
                <div style={{ flex: 1 }}><div style={{ color: '#30453D', fontSize: '12px', fontWeight: '600' }}>{segment.label}</div><div style={{ color: '#8A968F', fontSize: '11px', marginTop: '2px' }}>{segment.percentage}% of sales</div></div>
                <strong style={{ color: '#20362E', fontSize: '12px' }}>{segment.value}</strong>
              </div>
            ))}</div>
          </div>
        </div>

        <div className="analytics-card" style={analyticsCardStyle}>
          <div style={analyticsHeaderStyle}><div><h3 style={{ fontSize: '17px', color: '#195541', margin: 0 }}>Profit health</h3><p style={{ color: '#718078', fontSize: '12px', margin: '5px 0 0' }}>Operating performance this month</p></div><span style={{ color: '#2C8A61', fontSize: '12px', fontWeight: '700' }}>+14.8% MoM</span></div>
          <div style={healthMetricStyle}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}><span style={{ color: '#718078', fontSize: '12px' }}>Operating margin</span><strong style={{ color: '#195541', fontSize: '26px' }}>8.38%</strong></div><div style={progressTrackStyle}><div style={{ ...progressFillStyle, width: '62%' }} /></div><div style={{ display: 'flex', justifyContent: 'space-between', color: '#8A968F', fontSize: '11px', marginTop: '8px' }}><span>Target: 10%</span><span>On track</span></div></div>
          <div className="mini-stats" style={miniStatsStyle}><div><span>Sales growth</span><strong>+18.2%</strong></div><div><span>Cost ratio</span><strong>91.6%</strong></div></div>
        </div>
      </div>

      <div className="visuals-grid" style={visualsGridStyle}>
        <div className="analytics-card" style={analyticsCardStyle}>
          <div style={analyticsHeaderStyle}><div><h3 style={{ fontSize: '17px', color: '#195541', margin: 0 }}>Performance trend</h3><p style={{ color: '#718078', fontSize: '12px', margin: '5px 0 0' }}>Sales and profit movement over six months</p></div><div className="chart-key" style={chartKeyStyle}><span><i style={{ background: '#195541' }} /> Sales</span><span><i style={{ background: '#D8A94E' }} /> Profit</span></div></div>
          <div className="bar-chart" style={barChartStyle}>{performanceTrend.map((point) => (<div key={point.month} style={barColumnStyle}><div style={barPairStyle}><div className="trend-bar" style={{ ...salesBarStyle, height: `${point.sales}%` }} title={`Sales ₹${point.sales / 10}L`} /><div className="trend-bar" style={{ ...profitBarStyle, height: `${point.profit}%` }} title={`Profit ₹${point.profit / 10}L`} /></div><span style={{ color: '#8A968F', fontSize: '10px' }}>{point.month}</span></div>))}</div>
        </div>
        <div className="analytics-card" style={analyticsCardStyle}>
          <div style={analyticsHeaderStyle}><div><h3 style={{ fontSize: '17px', color: '#195541', margin: 0 }}>Stock mix</h3><p style={{ color: '#718078', fontSize: '12px', margin: '5px 0 0' }}>Current commodity allocation</p></div><span style={{ color: '#718078', fontSize: '11px', fontWeight: '600' }}>1,245 Qtl</span></div>
          <div style={commodityListStyle}>{commodityMix.map((commodity) => (<div key={commodity.name} className="commodity-row"><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '7px' }}><span style={{ color: '#30453D', fontWeight: '600' }}>{commodity.name}</span><span style={{ color: '#718078' }}>{commodity.quantity}</span></div><div className="commodity-track" style={commodityTrackStyle}><div style={{ ...commodityFillStyle, width: `${commodity.percentage}%`, background: commodity.color }} /></div></div>))}</div>
          <div className="insight-card" style={insightStyle}>Profit is up <strong>14.8%</strong> while stock turnover remains healthy.</div>
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
const netProfitCardStyle = { background: 'linear-gradient(135deg, #195541 0%, #103B30 100%)', color: '#FFF', padding: '30px 34px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', boxShadow: '0 16px 34px rgba(25,85,65,0.18)' };
const analyticsGridStyle = { display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '18px', marginBottom: '25px' };
const analyticsCardStyle = { background: '#FFFDF8', padding: '28px', borderRadius: '16px', boxShadow: '0 16px 34px rgba(48,57,39,0.08)', border: '1px solid #E4DDCE' };
const analyticsHeaderStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' };
const periodPillStyle = { color: '#76551C', background: '#F7EED8', border: '1px solid #E8D39F', borderRadius: '20px', padding: '5px 9px', fontSize: '10px', fontWeight: '700', whiteSpace: 'nowrap' };
const chartLayoutStyle = { display: 'flex', alignItems: 'center', gap: '38px', marginTop: '24px' };
const donutCenterStyle = { width: '116px', height: '116px', background: '#FFFDF8', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#20362E' };
const legendStyle = { flex: 1, display: 'flex', flexDirection: 'column', gap: '13px' };
const legendRowStyle = { display: 'flex', alignItems: 'center', gap: '9px' };
const legendDotStyle = { width: '9px', height: '9px', borderRadius: '50%', flexShrink: 0 };
const healthMetricStyle = { background: '#F5F1E8', borderRadius: '12px', padding: '22px', marginTop: '24px' };
const progressTrackStyle = { height: '8px', borderRadius: '8px', background: '#E3DED2', overflow: 'hidden', marginTop: '14px' };
const progressFillStyle = { height: '100%', borderRadius: '8px', background: 'linear-gradient(90deg, #D8A94E, #2C8A61)' };
const miniStatsStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '18px' };
const visualsGridStyle = { display: 'grid', gridTemplateColumns: '1.4fr 0.6fr', gap: '18px', marginBottom: '25px' };
const chartKeyStyle = { display: 'flex', gap: '10px', color: '#718078', fontSize: '10px' };
const barChartStyle = { display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '190px', padding: '18px 8px 0', borderBottom: '1px solid #E4DDCE', marginTop: '20px' };
const barColumnStyle = { height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: '8px', flex: 1 };
const barPairStyle = { height: '100%', display: 'flex', alignItems: 'flex-end', gap: '5px' };
const salesBarStyle = { width: '18px', borderRadius: '6px 6px 0 0', background: '#195541', minHeight: '8px' };
const profitBarStyle = { width: '18px', borderRadius: '6px 6px 0 0', background: '#D8A94E', minHeight: '8px' };
const commodityListStyle = { display: 'flex', flexDirection: 'column', gap: '17px', marginTop: '25px' };
const commodityTrackStyle = { height: '7px', borderRadius: '7px', background: '#E9E4D9', overflow: 'hidden' };
const commodityFillStyle = { height: '100%', borderRadius: '7px' };
const insightStyle = { marginTop: '20px', padding: '11px 12px', borderRadius: '9px', background: '#F7EED8', color: '#76551C', fontSize: '11px', lineHeight: 1.5 };
const sectionContainer = { background: '#FFF', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', border: '1px solid #E2E8F0' };
const rowStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 20px', borderBottom: '1px solid #EDF2F7', background: '#FFF' };
const reportCardStyle = { background: '#FFF', padding: '18px 20px', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.02)', cursor: 'pointer', transition: 'all 0.2s' };
const iconBoxStyle = { background: '#F8FAFC', width: '42px', height: '42px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', border: '1px solid #E2E8F0' };