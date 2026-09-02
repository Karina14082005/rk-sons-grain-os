import React, { useState } from 'react';
import '../styles/theme.css';

export default function NewPurchase() {
  const [formData, setFormData] = useState({
    purchaseDate: '02-09-2026',
    farmerName: '',
    village: '',
    commodity: 'Wheat (Gehun)',
    bags: '',
    grossWeight: '',
    tareWeight: '',
    bardana: '',
    rate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Calculations
  const gross = parseFloat(formData.grossWeight) || 0;
  const tare = parseFloat(formData.tareWeight) || 0;
  const bardanaDed = parseFloat(formData.bardana) || 0;
  const rateVal = parseFloat(formData.rate) || 0;

  const netWeight = Math.max(0, gross - tare - bardanaDed);
  const grainAmount = netWeight * rateVal;
  const netPayable = grainAmount; // Add hamali/comm logic if needed

  const handleDraft = () => {
    alert('Purchase entry saved as Draft successfully!');
  };

  const handlePrintBill = () => {
    if (!formData.farmerName) {
      alert('Please enter Farmer / Seller Name');
      return;
    }
    alert(`Bill for ${formData.farmerName} saved and sent to printer successfully!`);
  };

  const handleWhatsApp = () => {
    if (!formData.farmerName) {
      alert('Please enter Farmer / Seller Name');
      return;
    }
    alert(`Opening WhatsApp to share bill with ${formData.farmerName}`);
  };

  return (
    <div style={{ padding: '30px', fontFamily: "'Poppins', 'Segoe UI', sans-serif", background: '#F8FAFC', minHeight: '100vh', boxSizing: 'border-box' }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#0F271D', margin: 0, fontSize: '24px', fontWeight: '700' }}>New Purchase</h2>
      </div>

      {/* Main Form Box */}
      <div style={{ background: '#1B4D3E', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        
        {/* Card Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFF' }}>
            <span style={{ fontSize: '20px' }}>📦</span>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>Advanced Mandi Purchase Entry (RK Sons)</h3>
          </div>
          <button onClick={handleDraft} style={draftBtnStyle}>Draft Invoice</button>
        </div>

        {/* Inputs Grid */}
        <div style={{ background: '#FFF', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Purchase Date</label>
              <input type="text" name="purchaseDate" value={formData.purchaseDate} onChange={handleInputChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Farmer / Seller Name</label>
              <input type="text" name="farmerName" value={formData.farmerName} onChange={handleInputChange} placeholder="e.g. Ramesh Singh" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Village / Mandi Source</label>
              <input type="text" name="village" value={formData.village} onChange={handleInputChange} placeholder="e.g. Pipariya" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Grain Commodity</label>
              <select name="commodity" value={formData.commodity} onChange={handleInputChange} style={inputStyle}>
                <option value="Wheat (Gehun)">Wheat (Gehun)</option>
                <option value="Rice (Chawal)">Rice (Chawal)</option>
                <option value="Maize (Makka)">Maize (Makka)</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Total Bags (Gunny)</label>
              <input type="number" name="bags" value={formData.bags} onChange={handleInputChange} placeholder="100" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Gross Weight (Qtl)</label>
              <input type="number" step="0.01" name="grossWeight" value={formData.grossWeight} onChange={handleInputChange} placeholder="52.50" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Tare / Vehicle Weight (Qtl)</label>
              <input type="number" step="0.01" name="tareWeight" value={formData.tareWeight} onChange={handleInputChange} placeholder="12.00" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Bardana Deduction (Qtl)</label>
              <input type="number" step="0.01" name="bardana" value={formData.bardana} onChange={handleInputChange} placeholder="0.50" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Rate per Quintal (₹)</label>
              <input type="number" name="rate" value={formData.rate} onChange={handleInputChange} placeholder="2650" style={inputStyle} />
            </div>
          </div>

          {/* Live Mandi Computation Box */}
          <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', marginTop: '10px' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#1B4D3E', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              ⚖️ Live Mandi Computation
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              <div style={computationCard}>
                <span style={compLabel}>Net Weight</span>
                <div style={compValue}>{netWeight.toFixed(2)} Qtl</div>
              </div>
              <div style={computationCard}>
                <span style={compLabel}>Grain Amount</span>
                <div style={compValue}>₹ {grainAmount.toLocaleString('en-IN', {maximumFractionDigits: 2})}</div>
              </div>
              <div style={computationCard}>
                <span style={compLabel}>Deductions (Hamali/Comm)</span>
                <div style={{ ...compValue, color: '#DC2626' }}>- ₹ 0.00</div>
              </div>
              <div style={{ ...computationCard, background: '#1B4D3E', color: '#FFF' }}>
                <span style={{ ...compLabel, color: '#A7F3D0' }}>Net Payable to Farmer</span>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#FFF' }}>₹ {netPayable.toLocaleString('en-IN', {maximumFractionDigits: 2})}</div>
              </div>
            </div>
          </div>

          {/* Action Buttons Bottom */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
            <button onClick={() => setFormData({ purchaseDate: '02-09-2026', farmerName: '', village: '', commodity: 'Wheat (Gehun)', bags: '', grossWeight: '', tareWeight: '', bardana: '', rate: '' })} style={cancelBtnStyle}>Cancel</button>
            <button onClick={handlePrintBill} style={printBtnStyle}>Save & Print Bill</button>
            <button onClick={handleWhatsApp} style={whatsappBtnStyle}>Save & Share via WhatsApp</button>
          </div>

        </div>

      </div>

    </div>
  );
}

// --- STYLES ---
const labelStyle = { display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' };
const inputStyle = { width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1.5px solid #CBD5E1', fontSize: '14px', outline: 'none', boxSizing: 'border-box' };
const draftBtnStyle = { background: '#166534', color: '#FFF', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: '700', fontSize: '13px', cursor: 'pointer' };
const computationCard = { background: '#FFF', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0', textAlign: 'center' };
const compLabel = { display: 'block', fontSize: '11px', color: '#64748B', fontWeight: '600', marginBottom: '4px' };
const compValue = { fontSize: '16px', fontWeight: '700', color: '#0F172A' };
const cancelBtnStyle = { background: '#64748B', color: '#FFF', border: 'none', padding: '12px 20px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', cursor: 'pointer' };
const printBtnStyle = { background: '#166534', color: '#FFF', border: 'none', padding: '12px 20px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', cursor: 'pointer' };
const whatsappBtnStyle = { background: '#065F46', color: '#FFF', border: 'none', padding: '12px 20px', borderRadius: '8px', fontWeight: '700', fontSize: '14px', cursor: 'pointer' };