import React from "react";
import { Link } from "react-router-dom";


import "./LandingPage.css";

export default function LandingPage() {
  const upcomingFairs = [
    { id: 1, title: "Tech Careers Expo 2026", date: "March 12, 2026", companies: 24 },
    { id: 2, title: "AI & Data Science Fair", date: "March 20, 2026", companies: 18 },
    { id: 3, title: "Startup Networking Day", date: "April 2, 2026", companies: 12 },
  ];

  return (
    <div className="landing-page">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">CareerConnect</div>
        <nav className="nav-links">
        <a href="#features">Features</a>
        <Link to="/fairs">Fairs</Link>
        <a href="#how-it-works">How it Works</a>
        </nav>
        <div className="nav-buttons">
          <button className="btn btn-outline">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <p className="badge">Virtual Career Fairs & Networking</p>
          <h1>
            Meet recruiters, explore booths, and get hired — all online.
          </h1>
          <p className="hero-subtext">
            Join virtual career fairs, visit company booths, submit your resume,
            and connect with recruiters through live chat.
          </p>

          <div className="hero-actions">
            <Link to="/fairs" className="btn btn-primary link-btn">Explore Fairs</Link>
            <button className="btn btn-outline">How it Works</button>
          </div>
          <div className="hero-stats">
            <div>
              <h3>100+</h3>
              <p>Companies</p>
            </div>
            <div>
              <h3>5k+</h3>
              <p>Students</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Networking</p>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <h3>Upcoming Fair</h3>
          <div className="event-card">
            <p className="event-title">Tech Careers Expo 2026</p>
            <p className="event-info">March 12, 2026 • 10:00 AM</p>
            <p className="event-info">24 Companies • Live Booths • Chat</p>
            <button className="btn btn-primary full-width">Register Now</button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <h2>Platform Features</h2>
        <p className="section-subtitle">
          Everything needed for a smooth virtual career fair experience.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Company Booths</h3>
            <p>Visit virtual booths, explore openings, and learn about companies.</p>
          </div>
          <div className="feature-card">
            <h3>Resume Submission</h3>
            <p>Upload and submit resumes directly to recruiters in a few clicks.</p>
          </div>
          <div className="feature-card">
            <h3>Live Chat</h3>
            <p>Talk with recruiters and networking participants in real time.</p>
          </div>
          <div className="feature-card">
            <h3>Fair Schedules</h3>
            <p>Track sessions, talks, and booth timings with organized schedules.</p>
          </div>
        </div>
      </section>

      {/* Upcoming Fairs */}
      <section id="fairs" className="section">
        <h2>Upcoming Career Fairs</h2>
        <p className="section-subtitle">
          Browse and register for upcoming events.
        </p>

        <div className="fair-grid">
          {upcomingFairs.map((fair) => (
            <div key={fair.id} className="fair-card">
              <h3>{fair.title}</h3>
              <p>{fair.date}</p>
              <p>{fair.companies} Companies Participating</p>
              <button className="btn btn-outline small-btn">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="section">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Register for a virtual career fair</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Enter the fair lobby and visit booths</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Submit resumes and chat with recruiters</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 CareerConnect. Built for Virtual Career Fairs.</p>
      </footer>
    </div>
  );
}