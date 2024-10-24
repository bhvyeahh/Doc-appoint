import React, { useState } from 'react';
import '../styles/login.css';
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'; // Import icons

const Login = () => {
  const [state, setState] = useState('Sign Up');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Additional submission logic her e
  };

  return (
    <>
      <form className="login-box" onSubmit={onSubmitHandler}>
        <div className="login-detail">
          <p id="login-task">{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
          <p id="login-task2">
            Please {state === 'Sign Up' ? 'Sign Up' : 'Login'} to book appointment
          </p>
          <div className="login-cont">
          {
            state === "Sign Up" && <div className="detail">
            Full Name
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          }
            <div className="detail">
              Email
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="detail password-container">
              Password
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* Show icon for toggling password visibility */}
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
          </div>
        </div>
          <button>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
          <div className="choose-link">
          {
            state === "Sign Up"
            ? <p>Already have an account? <span id = 'login-link' onClick={()=>setState('Login')}>Login here</span></p> 
            : <p>Create an new account? <span id = 'login-link' onClick={()=>setState('Sign Up')}>click here</span></p>
          }
          </div>
      </form>
    </>
  );
};

export default Login;
