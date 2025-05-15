// src/components/organisms/LoginForm.jsx
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form className="p-6 bg-white rounded shadow-md w-96">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <FormField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button label="Login" onClick={handleLogin} />
    </form>
  );
};

export default LoginForm;
