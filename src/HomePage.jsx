import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to ProjectSync</h1>
        <p>Your Gateway to Collaborative Learning and Innovation</p>
      </header>
      <section className="home-overview">
       
        <div className="overview-text">
          <h2>Unleash Creativity, Inspire Innovation</h2>
          <p>
            ProjectSync is your online hub for students from various universities and colleges to come together, collaborate,
            and bring their innovative ideas to life. Whether you're an aspiring engineer, designer, or researcher, this is
            where great projects take shape.
          </p>
        </div>
      </section>
      <div className="home-options">
        <button className="btn-sign-in">Sign In</button>
        <button className="btn-register">Register</button>
      </div>
    </div>
  );
};

export default HomePage;
