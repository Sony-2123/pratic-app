import React, { useState } from "react";

function TeamAccordion({ teams }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {teams.map((team, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginBottom: "10px",
            overflow: "hidden"
          }}
        >
          <div
            onClick={() => toggleAccordion(index)}
            style={{
              backgroundColor: "#f0f0f0",
              padding: "10px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            {team}
          </div>

          {openIndex === index && (
            <div style={{ padding: "10px", background: "#fff" }}>
              <p>{team} is one of the franchises in the IPL.</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TeamAccordion;
