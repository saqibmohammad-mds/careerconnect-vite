import "./BoothPage.css";
import { Link } from "react-router-dom";

export default function BoothPage() {
  const booth = {
    company: "ZenithAI",
    tagline: "Building practical AI that ships.",
    about:
      "ZenithAI is hiring interns and freshers across AI/ML, frontend, and backend roles. Meet the recruiter, explore roles, and submit your resume directly.",
    location: "Remote / India",
    rolesOpen: 6,
    recruiter: { name: "Ayesha Khan", title: "Talent Acquisition" },
  };

  const roles = [
    { title: "AI Intern", type: "Internship", exp: "0-1 yrs", skills: "Python • ML • Basics" },
    { title: "Frontend Intern", type: "Internship", exp: "0-1 yrs", skills: "React • CSS • UI" },
    { title: "Backend Intern", type: "Internship", exp: "0-1 yrs", skills: "Node • APIs • DB" },
    { title: "Data Analyst Intern", type: "Internship", exp: "0-1 yrs", skills: "SQL • Excel • Python" },
    { title: "SDE-1 (Fresher)", type: "Full-time", exp: "0-1 yrs", skills: "DSA • Projects" },
    { title: "ML Engineer (Fresher)", type: "Full-time", exp: "0-1 yrs", skills: "ML • Deploy • Python" },
  ];

  const highlights = [
    { label: "Live Chat", value: "Available" },
    { label: "Resume", value: "1-click submit" },
    { label: "Openings", value: `${booth.rolesOpen} roles` },
    { label: "Mode", value: "Virtual booth" },
  ];

  return (
    <div className="booth-page">
      {/* Topbar */}
      <header className="booth-topbar">
        <div className="booth-left">
          <Link to="/" className="booth-brand">CareerConnect</Link>
          <span className="booth-divider" />
          <Link to="/lobby" className="booth-back">← Back to Lobby</Link>
        </div>

        <div className="booth-actions">
          <Link to="/chat" className="booth-btn booth-outline">Chat</Link>
          <Link to="/resume" className="booth-btn booth-primary">Submit Resume</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="booth-hero">
        <div className="booth-hero-main">
          <div className="booth-company-row">
            <div className="booth-logo">{booth.company[0]}</div>
            <div>
              <h1 className="booth-title">{booth.company}</h1>
              <p className="booth-tagline">{booth.tagline}</p>
            </div>
          </div>

          <div className="booth-badges">
            <span className="booth-chip">Hiring Now</span>
            <span className="booth-chip">{booth.location}</span>
            <span className="booth-chip">{booth.rolesOpen} Open Roles</span>
          </div>

          <p className="booth-about">{booth.about}</p>

          <div className="booth-highlights">
            {highlights.map((h) => (
              <div key={h.label} className="booth-highlight">
                <p className="bh-value">{h.value}</p>
                <p className="bh-label">{h.label}</p>
              </div>
            ))}
          </div>

          <div className="booth-cta">
            <Link to="/chat" className="booth-btn booth-primary">Start Chat</Link>
            <Link to="/resume" className="booth-btn booth-outline">Apply Now</Link>
          </div>
        </div>

        <aside className="booth-side">
          <div className="booth-side-card">
            <h3>Recruiter</h3>
            <div className="recruiter">
              <div className="rec-avatar">{booth.recruiter.name[0]}</div>
              <div>
                <p className="rec-name">{booth.recruiter.name}</p>
                <p className="rec-title">{booth.recruiter.title}</p>
              </div>
            </div>

            <div className="rec-status">
              <span className="dot online" />
              <span>Online • Replies fast</span>
            </div>

            <div className="rec-actions">
              <Link to="/chat" className="rec-btn">Message</Link>
              <Link to="/resume" className="rec-btn">Send Resume</Link>
            </div>
          </div>

          <div className="booth-side-card booth-gradient">
            <p className="g-title">Tip</p>
            <p className="g-main">Send a short note.</p>
            <p className="g-sub">A 1-line intro improves recruiter response rate.</p>
            <Link to="/chat" className="g-btn">Write message</Link>
          </div>
        </aside>
      </section>

      {/* Roles */}
      <section className="booth-grid">
        <div className="booth-card">
          <div className="booth-card-head">
            <h2>Open Roles</h2>
            <div className="booth-search">
              <input placeholder="Search roles..." />
            </div>
          </div>

          <div className="roles">
            {roles.map((r) => (
              <div key={r.title} className="role">
                <div className="role-main">
                  <p className="role-title">{r.title}</p>
                  <p className="role-sub">{r.type} • {r.exp}</p>
                  <p className="role-skills">{r.skills}</p>
                </div>

                <div className="role-actions">
                  <button className="role-btn role-outline" type="button">View</button>
                  <Link to="/resume" className="role-btn role-primary">Apply</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="booth-card">
          <div className="booth-card-head">
            <h2>Booth Feed</h2>
            <Link to="#" className="booth-link">See all</Link>
          </div>

          <div className="feed">
            <div className="feed-item">
              <p className="feed-title">We’re shortlisting early.</p>
              <p className="feed-text">Apply within the first 2 hours for faster review.</p>
              <p className="feed-time">5 mins ago</p>
            </div>

            <div className="feed-item">
              <p className="feed-title">Tech stack</p>
              <p className="feed-text">React, Node, Python, AWS, PostgreSQL</p>
              <p className="feed-time">30 mins ago</p>
            </div>

            <div className="feed-item">
              <p className="feed-title">Recruiter AMA</p>
              <p className="feed-text">Join group chat at 11:00 AM for Q&A.</p>
              <p className="feed-time">1 hr ago</p>
            </div>
          </div>

          <div className="booth-note">
            Demo tip: Click “Apply” to open Resume Submission UI.
          </div>
        </div>
      </section>

      <footer className="booth-footer">
        © 2026 CareerConnect. Company Booth UI Prototype.
      </footer>
    </div>
  );
}