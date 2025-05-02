import React from "react";

const Table = () => {
  // Column headers and keys
  const columns = [
    { heading: "Name", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "Mobile", value: "mobile" },
    { heading: "College", value: "college" },
    { heading: "Course", value: "course" },
    { heading: "Gender", value: "gender" },
  ];

  // Sample data
  const data = [
    {
      name: "sony",
      email: "sony@example.com",
      mobile: "9876543210",
      college: "sku University",
      course: "B.Tech",
      gender: "Female",
    },
    {
      name: "suneel",
      email: "suneel@example.com",
      mobile: "9123456789",
      college: "sku Institute",
      course: "B.Sc",
      gender: "Male",
    },
    {
      name: "chitti",
      email: "chitti@example.com",
      mobile: "9988776655",
      college: "JNTU College",
      course: "B.Com",
      gender: "Female",
    },
  ];

  return (
    <div>
      <h2>Student Details Table</h2>
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead style={{ backgroundColor: "#f0f0f0" }}>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center" }}>
                No Data Found
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col.value]}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
