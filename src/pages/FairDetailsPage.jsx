import "./FairDetailsPage.css";
import { Link } from "react-router-dom";

export default function FairDetailsPage() {
  // Static demo data (good for Project Review-1)
  const fair = {
    title: "Tech Careers Expo 2026",
    date: "March 12, 2026",
    time: "10:00 AM - 4:00 PM",
    mode: "Virtual",
    status: "Upcoming",
    category: "Technology",
    companies: 24,
    description:
      "A virtual career fair focused on software roles, internships, and graduate hiring. Visit booths, chat with recruiters, and submit your resume.",
  };

  const agenda = [
    { time: "10:00 AM", item: "Lobby opens (Check-in + welcome)" },
    { time: "10:30 AM", item: "Company booths go live" },
    { time: "12:00 PM", item: "Resume review desk (Quick feedback)" },
    { time: "2:00 PM", item: "Networking session (Group chat)" },
    { time: "4:00 PM", item: "Fair closes" },
  ];

  const featuredCompanies = [
    "NovaTech",
    "ByteWorks",
    "CloudNine",
    "ZenithAI",
    "FinEdge",
    "CodeCraft",
  ];

  return (
    <div className="fair-details-page">
      {/* Top Bar */}
      <header className="fd-navbar">
        <div className="fd-left">
          <Link to="/" className="fd-logo">
            CareerConnect
          </Link>
          <span className="fd-divider" />
          <Link to="/fairs" className="fd-back">
            ← Back to Fairs
          </Link>
        </div>

        <div className="fd-right">
          <button className="fd-btn fd-btn-outline">Share</button>
          <button className="fd-btn fd-btn-primary">Register</button>
        </div>
      </header>

      {/* Hero */}
      <section className="fd-hero">
        <div className="fd-hero-main">
          <div className="fd-badges">
            <span className={`fd-status ${fair.status.toLowerCase()}`}>
              {fair.status}
            </span>
            <span className="fd-tag">{fair.category}</span>
            <span className="fd-tag">{fair.mode}</span>
          </div>

          <h1 className="fd-title">{fair.title}</h1>

          <p className="fd-subtitle">{fair.description}</p>

          <div className="fd-meta">
            <div className="fd-meta-card">
              <p className="fd-meta-label">Date</p>
              <p className="fd-meta-value">{fair.date}</p>
            </div>
            <div className="fd-meta-card">
              <p className="fd-meta-label">Time</p>
              <p className="fd-meta-value">{fair.time}</p>
            </div>
            <div className="fd-meta-card">
              <p className="fd-meta-label">Companies</p>
              <p className="fd-meta-value">{fair.companies} participating</p>
            </div>
          </div>

          <div className="fd-hero-actions">
            <button className="fd-btn fd-btn-primary">Enter Lobby</button>
            <button className="fd-btn fd-btn-outline">Submit Resume</button>
          </div>
        </div>

        <aside className="fd-side">
          <div className="fd-side-card">
            <h3>Quick Actions</h3>
            <button className="fd-side-btn">Visit Booths</button>
            <button className="fd-side-btn">Live Chat</button>
            <button className="fd-side-btn">View Schedule</button>
          </div>

          <div className="fd-side-card">
            <h3>What you can do</h3>
            <ul className="fd-list">
              <li>Explore company booths</li>
              <li>Chat with recruiters</li>
              <li>Submit resume to companies</li>
              <li>Network in group chat</li>
            </ul>
          </div>
        </aside>
      </section>

      {/* Content Grid */}
      <section className="fd-grid">
        <div className="fd-card">
          <h2>Agenda</h2>
          <div className="fd-agenda">
            {agenda.map((a, idx) => (
              <div key={idx} className="fd-agenda-row">
                <span className="fd-agenda-time">{a.time}</span>
                <span className="fd-agenda-item">{a.item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fd-card">
          <h2>Featured Companies</h2>
          <div className="fd-company-grid">
            {featuredCompanies.map((name) => (
              <div key={name} className="fd-company-pill">
                {name}
              </div>
            ))}
          </div>

          <div className="fd-note">
            Tip: Click “Enter Lobby” during demo to show the flow.
          </div>
        </div>
      </section>

      <footer className="fd-footer">
        <p>© 2026 CareerConnect. Fair Details Prototype.</p>
      </footer>
    </div>
  );
}