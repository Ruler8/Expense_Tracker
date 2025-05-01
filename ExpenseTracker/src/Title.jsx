import React from 'react';

function Title() {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif'
  };

  const headingStyle = {
    color: '#2c3e50',
    fontSize: '2.5em'
  };

  const paragraphStyle = {
    color: '#34495e',
    fontSize: '1.2em'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Expense Tracker</h1>
      <p style={{ ...paragraphStyle, fontWeight: 'bold' }}>
        Start taking control of your finances.
      </p>
      <p style={paragraphStyle}>
        Record, categorize, and analyze your spending.
      </p>
    </div>
  );
}

export default Title;
