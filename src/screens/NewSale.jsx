import React, { useState } from 'react';
import '../styles/theme.css';

export default function NewSale() {
  const [saleData, setSaleData] = useState({
    buyerName: '',
    grainType: 'Wheat (Gehu)',
    bags: '',
    weightQtl: '',
    ratePerQtl: '',
    vehicleNo: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSaleData(prev => ({ ...prev, [name]: value }));
  };

  const totalAmount = (Number(saleData.weightQtl) || 0) * (Number(saleData.ratePerQtl) || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sale Saved Successfully! Total Amount: ₹${totalAmount}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif', background: '#FFF', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #E2E8F0' }}>
      
      <h2 style={{ color: '#1B4D3E', marginBottom: '6px', fontSize: '20px' }}>New Grain Sale Entry</h2>
      <p style={{ color: '#718096', fontSize: '13px', marginBottom: '20px' }}>Record daily grain sales made to buyers or traders.</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <div>
          <label style={labelStyle}>Buyer / Party Name</label>
          <input type="text" name="buyerName" value={saleData.buyerName} onChange={handleChange} placeholder="Enter buyer name" required style={inputStyle} />
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Grain Type</label>
            <select name="grainType" value={saleData.grainType} onChange={handleChange} style={inputStyle}>
              <option value="Wheat (Gehu)">Wheat (Gehu)</option>
              <option value="Paddy (Dhaan)">Paddy (Dhaan)</option>
              <option value="Soybean">Soybean</option>
              <option value="Maize (Makka)">Maize (Makka)</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>No. of Bags</label>
            <input type="number" name="bags" value={saleData.bags} onChange={handleChange} placeholder="e.g. 50" style={inputStyle} />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Weight (Quintals)</label>
            <input type="number" step="0.01" name="weightQtl" value={saleData.weightQtl} onChange={handleChange} placeholder="e.g. 25.5" style={inputStyle} required />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Rate per Quintal (₹)</label>
            <input type="number" name="ratePerQtl" value={saleData.ratePerQtl} onChange={handleChange} placeholder="e.g. 2400" style={inputStyle} required />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Vehicle Number (Optional)</label>
          <input type="text" name="vehicleNo" value={saleData.vehicleNo} onChange={handleChange} placeholder="e.g. MP09AB1234" style={inputStyle} />
        </div>

        {/* Live Total Calculation Banner */}
        <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: '600', color: '#166534', fontSize: '14px' }}>Total Calculated Amount:</span>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#15803D' }}>₹ {totalAmount.toLocaleString('en-IN')}</span>
        </div>

        <div>
          <label style={labelStyle}>Remarks / Notes</label>
          <textarea name="notes" rows="2" value={saleData.notes} onChange={handleChange} placeholder="Any additional notes..." style={{ ...inputStyle, resize: 'none' }} />
        </div>

        <button type="submit" style={submitBtnStyle}>
          Save Sale Entry
        </button>

      </form>
    </div>
  );
}

const labelStyle = { display: 'block', fontSize: '12px', fontWeight: '600', color: '#4A5568', marginBottom: '6px' };
const inputStyle = { width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E0', background: '#FFF', fontSize: '14px', boxSizing: 'border-box', outline: 'none' };
const submitBtnStyle = { width: '100%', background: '#1B4D3E', color: '#FFF', padding: '12px', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', marginTop: '10px' };