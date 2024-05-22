import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import "../Css/LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');


  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/api/login', { email, password, role });
        console.log(response.data);
        alert('Login successful');
        navigate('/');
  
    } catch (error) {
        alert('Failed to login');
        console.error(error);
    }
  };

  return (
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          {/* <h2>LOGIN</h2> */}
          <div className="underline-title"></div>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="user-email" style={{ paddingTop: '13px' }}>
            &nbsp;Email
          </label>
          <input 
            id="user-email" 
            className="form-content" 
            type="email" 
            name="email" 
            autoComplete="on" 
            value={email}
            onChange={e => setEmail(e.target.value)}
            required 
          />
          <div className="form-border"></div>

          <label htmlFor="user-password" style={{ paddingTop: '22px' }}>
            &nbsp;Password
          </label>
          <input 
            id="user-password" 
            className="form-content" 
            type="password" 
            name="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            required 
          />
          <div className="form-border"></div>

          {/* Role selection dropdown */}
          <label htmlFor="user-role" style={{ paddingTop: '22px' }}>
            &nbsp;Select Role
          </label>
          <select 
            id="user-role" 
            className="form-content" 
            name="role" 
            value={role}
            onChange={e => setRole(e.target.value)}
            required
          >
            <option value="Administrator">Administrator</option>
            <option value="Distributors">Distributors</option>
            <option value="Reseller">Reseller</option>
          </select>
          <div className="form-border"></div>

          <Link to="/">
            <legend id="forgot-pass">Forgot password?</legend>
          </Link>
          <input id="submit-btn" type="submit" value="LOGIN" />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
