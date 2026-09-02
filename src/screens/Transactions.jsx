import React, { useState } from 'react';
import '../styles/theme.css';

export default function Transactions() {
  const [activeTab, setActiveTab] = useState('farmers'); // 'farmers' or 'parties'
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // Initial Farmers Data
  const [farmers, setFarmers] = useState([
    { id: 1, name: 'Ramesh Patel', village: 'Rau', totalPurchase: '₹ 18,50,000', amountPaid: '₹ 15,00,000', outstanding: '₹ 3,50,000' },
    { id: 2, name: 'Suresh Yadav', village: 'Betma', totalPurchase: '₹ 9,20,000', amountPaid: '₹ 9,20,000', outstanding: '₹ 0' },
    { id: 3, name: 'Mohan Verma', village: 'Depalpur', totalPurchase: '₹ 12,80,000', amountPaid: '₹ 10,00,000', outstanding: '₹ 2,80,000' }
  ]);

  // Form State for New Party Modal
  const [newParty, setNewParty] = useState({
    name: '',
    village: '',
    phone: '',
    partyType: 'farmers'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewParty(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveParty = (e) => {
    e.preventDefault();
    if (!newParty.name) {
      alert('Please enter party name');
      return;
    }

    const createdParty = {
      id: Date.now(),
      name: newParty.name,
      village: newParty.village || 'N/A',
      totalPurchase: '₹ 0',
      amountPaid: '₹ 0',
      outstanding: '₹ 0'
    };

    setFarmers(prev => [createdParty, ...prev]);
    setShowAddModal(false);
    setNewParty({ name: '', village: '', phone: '', partyType: 'farmers' });
  };

  const filteredFarmers = farmers.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.village.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '30px', fontFamily: "'Poppins', 'Segoe UI', sans-serif", background: '#F8FAFC', minHeight: '100vh' }}>
      
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h2 style={{ color: '#0F271D', margin: 0, fontSize: '26px', fontWeight: '700' }}>Transactions & Parties Ledger</h2>
          <p style={{ color: '#64748B', margin: '4px 0 0 0', fontSize: '14px' }}>Manage farmer accounts, grain buyers, and financial ledgers.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)} 
          style={addBtnStyle}>
          + Add New Party
        </button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button 
          onClick={() => setActiveTab('farmers')} 
          style={{ ...tabBtnStyle, background: activeTab === 'farmers' ? '#1B4D3E' : '#E2E8F0', color: activeTab === 'farmers' ? '#FFF' : '#475569' }}>
          🌾 Farmers Accounts
        </button>
        <button 
          onClick={() => setActiveTab('parties')} 
          style={{ ...tabBtnStyle, background: activeTab === 'parties' ? '#1B4D3E' : '#E2E8F0', color: activeTab === 'parties' ? '#FFF' : '#475569' }}>
          🏢 Parties / Companies
        </button>
      </div>

      {/* Search Input */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search farmer name or village..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInputStyle}
        />
      </div>

      {/* List / Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredFarmers.map((farmer) => {
          const initials = farmer.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
          return (
            <div key={farmer.id} style={cardStyle}>
              
              {/* Profile Avatar & Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1.2 }}>
                <div style={avatarStyle}>{initials}</div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', color: '#0F172A', fontWeight: '700' }}>{farmer.name}</h4>
                  <span style={{ fontSize: '13px', color: '#64748B' }}>Village: {farmer.village}</span>
                </div>
              </div>

              {/* Financial Metrics */}
              <div style={{ display: 'flex', gap: '30px', flex: 2, justifyContent: 'space-around' }}>
                <div>
                  <span style={metricLabel}>Total Purchase</span>
                  <div style={{ fontWeight: '700', fontSize: '15px', color: '#1E293B' }}>{farmer.totalPurchase}</div>
                </div>

                <div>
                  <span style={metricLabel}>Amount Paid</span>
                  <div style={{ fontWeight: '700', fontSize: '15px', color: '#16A34A' }}>{farmer.amountPaid}</div>
                </div>

                <div>
                  <span style={metricLabel}>Outstanding</span>
                  <div style={{ fontWeight: '700', fontSize: '15px', color: farmer.outstanding === '₹ 0' ? '#16A34A' : '#DC2626' }}>{farmer.outstanding}</div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button style={actionBtnStyle}>View Ledger</button>
              </div>

            </div>
          );
        })}
      </div>

      {/* --- ADD NEW PARTY MODAL POPUP --- */}
      {showAddModal && (
        <div style={overlayStyle}>
          <div style={modalCardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, color: '#1B4D3E', fontSize: '20px', fontWeight: '700' }}>Add New Party / Farmer</h3>
              <span onClick={() => setShowAddModal(false)} style={{ cursor: 'pointer', fontSize: '20px', color: '#94A3B8' }}>✕</span>
            </div>

            <form onSubmit={handleSaveParty} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={modalLabel}>Party Category</label>
                <select name="partyType" value={newParty.partyType} onChange={handleInputChange} style={modalInput}>
                  <option value="farmers">Farmer (Kisan)</option>
                  <option value="parties">Trader / Company</option>
                </select>
              </div>

              <div>
                <label style={modalLabel}>Full Name</label>
                <input type="text" name="name" value={newParty.name} onChange={handleInputChange} placeholder="e.g. Ramesh Patel" style={modalInput} required />
              </div>

              <div>
                <label style={modalLabel}>Village / Location</label>
                <input type="text" name="village" value={newParty.village} onChange={handleInputChange} placeholder="e.g. Rau, Indore" style={modalInput} />
              </div>

              <div>
                <label style={modalLabel}>Phone Number</label>
                <input type="text" name="phone" value={newParty.phone} onChange={handleInputChange} placeholder="e.g. 9876543210" style={modalInput} />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <button type="button" onClick={() => setShowAddModal(false)} style={cancelBtn}>Cancel</button>
                <button type="submit" style={saveBtn}>Save Party</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

// --- STYLES ---
const addBtnStyle = { background: '#1B4D3E', color: '#FFF', border: 'none', padding: '12px 20px', borderRadius: '10px', fontWeight: '700', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(27,77,62,0.2)' };
const tabBtnStyle = { padding: '10px 18px', border: 'none', borderRadius: '10px', fontWeight: '600', fontSize: '14px', cursor: 'pointer' };
const searchInputStyle = { width: '100%', padding: '14px 18px', borderRadius: '12px', border: '1.5px solid #E2E8F0', background: '#FFF', fontSize: '14px', outline: 'none', boxSizing: 'border-box' };
const cardStyle = { background: '#FFF', padding: '18px 24px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' };
const avatarStyle = { width: '44px', height: '44px', background: '#1B4D3E', color: '#FFF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '15px' };
const metricLabel = { display: 'block', fontSize: '11px', color: '#94A3B8', fontWeight: '600', textTransform: 'uppercase', marginBottom: '2px' };
const actionBtnStyle = { background: '#F1F5F9', border: 'none', padding: '10px 16px', borderRadius: '8px', color: '#334155', fontWeight: '600', fontSize: '13px', cursor: 'pointer' };

const overlayStyle = { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 };
const modalCardStyle = { background: '#FFF', padding: '28px', borderRadius: '20px', width: '420px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', border: '1px solid #E2E8F0' };
const modalLabel = { display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' };
const modalInput = { width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #CBD5E1', fontSize: '14px', outline: 'none', boxSizing: 'border-box' };
const cancelBtn = { flex: 1, padding: '12px', background: '#F1F5F9', border: 'none', borderRadius: '10px', fontWeight: '600', color: '#64748B', cursor: 'pointer' };
const saveBtn = { flex: 1, padding: '12px', background: '#1B4D3E', border: 'none', borderRadius: '10px', fontWeight: '700', color: '#FFF', cursor: 'pointer' };