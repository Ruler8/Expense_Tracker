import React, { useState } from 'react';

function CustomFormWithTable() {
  const [formData, setFormData] = useState({
      name: '',
      description: '',
      amount: '',
      category: '',
      date: ''
    
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTableData((prev) => [...prev, formData]);

    // Reset form fields
    setFormData({
      name: '',
      description: '',
      amount: '',
      category: '',
      date: ''
      
    });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <form onSubmit={handleSubmit} style={{
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#ffffff'
      }}>
        <h2 style={{ textAlign: 'center' }}>User Form</h2>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter expense name'
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          EXpense Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder='Enter expense description'
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Amount:
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder='Enter Amount'
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '15px' }}>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder='Expense Category'
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder='Enter expense category'
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </label>

        

        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Submit
        </button>
      </form>

      {/* Table Section */}
      {tableData.length > 0 && (
        <table style={{ width: '100%', marginTop: '30px', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Expense Name</th>
              <th style={tableHeaderStyle}>Expense Description</th>
              <th style={tableHeaderStyle}>Amount</th>
              <th style={tableHeaderStyle}>Category</th>
              <th style={tableHeaderStyle}>Date</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((entry, index) => (
              <tr key={index}>
                <td style={tableCellStyle}>{entry.name}</td>
                <td style={tableCellStyle}>{entry.description}</td>
                <td style={tableCellStyle}>{entry.amount}</td>
                <td style={tableCellStyle}>{entry.category}</td>
                <td style={tableCellStyle}>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// Inline styles for table
const tableHeaderStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  backgroundColor: '#000000'
};

const tableCellStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'center'
};

export default CustomFormWithTable;
