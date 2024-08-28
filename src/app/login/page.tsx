'use client';

import React, { useState, FormEvent } from 'react';
import './login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className='login-back'>
      <div className='login-container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='formOutline mb4'>
            <input
              type='email'
              id='email'
              className='formControl'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              className='formLabel'
              htmlFor='email'
            >
              Email address
            </label>
          </div>
          <div className='formOutline mb4'>
            <input
              type='password'
              id='password'
              className='formControl'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              className='formLabel'
              htmlFor='password'
            >
              Password
            </label>
          </div>
          <div className='row mb4'>
            <div className='col'>
              <div className='form-check'>
                <input
                  className='form-check-input remember-check'
                  type='checkbox'
                  value=''
                  id='RememberMe'
                  checked
                />
                <label
                  className='form-check-label remember'
                  htmlFor='RememberMe'
                >
                  {' '}
                  Remember me{' '}
                </label>
              </div>
            </div>
            <div className='col textRight'>
              <a href='#!'>Forgot password?</a>
            </div>
          </div>
          <button
            type='submit'
            className='btn btnPrimary btnBlock mb4'
          >
            Sign in
          </button>
        </form>
        <p className='notReg'>
          Not Registered yet? <a href='/register'>Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
