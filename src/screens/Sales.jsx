import React, { useState } from 'react';
import '../styles/theme.css';

export default function Sales() {
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');
  const [freight, setFreight] = useState('');
  const [deductions, setDeductions] = useState('');

  // Sales automatic calculation formula as per specification
  const saleAmount = (Number(quantity) * Number(rate)).toFixed(2);
  const finalSaleAmount = (Number(saleAmount) + Number(freight) - Number(deductions)).toFixed(2);

  return (
    <div className="form-container">
      <h2>New Company Sale Entry</h2>
      <form>
        <div className="input-group">
          <label>Sale Date</label>
          <input type="date" defaultValue="2026-08-29" />
        </div>

        <div className="input-group">
          <label>Company / Party</label>
          <select>
            <option>Select Party</option>
            <option>ABC Foods Pvt. Ltd.</option>
            <option>XYZ Traders</option>
          </select>
        </div>

        <div className="row">
          <div className="input-group">
            <label>Quantity / Weight (Qtl)</label>
            <input 
              type="number" 
              placeholder="125" 
              value={quantity} 
              onChange={(e) => setQuantity(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label>Rate per Quintal (₹)</label>
            <input 
              type="number" 
              placeholder="2650" 
              value={rate} 
              onChange={(e) => setRate(e.target.value)} 
            />
          </div>
        </div>

        <div className="row">
          <div className="input-group">
            <label>Freight (₹)</label>
            <input 
              type="number" 
              placeholder="8000" 
              value={freight} 
              onChange={(e) => setFreight(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label>Other Deductions (₹)</label>
            <input 
              type="number" 
              placeholder="2500" 
              value={deductions} 
              onChange={(e) => setDeductions(e.target.value)} 
            />
          </div>
        </div>

        <div className="input-group">
          <label>Final Sale Amount (₹)</label>
          <input type="text" value={finalSaleAmount} readOnly className="auto-calc" />
        </div>

        <div className="action-footer">
          <button type="button" className="btn-save">GENERATE INVOICE</button>
          <button type="button" className="btn-share">SHARE ON WHATSAPP</button>
        </div>
      </form>
    </div>
  );
}