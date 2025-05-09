import React from 'react';

const RenderingMap = () => {
    const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

    return (
        <div>
            <h1>Fruits List</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default RenderingMap;