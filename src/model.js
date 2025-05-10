import React, { useState } from 'react';

// ProgressBar Component
export const ProgressBar = ({ progress }) => {
    return (
        <div style={{ border: '1px solid #ccc', width: '100%', borderRadius: '5px' }}>
            <div
                style={{
                    width: `${progress}%`,
                    backgroundColor: 'blue',
                    height: '20px',
                    borderRadius: '5px',
                }}
            ></div>
        </div>
    );
};

// Table Component
export const Table = ({ data }) => {
    return (
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    {Object.keys(data[0]).map((key) => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {Object.values(row).map((value, idx) => (
                            <td key={idx}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

// Spinner Component
export const Spinner = () => {
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <div
                style={{
                    width: '40px',
                    height: '40px',
                    border: '4px solid #ccc',
                    borderTop: '4px solid blue',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                }}
            ></div>
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>
        </div>
    );
};

// Carousel Component
export const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);
    const prevImage = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={prevImage}>Previous</button>
            <img src={images[currentIndex]} alt="carousel" style={{ width: '300px', height: '200px' }} />
            <button onClick={nextImage}>Next</button>
        </div>
    );
};

// Modal Component
export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '5px',
                    width: '300px',
                }}
            >
                <button onClick={onClose} style={{ float: 'right' }}>
                    Close
                </button>
                {children}
            </div>
        </div>
    );
};