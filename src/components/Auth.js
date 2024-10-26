import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = mode === 'login' ? '/api/users/login' : '/api/users/register';
    try {
      await axios.post(url, { email, password });
      navigate.push('/path');
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{mode === 'login' ? 'Login' : 'Register'}</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">{mode === 'login' ? 'Login' : 'Register'}</button>
    </form>
  );
};

export default Auth;
