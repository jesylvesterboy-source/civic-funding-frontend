import { useState, useEffect } from 'react';

export default function CivicFundingDashboard() {
  const [initiatives, setInitiatives] = useState([]);

  useEffect(() => {
    // Demo data
    setInitiatives([
      {name: 'Urban Renewal Program', budget: 1500000, region: 'Metropolitan', impact: 92, status: 'Active'},
      {name: 'Rural Education Initiative', budget: 800000, region: 'Rural', impact: 88, status: 'Planning'},
      {name: 'Healthcare Access Project', budget: 1200000, region: 'Suburban', impact: 95, status: 'Active'},
      {name: 'Infrastructure Development', budget: 2000000, region: 'Metropolitan', impact: 90, status: 'Completed'}
    ]);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Civic Funding Intelligence Platform</h1>
      <div style={{ background: '#2c5aa0', color: 'white', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h2>Funding Overview</h2>
        <p>Total Funding: $5,500,000</p>
        <p>Initiatives: 4</p>
        <p>Average Impact: 91.2%</p>
      </div>
      
      <h2>Initiatives</h2>
      {initiatives.map((initiative, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '5px' }}>
          <h3>{initiative.name}</h3>
          <p>Budget: ${initiative.budget.toLocaleString()} | Region: {initiative.region} | Impact: {initiative.impact}/100</p>
          <p>Status: {initiative.status}</p>
        </div>
      ))}
    </div>
  );
}