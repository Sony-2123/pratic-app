// src/AuthForm.js
import React, { useState } from 'react';

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '5px',
    display: 'block',
    color: '#444',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1.5px solid #ccc',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4a90e2',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  toggle: {
    marginTop: '15px',
    fontSize: '14px',
    textAlign: 'center',
    color: '#666',
  },
  error: {
    color: '#e53935',
    fontSize: '13px',
    marginTop: '5px',
  }
};

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
    const errs = {};
    if (!isLogin && form.name.trim().length < 2) errs.name = 'Name is too short';
    if (!validateEmail(form.email)) errs.email = 'Invalid email';
    if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert(`${isLogin ? 'Logged in' : 'Signed up'} successfully!\nEmail: ${form.email}`);
    setForm({ name: '', email: '', password: '' });
    setErrors({});
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</div>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={styles.input}
              placeholder="Your name"
            />
            {errors.name && <div style={styles.error}>{errors.name}</div>}
          </div>
        )}
        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={styles.input}
            placeholder="you@example.com"
          />
          {errors.email && <div style={styles.error}>{errors.email}</div>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            style={styles.input}
            placeholder="******"
          />
          {errors.password && <div style={styles.error}>{errors.password}</div>}
        </div>
        <button type="submit" style={styles.button}>
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>
      </form>
      <div style={styles.toggle}>
        {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
        <span
          onClick={() => setIsLogin(!isLogin)}
          style={{ color: '#4a90e2', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {isLogin ? 'Sign Up' : 'Log In'}
        </span>
      </div>
    </div>
  );
}
