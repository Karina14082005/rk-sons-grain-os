import React, { useState } from 'react';
import '../styles/theme.css';

export default function Login({ onLoginSuccess }) {
  const [authMode, setAuthMode] = useState('login'); // 'login', 'signup', 'forgot', 'otp'
  const [formData, setFormData] = useState({
    mobile: '',
    password: '',
    name: '',
    confirmPassword: '',
    otp: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!formData.mobile || !formData.password) {
      setMessage('Please enter mobile number and password.');
      return;
    }
    onLoginSuccess();
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }
    alert('Account created successfully! Please login.');
    setAuthMode('login');
    setMessage('');
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!formData.mobile) {
      setMessage('Please enter your registered mobile number.');
      return;
    }
    alert('OTP sent successfully to ' + formData.mobile + ' (Use 1234)');
    setAuthMode('otp');
    setMessage('');
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (formData.otp === '1234') {
      alert('OTP verified! You can now login.');
      setAuthMode('login');
      setMessage('');
    } else {
      setMessage('Invalid OTP. Use 1234');
    }
  };

  return (
    <div style={pageStyle}>
      
      {/* LEFT PANE - RICH BRANDING & PATTERN */}
      <div style={leftPaneStyle}>
        <div style={absoluteGlowStyle}></div>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '460px' }}>
          
          <div style={badgeStyle}>
            <span>🌾 Enterprise Grade OS</span>
          </div>

          <h1 style={{ color: '#FFFFFF', fontSize: '42px', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            RK SONS <span style={{ color: '#34D399' }}>Grain ERP</span>
          </h1>
          
          <p style={{ color: '#E2E8F0', fontSize: '16px', margin: '0 0 36px 0', lineHeight: '1.6' }}>
            The ultimate next-gen platform to manage grain inventory, streamline farmer accounts, and monitor live trade execution seamlessly.
          </p>

          {/* Feature Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={featureItemStyle}>
              <span style={checkIconStyle}>✓</span> Real-time Stock & Inventory Tracking
            </div>
            <div style={featureItemStyle}>
              <span style={checkIconStyle}>✓</span> Automated Ledger & Payment Management
            </div>
            <div style={featureItemStyle}>
              <span style={checkIconStyle}>✓</span> Secure Cloud Infrastructure & Role Access
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT PANE - MODERN FLOATING CARD FORM */}
      <div style={rightPaneStyle}>
        <div style={cardWrapperStyle}>
          
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{ color: '#0F172A', margin: '0 0 8px 0', fontSize: '26px', fontWeight: '800', letterSpacing: '-0.5px' }}>
              {authMode === 'login' && 'Sign in to portal'}
              {authMode === 'signup' && 'Create enterprise account'}
              {authMode === 'forgot' && 'Reset your password'}
              {authMode === 'otp' && 'Verify security code'}
            </h2>
            <p style={{ color: '#64748B', margin: 0, fontSize: '14px' }}>
              {authMode === 'login' && 'Enter your credentials to access your dashboard.'}
              {authMode === 'signup' && 'Fill in your details to register as manager.'}
              {authMode === 'forgot' && 'We will send a verification code to your mobile.'}
              {authMode === 'otp' && 'Enter the 4-digit verification code sent via SMS.'}
            </p>
          </div>

          {message && <div style={errorStyle}>{message}</div>}

          {/* 1. LOGIN FORM */}
          {authMode === 'login' && (
            <form onSubmit={handleLoginSubmit} style={formStyle}>
              <div>
                <label style={labelStyle}>Mobile Number</label>
                <div style={inputGroupStyle}>
                  <span style={inputPrefixStyle}>📱</span>
                  <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter 10-digit mobile" style={inputStyle} required />
                </div>
              </div>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ ...labelStyle, marginBottom: 0 }}>Password</label>
                  <span style={linkStyle} onClick={() => { setAuthMode('forgot'); setMessage(''); }}>Forgot password?</span>
                </div>
                <div style={inputGroupStyle}>
                  <span style={inputPrefixStyle}>🔒</span>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" style={inputStyle} required />
                </div>
              </div>

              <button type="submit" style={primaryBtn}>Sign In to Dashboard</button>

              <div style={{ textAlign: 'center', fontSize: '13px', marginTop: '12px', color: '#64748B' }}>
                Don't have an account? <span style={{ ...linkStyle, fontWeight: '600' }} onClick={() => { setAuthMode('signup'); setMessage(''); }}>Create Account</span>
              </div>
            </form>
          )}

          {/* 2. SIGN UP FORM */}
          {authMode === 'signup' && (
            <form onSubmit={handleSignupSubmit} style={formStyle}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter full name" style={flatInputStyle} required />
              </div>
              <div>
                <label style={labelStyle}>Mobile Number</label>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter mobile number" style={flatInputStyle} required />
              </div>
              <div>
                <label style={labelStyle}>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Create password" style={flatInputStyle} required />
              </div>
              <div>
                <label style={labelStyle}>Confirm Password</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" style={flatInputStyle} required />
              </div>

              <button type="submit" style={primaryBtn}>Register Account</button>

              <div style={{ textAlign: 'center', fontSize: '13px', marginTop: '12px', color: '#64748B' }}>
                Already registered? <span style={{ ...linkStyle, fontWeight: '600' }} onClick={() => { setAuthMode('login'); setMessage(''); }}>Sign In</span>
              </div>
            </form>
          )}

          {/* 3. FORGOT PASSWORD */}
          {authMode === 'forgot' && (
            <form onSubmit={handleSendOtp} style={formStyle}>
              <div>
                <label style={labelStyle}>Registered Mobile Number</label>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter your mobile" style={flatInputStyle} required />
              </div>

              <button type="submit" style={primaryBtn}>Send Verification OTP</button>

              <div style={{ textAlign: 'center', fontSize: '13px', marginTop: '12px' }}>
                <span style={linkStyle} onClick={() => { setAuthMode('login'); setMessage(''); }}>← Back to Sign In</span>
              </div>
            </form>
          )}

          {/* 4. OTP VERIFICATION */}
          {authMode === 'otp' && (
            <form onSubmit={handleVerifyOtp} style={formStyle}>
              <div>
                <label style={labelStyle}>Enter 4-Digit Code</label>
                <input type="text" name="otp" value={formData.otp} onChange={handleChange} placeholder="1234" maxLength="4" style={{ ...flatInputStyle, textAlign: 'center', letterSpacing: '12px', fontSize: '20px', fontWeight: 'bold' }} required />
              </div>

              <button type="submit" style={primaryBtn}>Verify Code</button>

              <div style={{ textAlign: 'center', fontSize: '13px', marginTop: '12px' }}>
                <span style={linkStyle} onClick={() => { setAuthMode('login'); setMessage(''); }}>← Back to Sign In</span>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}

// --- PREMIUM UI STYLING CONSTANTS ---
const pageStyle = { display: 'flex', width: '100vw', height: '100vh', fontFamily: '"Inter", system-ui, sans-serif', overflow: 'hidden', background: '#0F172A' };

const leftPaneStyle = { flex: 1.1, background: 'linear-gradient(145deg, #064E3B 0%, #022C22 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' };

const absoluteGlowStyle = { position: 'absolute', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(52,211,153,0.15) 0%, rgba(0,0,0,0) 70%)', top: '-50px', left: '-50px', borderRadius: '50%', pointerEvents: 'none' };

const badgeStyle = { display: 'inline-flex', alignItems: 'center', background: 'rgba(52, 211, 153, 0.15)', color: '#34D399', padding: '6px 14px', borderRadius: '30px', fontSize: '13px', fontWeight: '600', marginBottom: '20px', border: '1px solid rgba(52, 211, 153, 0.3)' };

const featureItemStyle = { display: 'flex', alignItems: 'center', gap: '12px', color: '#CBD5E1', fontSize: '15px', fontWeight: '500' };

const checkIconStyle = { background: '#059669', color: '#FFF', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' };

const rightPaneStyle = { flex: 1, background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', boxSizing: 'border-box' };

const cardWrapperStyle = { width: '100%', maxWidth: '440px', background: '#FFFFFF', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)', border: '1px solid #E2E8F0' };

const formStyle = { display: 'flex', flexDirection: 'column', gap: '20px' };

const labelStyle = { display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '8px' };

const inputGroupStyle = { display: 'flex', alignItems: 'center', background: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '12px', overflow: 'hidden', transition: 'all 0.2s' };

const inputPrefixStyle = { padding: '0 14px', fontSize: '16px', color: '#64748B' };

const inputStyle = { width: '100%', padding: '14px 14px 14px 0', border: 'none', background: 'transparent', fontSize: '15px', color: '#0F172A', outline: 'none' };

const flatInputStyle = { width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #CBD5E1', background: '#F8FAFC', fontSize: '15px', color: '#0F172A', outline: 'none', boxSizing: 'border-box' };

const primaryBtn = { background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', color: '#FFF', border: 'none', padding: '15px', borderRadius: '12px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', width: '100%', marginTop: '8px', boxShadow: '0 10px 15px -3px rgba(5, 150, 105, 0.3)', transition: 'transform 0.1s ease' };

const linkStyle = { color: '#059669', cursor: 'pointer', fontSize: '13px', fontWeight: '600', textDecoration: 'none' };

const errorStyle = { background: '#FEF2F2', color: '#B91C1C', padding: '12px 16px', borderRadius: '10px', fontSize: '13px', marginBottom: '20px', border: '1px solid #FCA5A5', fontWeight: '500' };