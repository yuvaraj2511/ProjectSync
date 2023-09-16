import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './LoginPage.css';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '', // Change the state variable name
      password: '',
      isLoggedIn: false,
      error: null,
      showPassword: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: null });
  };

  handleTogglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Simulate authentication logic
    if (this.state.email === 'example@example.com' && this.state.password === 'password') {
      this.setState({ isLoggedIn: true });
    } else {
      this.setState({ error: 'Invalid email or password' });
    }
  };

  render() {
    if (this.state.isLoggedIn) {
      return <div className="success">You are logged in!</div>;
    }

    return (
      
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </label>
              <input
                type="text"
                placeholder='Enter Email'
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <FontAwesomeIcon icon={faLock} /> Password
              </label>
              <div className="password-input">
                <input
                  type={this.state.showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  required
                />
                <FontAwesomeIcon
                  icon={this.state.showPassword ? faEyeSlash : faEye}
                  className="password-toggle"
                  onClick={this.handleTogglePasswordVisibility}
                />
              </div>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <div className="login-links">
              <a href="#">Register</a> | <a href="#">Forgot Password</a>
            </div>
            {this.state.error && <div className="error">{this.state.error}</div>}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;