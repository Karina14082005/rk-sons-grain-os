import React, { useState } from 'react';
import '../styles/theme.css';

export default function Farmers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [farmersData, setFarmersData] = useState([
    { name: 'Ramesh Patel', village: 'Rau', mobile: '+91 98260-12345', land: '15 Acres', totalCrop: '45 Qtl', status: 'Active' },
    { name: 'Suresh Yadav', village: 'Betma', mobile: '+91 97540-98765', land: '10 Acres', totalCrop: '28 Qtl', status: 'Active' },
    { name: 'Mohan Verma', village: 'Depalpur', mobile: '+91 94250-55443', land: '22 Acres', totalCrop: '60 Qtl', status: 'Active' }
  ]);

  const [newFarmer, setNewFarmer] = useState({
    name: '', village: '', mobile: '', land: '', totalCrop: '0 Qtl', status: 'Active'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFarmer(prev => ({ ...prev, [name]: value }));
  };

  const handleAddFarmer = (e) => {
    e.preventDefault();
    if (!newFarmer.name || !newFarmer.village) return;
    setFarmersData([newFarmer, ...farmersData]);
    setNewFarmer({ name: '', village: '', mobile: '', land: '', totalCrop: '0 Qtl', status: 'Active' });
    setShowModal(false);
  };

  const filteredFarmers = farmersData.filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.village.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif', position: 'relative' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ color: '#1B4D3E', margin: 0, fontSize: '22px' }}>Farmer Management Directory</h2>
          <p style={{ color: '#718096', fontSize: '13px', margin: '4px 0 0 0' }}>Manage registered farmers, village details, land size, and crop records.</p>
        </div>
        <button onClick={() => setShowModal(true)} style={primaryBtn}>+ Register New Farmer</button>
      </div>

      {/* Search Input */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search by farmer name or village..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={searchInputStyle}
        />
      </div>

      {/* Farmers Table Container */}
      <div style={{ background: '#FFF', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        
        <div style={tableHeaderStyle}>
          <span style={{ flex: 2, fontWeight: 'bold' }}>Farmer Name & Village</span>
          <span style={{ flex: 1.2, fontWeight: 'bold' }}>Mobile Number</span>
          <span style={{ flex: 1, fontWeight: 'bold' }}>Land Area</span>
          <span style={{ flex: 1, fontWeight: 'bold' }}>Total Supplied</span>
          <span style={{ flex: 1, fontWeight: 'bold' }}>Status</span>
        </div>

        {filteredFarmers.map((item, index) => (
          <div key={index} style={tableRowStyle}>
            <div style={{ flex: 2, display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={avatarStyle}>{item.name[0]}</div>
              <div>
                <div style={{ fontWeight: 'bold', color: '#2D3748', fontSize: '14px' }}>{item.name}</div>
                <div style={{ fontSize: '11px', color: '#718096' }}>Village: {item.village}</div>
              </div>
            </div>
            <div style={{ flex: 1.2, fontSize: '13px', color: '#4A5568' }}>{item.mobile}</div>
            <div style={{ flex: 1, fontSize: '13px', fontWeight: 'bold', color: '#2B6CB0' }}>{item.land}</div>
            <div style={{ flex: 1, fontSize: '13px', fontWeight: 'bold', color: '#27AE60' }}>{item.totalCrop}</div>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '11px', background: '#C6F6D5', color: '#22543D', padding: '4px 10px', borderRadius: '6px', fontWeight: '600' }}>
                {item.status}
              </span>
            </div>
          </div>
        ))}

      </div>

      {/* Modal Popup for Registering Farmer */}
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, color: '#1B4D3E', fontSize: '18px' }}>Register New Farmer</h3>
              <button onClick={() => setShowModal(false)} style={closeBtnStyle}>✕</button>
            </div>

            <form onSubmit={handleAddFarmer} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={labelStyle}>Farmer Full Name</label>
                <input type="text" name="name" value={newFarmer.name} onChange={handleInputChange} required style={inputStyle} placeholder="e.g. Rajesh Kumar" />
              </div>
              <div>
                <label style={labelStyle}>Village Name</label>
                <input type="text" name="village" value={newFarmer.village} onChange={handleInputChange} required style={inputStyle} placeholder="e.g. Rau" />
              </div>
              <div>
                <label style={labelStyle}>Mobile Number</label>
                <input type="text" name="mobile" value={newFarmer.mobile} onChange={handleInputChange} style={inputStyle} placeholder="+91 98765-43210" />
              </div>
              <div>
                <label style={labelStyle}>Land Area</label>
                <input type="text" name="land" value={newFarmer.land} onChange={handleInputChange} style={inputStyle} placeholder="e.g. 12 Acres" />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button type="button" onClick={() => setShowModal(false)} style={cancelBtnStyle}>Cancel</button>
                <button type="submit" style={submitBtnStyle}>Save Farmer</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

const primaryBtn = { background: '#1B4D3E', color: '#FFF', border: 'none', padding: '10px 18px', borderRadius: '8px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' };
const searchInputStyle = { width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #CBD5E0', background: '#FFF', fontSize: '14px', boxSizing: 'border-box', outline: 'none' };
const tableHeaderStyle = { display: 'flex', padding: '14px 20px', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', fontSize: '12px', color: '#718096', textTransform: 'uppercase', letterSpacing: '0.5px' };
const tableRowStyle = { display: 'flex', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #EDF2F7', background: '#FFF' };
const avatarStyle = { width: '38px', height: '38px', borderRadius: '50%', background: '#1B4D3E', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px' };

const modalOverlayStyle = { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 };
const modalContentStyle = { background: '#FFF', padding: '25px', borderRadius: '12px', width: '400px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' };
const closeBtnStyle = { background: 'transparent', border: 'none', fontSize: '16px', cursor: 'pointer', color: '#718096' };
const labelStyle = { display: 'block', fontSize: '12px', fontWeight: '600', color: '#4A5568', marginBottom: '6px' };
const inputStyle = { width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #CBD5E0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' };
const cancelBtnStyle = { flex: 1, padding: '10px', background: '#EDF2F7', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', color: '#4A5568' };
const submitBtnStyle = { flex: 1, padding: '10px', background: '#1B4D3E', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', color: '#FFF' };