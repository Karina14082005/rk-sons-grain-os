import React, { useState } from 'react';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Transactions from './screens/Transactions';
import Stock from './screens/Stock';
import Reports from './screens/Reports';
import NewPurchase from './screens/NewPurchase';
import NewSale from './screens/NewSale';
import Payment from './screens/Payment';
import Expenses from './screens/Expenses';
import Farmers from './screens/Farmers';

import './styles/theme.css';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('dashboard');

  if (activeScreen === 'login') {
    return <Login onLoginSuccess={() => setActiveScreen('dashboard')} />;
  }

  return (
    <div style={appContainerStyle}>
      
      {/* FIXED LEFT SIDEBAR */}

      <div style={sidebarStyle}>
        <div>
          <div style={logoContainerStyle}>
            <span style={{ fontSize: '22px' }}>🌾</span>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '15px', color: '#FFF' }}>RK SONS</div>
              <div style={{ fontSize: '10px', color: '#A0AEC0' }}>Grain Enterprise OS</div>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div style={navSectionTitle}>MAIN MENU</div>
            <div onClick={() => setActiveScreen('farmers')} style={getNavItemStyle(activeScreen === 'farmers')}>
              <span>👨‍🌾</span> Farmer Management
            </div>
            <div onClick={() => setActiveScreen('dashboard')} style={getNavItemStyle(activeScreen === 'dashboard')}>
              <span>📊</span> Dashboard Overview
            </div>
            <div onClick={() => setActiveScreen('transactions')} style={getNavItemStyle(activeScreen === 'transactions')}>
              <span>📑</span> Transactions & Parties
            </div>
            <div onClick={() => setActiveScreen('stock')} style={getNavItemStyle(activeScreen === 'stock')}>
              <span>📦</span> Stock & Inventory
            </div>
            <div onClick={() => setActiveScreen('reports')} style={getNavItemStyle(activeScreen === 'reports')}>
              <span>📈</span> Reports & Profit
            </div>

            <div style={{ ...navSectionTitle, marginTop: '20px' }}>ACTIONS</div>

            <div onClick={() => setActiveScreen('newSale')} style={getNavItemStyle(activeScreen === 'newSale')}>
              <span>🛒</span> New Sale Entry
            </div>
            <div onClick={() => setActiveScreen('newPurchase')} style={getNavItemStyle(activeScreen === 'newPurchase')}>
              <span>📥</span> New Purchase Entry
            </div>
            <div onClick={() => setActiveScreen('payments')} style={getNavItemStyle(activeScreen === 'payments')}>
              <span>💰</span> Record Payment
            </div>
            <div onClick={() => setActiveScreen('expenses')} style={getNavItemStyle(activeScreen === 'expenses')}>
              <span>⚙️</span> Expenses & Utilities
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div style={sidebarFooterStyle}>
          <div style={{ background: '#2D3748', width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#FFF' }}>
            RK
          </div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#FFF' }}>RK Sons Admin</div>
            <div style={{ fontSize: '11px', color: '#A0AEC0' }}>Manager Mode</div>
          </div>
          <button 
            onClick={() => setActiveScreen('login')} 
            style={{ background: 'transparent', border: 'none', color: '#FC8181', cursor: 'pointer', fontSize: '16px' }}
            title="Logout"
          >
            ⏻
          </button>
        </div>
      </div>

      {/* EXPANDABLE MAIN WRAPPER */}
      <div style={mainWrapperStyle}>
        
        {/* TOP HEADER BAR */}
        <div style={topHeaderStyle}>
          <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#2D3748', textTransform: 'capitalize' }}>
            {activeScreen.replace(/([A-Z])/g, ' $1')}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ background: '#E6FFFA', color: '#234E52', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', border: '1px solid #B2F5EA' }}>
              🟢 System Status: Operational
            </div>
            <button 
              onClick={() => setActiveScreen('newSale')} 
              style={{ background: '#1B4D3E', color: '#FFF', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px' }}
            >
              + Quick Sale
            </button>
          </div>
        </div>

       
          {/* CONTENT VIEW AREA */}
        <div style={contentAreaStyle}>
          {activeScreen === 'farmers' && <Farmers />}
          {activeScreen === 'dashboard' && <Dashboard onNavigate={(screen) => setActiveScreen(screen)} />}
          {activeScreen === 'transactions' && <Transactions />}
          {activeScreen === 'stock' && <Stock />}
          {activeScreen === 'reports' && <Reports />}
          {activeScreen === 'newPurchase' && <NewPurchase />}
          {activeScreen === 'newSale' && <NewSale />}
          {activeScreen === 'payments' && <Payment />}
          {activeScreen === 'expenses' && <Expenses />}
        </div>

      </div>

    </div>
  );
}

const appContainerStyle = {
  display: 'flex',
  width: '100vw',
  height: '100vh',
  background: '#F4F7F6',
  fontFamily: 'Segoe UI, sans-serif',
  overflow: 'hidden',
  boxSizing: 'border-box'
};

const sidebarStyle = {
  width: '260px',
  minWidth: '260px',
  background: '#1A202C',
  color: '#A0AEC0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '20px 15px',
  height: '100vh',
  boxSizing: 'border-box'
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  paddingBottom: '20px',
  borderBottom: '1px solid #2D3748'
};

const navSectionTitle = {
  fontSize: '11px',
  fontWeight: 'bold',
  letterSpacing: '0.8px',
  color: '#718096',
  padding: '10px 10px 5px 10px'
};

const getNavItemStyle = (isActive) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '10px 12px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '13px',
  fontWeight: isActive ? 'bold' : 'normal',
  background: isActive ? '#1B4D3E' : 'transparent',
  color: isActive ? '#FFF' : '#CBD5E0',
  marginBottom: '4px'
});

const sidebarFooterStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  paddingTop: '15px',
  borderTop: '1px solid #2D3748'
};

const mainWrapperStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflow: 'hidden'
};

const topHeaderStyle = {
  height: '60px',
  minHeight: '60px',
  background: '#FFF',
  borderBottom: '1px solid #E2E8F0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 30px',
  boxSizing: 'border-box'
};

const contentAreaStyle = {
  flex: 1,
  padding: '24px 30px',
  overflowY: 'auto',
  boxSizing: 'border-box'
};