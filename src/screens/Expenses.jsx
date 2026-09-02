import React, { useState } from 'react';
import '../styles/theme.css';

export default function Expenses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  
  const [expensesList, setExpensesList] = useState([
    { id: 1, title: 'Electricity Bill (Godown 1)', category: 'Utilities', amount: '₹ 4,500', date: '01-09-2026', paidTo: 'MP Electricity Board' },
    { id: 2, title: 'Labour Hamali Charges', category: 'Operations', amount: '₹ 12,000', date: '31-08-2026', paidTo: 'Local Labour Union' },
    { id: 3, title: 'Truck Freight & Transport', category: 'Logistics', amount: '₹ 8,500', date: '30-08-2026', paidTo: 'Shree Ji Transport' }
  ]);

  const [newExpense, setNewExpense] = useState({ title: '', category: 'Utilities', amount: '', paidTo: '' });

  const handleSave = (e) => {
    e.preventDefault();
    if (!newExpense.title || !newExpense.amount) {
      alert('Please enter title and amount');
      return;
    }

    const item = {
      id: Date.now(),
      title: newExpense.title,
      category: newExpense.category,
      amount: '₹ ' + Number(newExpense.amount).toLocaleString('en-IN'),
      date: new Date().toLocaleDateString('en-GB'),
      paidTo: newExpense.paidTo || 'Self'
    };

    setExpensesList([item, ...expensesList]);
    setShowModal(false);
    setNewExpense({ title: '', category: 'Utilities', amount: '', paidTo: '' });
  };

  const filtered = expensesList.filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase()) || e.category.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ padding: '30px', fontFamily: "'Poppins', sans-serif", background: '#F8FAFC', minHeight: '100vh', boxSizing: 'border-box' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h2 style={{ color: '#0F271D', margin: 0, fontSize: '26px', fontWeight: '700' }}>Expenses & Utilities</h2>
          <p style={{ color: '#64748B', margin: '4px 0 0 0', fontSize: '14px' }}>Manage operational expenses, utility bills, and transport costs.</p>
        </div>
        <button onClick={() => setShowModal(true)} style={addBtn}>+ Add Expense</button>
      </div>

      {/* Search */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search expense by title or category..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          style={searchInput} 
        />
      </div>

      {/* Table / List */}
      <div style={tableContainer}>
        <div style={tableHeader}>
          <div style={{ flex: 1.5 }}>Expense Title</div>
          <div style={{ flex: 1 }}>Category</div>
          <div style={{ flex: 1 }}>Paid To</div>
          <div style={{ flex: 1 }}>Date</div>
          <div style={{ flex: 1, textAlign: 'right' }}>Amount</div>
        </div>

        {filtered.map(item => (
          <div key={item.id} style={tableRow}>
            <div style={{ flex: 1.5, fontWeight: '600', color: '#0F172A' }}>{item.title}</div>
            <div style={{ flex: 1 }}><span style={badge}>{item.category}</span></div>
            <div style={{ flex: 1, color: '#475569', fontSize: '13px' }}>{item.paidTo}</div>
            <div style={{ flex: 1, color: '#64748B', fontSize: '13px' }}>{item.date}</div>
            <div style={{ flex: 1, textAlign: 'right', fontWeight: '700', color: '#DC2626' }}>{item.amount}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div style={overlay}>
          <div style={modalCard}>
            <h3 style={{ margin: '0 0 16px 0', color: '#1B4D3E', fontSize: '18px', fontWeight: '700' }}>Add New Expense</h3>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={lbl}>Expense Title</label>
                <input type="text" value={newExpense.title} onChange={e => setNewExpense({...newExpense, title: e.target.value})} placeholder="e.g. Godown Maintenance" style={inp} required />
              </div>
              <div>
                <label style={lbl}>Category</label>
                <select value={newExpense.category} onChange={e => setNewExpense({...newExpense, category: e.target.value})} style={inp}>
                  <option value="Utilities">Utilities</option>
                  <option value="Operations">Operations</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>
              <div>
                <label style={lbl}>Amount (₹)</label>
                <input type="number" value={newExpense.amount} onChange={e => setNewExpense({...newExpense, amount: e.target.value})} placeholder="e.g. 5000" style={inp} required />
              </div>
              <div>
                <label style={lbl}>Paid To</label>
                <input type="text" value={newExpense.paidTo} onChange={e => setNewExpense({...newExpense, paidTo: e.target.value})} placeholder="e.g. Vendor Name" style={inp} />
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button type="button" onClick={() => setShowModal(false)} style={cancelBtn}>Cancel</button>
                <button type="submit" style={saveBtn}>Save Expense</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

// Styles
const addBtn = { background: '#1B4D3E', color: '#FFF', border: 'none', padding: '12px 20px', borderRadius: '10px', fontWeight: '700', fontSize: '14px', cursor: 'pointer' };
const searchInput = { width: '100%', padding: '14px 18px', borderRadius: '12px', border: '1.5px solid #E2E8F0', background: '#FFF', fontSize: '14px', outline: 'none', boxSizing: 'border-box' };
const tableContainer = { background: '#FFF', borderRadius: '16px', border: '1px solid #E2E8F0', overflow: 'hidden' };
const tableHeader = { display: 'flex', padding: '14px 20px', background: '#F1F5F9', borderBottom: '1px solid #E2E8F0', fontSize: '12px', fontWeight: '700', color: '#475569', textTransform: 'uppercase' };
const tableRow = { display: 'flex', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #F1F5F9', fontSize: '14px' };
const badge = { background: '#F1F5F9', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', color: '#334155' };
const overlay = { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(15, 23, 42, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 };
const modalCard = { background: '#FFF', padding: '28px', borderRadius: '20px', width: '400px', boxShadow: '0 20px 25px rgba(0,0,0,0.1)' };
const lbl = { display: 'block', fontSize: '12px', fontWeight: '600', color: '#475569', marginBottom: '6px' };
const inp = { width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #CBD5E1', fontSize: '14px', outline: 'none', boxSizing: 'border-box' };
const cancelBtn = { flex: 1, padding: '12px', background: '#F1F5F9', border: 'none', borderRadius: '10px', fontWeight: '600', color: '#64748B', cursor: 'pointer' };
const saveBtn = { flex: 1, padding: '12px', background: '#1B4D3E', border: 'none', borderRadius: '10px', fontWeight: '700', color: '#FFF', cursor: 'pointer' };