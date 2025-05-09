import React, { useState } from 'react';

// Employee data
const employees = [
  { id: 1, name: "raju", position: "Developer", salary: 95000 },
  { id: 2, name: "megha", position: "Designer", salary: 105000 },
  { id: 3, name: "kesava", position: "Manager", salary: 98000 },
  { id: 4, name: "hari", position: "Tester", salary: 87000 },
  { id: 5, name: "gnana", position: "DevOps", salary: 110000 },
  { id: 6, name: "santhosh", position: "Support", salary: 94000 },
  { id: 7, name: "chitti", position: "Analyst", salary: 92000 },
  { id: 8, name: "sony", position: "Admin", salary: 91000 },
  { id: 9, name: "suneel", position: "Developer", salary: 89000 },
  { id: 10, name: "sunny", position: "Tester", salary: 85000 },
  { id: 11, name: "Kusuma", position: "QA", salary: 97000 },
];

// React Component
const EmployeeTable = () => {
  const [displayedEmployees, setDisplayedEmployees] = useState(employees);

  const handleFilterClick = () => {
    const filtered = employees.filter(emp => emp.salary < 100000).slice(0, 10);
    setDisplayedEmployees(filtered);
  };

  const handleResetClick = () => {
    setDisplayedEmployees(employees);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
        Employee List
      </h2>

      <button
        onClick={handleFilterClick}
        style={{
          marginRight: '10px',
          padding: '8px 16px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Filter (Salary &lt; 100000, Max 10)
      </button>

      <button
        onClick={handleResetClick}
        style={{
          padding: '8px 16px',
          backgroundColor: 'gray',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Reset
      </button>

      <table
        style={{
          width: '100%',
          marginTop: '20px',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Position</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Salary</th>
          </tr>
        </thead>
        <tbody>
          {displayedEmployees.map((emp) => (
            <tr key={emp.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{emp.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{emp.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{emp.position}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                ${emp.salary.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
