import React, { useState } from 'react';
import '../styles/theme.css';

export default function Payment() {
  const [paymentType, setPaymentType] = useState('received'); // 'received' or 'paid'
  const [successMsg, setSuccessMsg] = useState(false);
  const [formData, setFormData] = useState({
    partyName: 'Ramesh Patel',
    amount: '50000',
    mode: 'Bank Transfer (NEFT/RTGS/IMPS)',
    reference: 'UTR123456789',
    notes: 'Advance payment for wheat purchase'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 3000);
  };

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* Header & Status Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ color: '#1B4D3E', margin: 0, fontSize: '22px' }}>Record Financial Payment</h2>
          <p style={{ color: '#718096', fontSize: '13px', margin: '4px 0 0 0' }}>Manage inward receipts from buyers and outward payments to farmers/vendors.</p>
        </div>
        {successMsg && (
          <div style={{ background: '#C6F6D5', color: '#22543D', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold', border: '1px solid #9AE6B4' }}>
            ✅ {paymentType === 'received' ? 'Payment Received' : 'Payment Paid'} Entry Saved!
          </div>
        )}
      </div>

      {/* Form Container */}
      <div style={{ background: '#FFF', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
        
        {/* Working Toggle Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', background: '#EDF2F7', padding: '6px', borderRadius: '10px', marginBottom: '25px' }}>
          <button 
            type="button" 
            onClick={() => setPaymentType('received')}
            style={paymentType === 'received' ? activeToggleReceived : inactiveToggle}
          >
            📥 Payment Received (Inward)
          </button>
          <button 
            type="button" 
            onClick={() => setPaymentType('paid')}
            style={paymentType === 'paid' ? activeTogglePaid : inactiveToggle}
          >
            📤 Payment Paid (Outward)
          </button>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          
          <div style={{ gridColumn: 'span 2' }}>
            <label style={labelStyle}>{paymentType === 'received' ? 'Received From (Party / Farmer Name)' : 'Paid To (Farmer / Vendor Name)'}</label>
            <input type="text" name="partyName" value={formData.partyName} onChange={handleChange} style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Amount (₹)</label>
            <input type="number" name="amount" value={formData.amount} onChange={handleChange} style={{ ...inputStyle, fontSize: '16px', fontWeight: 'bold', color: paymentType === 'received' ? '#27AE60' : '#E53E3E' }} />
          </div>

          <div>
            <label style={labelStyle}>Payment Mode</label>
            <select name="mode" value={formData.mode} onChange={handleChange} style={inputStyle}>
              <option value="Bank Transfer (NEFT/RTGS/IMPS)">Bank Transfer (NEFT/RTGS/IMPS)</option>
              <option value="UPI / QR Code">UPI / QR Code</option>
              <option value="Cheque">Cheque</option>
              <option value="Cash">Cash</option>
            </select>
          </div>

          <div style={{ gridColumn: 'span 2' }}>
            <label style={labelStyle}>Reference / UTR / Cheque No.</label>
            <input type="text" name="reference" value={formData.reference} onChange={handleChange} style={inputStyle} />
          </div>

          <div style={{ gridColumn: 'span 2' }}>
            <label style={labelStyle}>Notes / Remarks</label>
            <textarea name="notes" rows="3" value={formData.notes} onChange={handleChange} style={{ ...inputStyle, resize: 'none' }} />
          </div>

          <div style={{ gridColumn: 'span 2', marginTop: '10px' }}>
            <button 
              type="submit" 
              style={{ 
                ...btnStyle, 
                background: paymentType === 'received' ? '#1B4D3E' : '#C53030' 
              }}
            >
              {paymentType === 'received' ? 'Save Received Entry' : 'Save Paid Entry'}
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}

const labelStyle = { display: 'block', fontSize: '12px', fontWeight: '600', color: '#4A5568', marginBottom: '6px' };
const inputStyle = { width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #CBD5E0', background: '#F8FAFC', fontSize: '14px', boxSizing: 'border-box', outline: 'none' };
const btnStyle = { width: '100%', color: '#FFF', padding: '14px', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', transition: 'background 0.2s' };
const inactiveToggle = { background: 'transparent', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: '600', color: '#4A5568', cursor: 'pointer', fontSize: '13px' };
const activeToggleReceived = { background: '#1B4D3E', color: '#FFF', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' };
const activeTogglePaid = { background: '#C53030', color: '#FFF', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' };