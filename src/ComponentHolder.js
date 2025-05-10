import React, { useState } from "react";

const teams = [
    { name: "Mumbai Indians", details: "Captain: Rohit Sharma" },
    { name: "Chennai Super Kings", details: "Captain: MS Dhoni" },
    { name: "Royal Challengers Bangalore", details: "Captain: Faf du Plessis" },
    { name: "Kolkata Knight Riders", details: "Captain: Shreyas Iyer" },
    { name: "Delhi Capitals", details: "Captain: David Warner" },
    { name: "Punjab Kings", details: "Captain: Shikhar Dhawan" },
    { name: "Rajasthan Royals", details: "Captain: Sanju Samson" },
    { name: "Sunrisers Hyderabad", details: "Captain: Aiden Markram" },
];

const ComponentHolder = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <h1>IPL Teams</h1>
            <div>
                {teams.map((team, index) => (
                    <div key={index}>
                        <div
                            style={{
                                cursor: "pointer",
                                background: "#f0f0f0",
                                padding: "10px",
                                margin: "5px 0",
                            }}
                            onClick={() => toggleAccordion(index)}
                        >
                            {team.name}
                        </div>
                        {activeIndex === index && (
                            <div
                                style={{
                                    padding: "10px",
                                    background: "#e0e0e0",
                                    borderLeft: "2px solid #ccc",
                                }}
                            >
                                {team.details}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComponentHolder;