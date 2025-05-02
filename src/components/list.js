import React from "react";

const List = () => {
  const students = [
    "sony",
    "suneel",
    "santhosh",
    "amma",
    "hari",
  ];

  return (
    <div>
      <h2>Student Name List</h2>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        {students.length === 0 ? (
          <li>No students found</li>
        ) : (
          students.map((student, index) => (
            <li key={index}>{student}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default List;
