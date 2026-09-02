import React, { useState } from 'react';
import '../styles/theme.css';

export default function StockAndInventory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // Initial Stock Data
  const [stockList, setStockList] = useState([
    { id: 1, name: 'Lokwan Wheat (Grade A)', bags: '450 Bags stored', category: 'Wheat / Gehun', qty: '450.00 Qtl', rate: '₹ 2,650 / Qtl', value: '₹ 11,92,500', godown: 'Godown No. 1' },
    { id: 2, name: 'Sharbati Wheat', bags: '280 Bags stored', category: 'Wheat / Gehun', qty: '280.50 Qtl', rate: '₹ 3,400 / Qtl', value: '₹ 9,53,700', godown: 'Godown No. 2' },
    { id: 3, name: 'Basmati Rice (1121)', bags: '310 Bags stored', category: 'Rice / Chawal', qty: '310.00 Qtl', rate: '₹ 4,800 / Qtl', value: '₹ 14,88,000', godown: 'Godown No. 1' },
    { id: 4, name: 'Mandhya / Yellow Maize', bags: '204 Bags stored', category: 'Maize / Makka', qty: '204.00 Qtl', rate: '₹ 2,150 / Qtl', value: '₹ 4,38,600', godown: 'Godown No. 3' }
  ]);

  // Form State for New Stock Modal
  const [newStock, setNewStock] = useState({
    name: '',
    category: 'Wheat / Gehun',
    qty: '',
    rate: '',
    bags: '',
    godown: 'Godown No. 1'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStock(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveStock = (e) => {
    e.preventDefault();
    if (!newStock.name || !newStock.qty || !newStock.rate) {
      alert('Please enter grain name, quantity, and rate.');
      return;
    }

    const calculatedValue = (parseFloat(newStock.qty) * parseFloat(newStock.rate)) || 0;

    const createdItem = {
      id: Date.now(),
      name: newStock.name,
      bags: (newStock.bags ? newStock.bags : '100') + ' Bags stored',
      category: newStock.category,
      qty: parseFloat(newStock.qty).toFixed(2) + ' Qtl',
      rate: '₹ ' + Number(newStock.rate).toLocaleString('en-IN') + ' / Qtl',
      value: '₹ ' + calculatedValue.toLocaleString('en-IN'),
      godown: newStock.godown
    };

    setStockList(prev => [createdItem, ...prev]);
    setShowAddModal(false);
    setNewStock({ name: '', category: 'Wheat / Gehun', qty: '', rate: '', bags: '', godown: 'Godown No. 1' });
  };

  const filteredStock = stockList.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '30px', fontFamily: "'Poppins', 'Segoe UI', sans-serif", background: '#F8FAFC', minHeight: '100vh' }}>
      
      {/* Header Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h2 style={{ color: '#0F271D', margin: 0, fontSize: '26px', fontWeight: '700' }}>Stock & Inventory Management</h2>
          <p style={{ color: '#64748B', margin: '4px 0 0 0', fontSize: '14px' }}>Real-time grain stock, bag counts, and godown valuation.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)} 
          style={addBtnStyle}>
          + Add Stock Batch
        </button>
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '24px' }}>
        <div style={summaryCard}>
          <span style={summaryLabel}>Total Available Quantity</span>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#0F172A', marginTop: '6px' }}>1,244.50 Qtl</div>
        </div>
        <div style={summaryCard}>
          <span style={summaryLabel}>Total Inventory Valuation</span>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#16A34A', marginTop: '6px' }}>₹ 40,72,800</div>
        </div>
        <div style={summaryCard}>
          <span style={summaryLabel}>Active Godowns</span>
          <div style={{ fontSize: '24px', fontWeight: '700', color: '#2563EB', marginTop: '6px' }}>3 Warehouses</div>
        </div>
      </div>

      {/* Search Input */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search by grain name or category..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInputStyle}
        />
      </div>

      {/* Table Structure */}
      <div style={tableContainerStyle}>
        <div style={tableHeaderRow}>
          <div style={{ flex: 1.5 }}>Commodity Name</div>
          <div style={{ flex: 1 }}>Category</div>
          <div style={{ flex: 1 }}>Total Qty</div>
          <div style={{ flex: 1 }}>Avg Rate</div>
          <div style={{ flex: 1 }}>Total Value</div>
          <div style={{ flex: 1, textAlign: 'right' }}>Godown</div>
        </div>

        {filteredStock.map((item) => (
          <div key={item.id} style={tableRow}>
            <div style={{ flex: 1.5, display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={iconBox}>🌾</div>
              <div>
                <div style={{ fontWeight: '700', color: '#0F172A', fontSize: '14px' }}>{item.name}</div>
                <div style={{ fontSize: '12px', color: '#64748B' }}>{item.bags}</div>
              </div>
            </div>
            <div style={{ flex: 1, fontSize: '14px', color: '#334155' }}>{item.category}</div>
            <div style={{ flex: 1, fontWeight: '700', fontSize: '14px', color: '#0F172A' }}>{item.qty}</div>
            <div style={{ flex: 1, fontSize: '14px', color: '#059669', fontWeight: '600' }}>{item.rate}</div>
            <div style={{ flex: 1, fontWeight: '700', fontSize: '14px', color: '#0F172A' }}>{item.value}</div>
            <div style={{ flex: 1, textAlign: 'right' }}>
              <span style={godownTag}>{item.godown}</span>
            </div>
          </div>
        ))}
      </div>

      {/* --- ADD STOCK MODAL POPUP --- */}
      {showAddModal && (
        <div style={overlayStyle}>
          <div style={modalCardStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, color: '#1B4D3E', fontSize: '20px', fontWeight: '700' }}>Add New Stock Batch</h3>
              <span onClick={() => setShowAddModal(false)} style={{ cursor: 'pointer', fontSize: '20px', color: '#94A3B8' }}>✕</span>
            </div>

            <form onSubmit={handleSaveStock} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={modalLabel}>Grain / Commodity Name</label>
                <input type="text" name="name" value={newStock.name} onChange={handleInputChange} placeholder="e.g. Lokwan Wheat" style={modalInput} required />
              </div>

              <div>
                <label style={modalLabel}>Category</label>
                <select name="category" value={newStock.category} onChange={handleInputChange} style={modalInput}>
                  <option value="Wheat / Gehun">Wheat / Gehun</option>
                  <option value="Rice / Chawal">Rice / Chawal</option>
                  <option value="Maize / Makka">Maize / Makka</option>
                  <option value="Pulses / Dal">Pulses / Dal</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                  <label style={modalLabel}>Quantity (Qtl)</label>
                  <input type="number" step="0.01" name="qty" value={newStock.qty} onChange={handleInputChange} placeholder="e.g. 150" style={modalInput} required />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={modalLabel}>Rate per Qtl (₹)</label>
                  <input type="number" name="rate" value={newStock.rate} onChange={handleInputChange} placeholder="e.g. 2700" style={modalInput} required />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                  <label style={modalLabel}>Bag Count</label>
                  <input type="number" name="bags" value={newStock.bags} onChange={handleInputChange} placeholder="e.g. 150" style={modalInput} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={modalLabel}>Godown Location</label>
                  <select name="godown" value={newStock.godown} onChange={handleInputChange} style={modalInput}>
                    <option value="Godown No. 1">Godown No. 1</option>
                    <option value="Godown No. 2">Godown No. 2</option>
                    <option value="Godown No. 3">Godown No. 3</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <button type="button" onClick={() => setShowAddModal(false)} style={cancelBtn}>Cancel</button>
                <button type="submit" style={saveBtn}>Save Stock Batch</button>
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
const summaryCard = { background: '#FFF', padding: '20px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' };
const summaryLabel = { display: 'block', fontSize: '12px', color: '#64748B', fontWeight: '600', textTransform: 'uppercase' };
const searchInputStyle = { width: '100%', padding: '14px 18px', borderRadius: '12px', border: '1.5px solid #E2E8F0', background: '#FFF', fontSize: '14px', outline: 'none', boxSizing: 'border-box' };
const tableContainerStyle = { background: '#FFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' };
const tableHeaderRow = { display: 'flex', padding: '14px 20px', background: '#F1F5F9', borderBottom: '1px solid #E2E8F0', fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase' };
const tableRow = { display: 'flex', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #F1F5F9' };
const iconBox = { width: '36px', height: '36px', background: '#ECFDF5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' };
const godownTag = { background: '#F1F5F9', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', color: '#334155' };

const overlayStyle = { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 };
const modalCardStyle = { background: '#FFF', padding: '28px', borderRadius: '20px', width: '440px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', border: '1px solid #E2E8F0' };
const modalLabel = { display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' };
const modalInput = { width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #CBD5E1', fontSize: '14px', outline: 'none', boxSizing: 'border-box' };
const cancelBtn = { flex: 1, padding: '12px', background: '#F1F5F9', border: 'none', borderRadius: '10px', fontWeight: '600', color: '#64748B', cursor: 'pointer' };
const saveBtn = { flex: 1, padding: '12px', background: '#1B4D3E', border: 'none', borderRadius: '10px', fontWeight: '700', color: '#FFF', cursor: 'pointer' };