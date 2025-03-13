import React from 'react';
import './styles/login.css';

function LoginPage() {
  return (
    <div className="login-container">
      <header className="header">Runify</header> {/* replace with Maija's header component*/}
      <p className="description">
        Music helps runners maintain consistent pacing.<br /> 
        Runify helps runners find their beat.
      </p>
      <div className="form-container">
        <div className="form-box">
        <div className="signin-extra-text hidden_title">Log In with spotify to improve your training with personalized BPM playlists.</div> 
          <h2 className="form-title">Create Account</h2>
          <div className="input-group">
            <label>Email</label>
            <input type="email" className="input-field" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" className="input-field" />
          </div>

            <button className="submit-btn">Submit</button>

        </div>
        
        <div className="form-box">
        <div className="signin-extra-text">Log In with spotify to improve your training with personalized BPM playlists.</div> 

          <h2 className="form-title">Sign In</h2>
          <div className="input-group">
            <label>Email</label>
            <input type="email" className="input-field" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" className="input-field" />
          </div>
            <button className="submit-btn">Sign in with Spotify</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
