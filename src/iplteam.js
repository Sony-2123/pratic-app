import React from "react";

const IPLTeams = () => {
    const teams = [
        {
            name: "Mumbai Indians",
            players: ["Rohit Sharma", "Jasprit Bumrah", "Kieron Pollard"],
        },
        {
            name: "Chennai Super Kings",
            players: ["MS Dhoni", "Ravindra Jadeja", "Deepak Chahar"],
        },
        {
            name: "Royal Challengers Bangalore",
            players: ["Virat Kohli", "Glenn Maxwell", "Mohammed Siraj"],
        },
        {
            name: "Kolkata Knight Riders",
            players: ["Shreyas Iyer", "Andre Russell", "Sunil Narine"],
        },
        {
            name: "Mumbai Indians",
            players: ["Rohit Sharma", "Jasprit Bumrah", "Kieron Pollard"],
        },
        {
            name: "Chennai Super Kings",
            players: ["MS Dhoni", "Ravindra Jadeja", "Deepak Chahar"],
        },
        {
            name: "Royal Challengers Bangalore",
            players: ["Virat Kohli", "Glenn Maxwell", "Mohammed Siraj"],
        },
        {
            name: "Kolkata Knight Riders",
            players: ["Shreyas Iyer", "Andre Russell", "Sunil Narine"],
        },
        {
            name: "Mumbai Indians",
            players: ["Rohit Sharma", "Jasprit Bumrah", "Kieron Pollard"],
        },
        {
            name: "Chennai Super Kings",
            players: ["MS Dhoni", "Ravindra Jadeja", "Deepak Chahar"],
        },
        {
            name: "Royal Challengers Bangalore",
            players: ["Virat Kohli", "Glenn Maxwell", "Mohammed Siraj"],
        },
        {
            name: "Kolkata Knight Riders",
            players: ["Shreyas Iyer", "Andre Russell", "Sunil Narine"],
        },
    ];

    return (
        <div>
            <h1>IPL Teams and Players</h1>
            <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Players</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={index}>
                            <td>{team.name}</td>
                            <td>
                                {team.players.map((player, idx) => (
                                    <div key={idx}>{player}</div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default IPLTeams;