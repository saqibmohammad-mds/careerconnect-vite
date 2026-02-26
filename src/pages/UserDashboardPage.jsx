import "./UserDashboardPage.css";
import { Link } from "react-router-dom";

export default function UserDashboardPage() {
  const profile = {
    name: "Saqib",
    role: "Student / Job Seeker",
    tagline: "Track fairs, resumes, and recruiter chats in one place.",
  };

  const stats = [
    { label: "Registered Fairs", value: "3" },
    { label: "Resumes Submitted", value: "5" },
    { label: "Recruiter Chats", value: "8" },
    { label: "Booths Visited", value: "21" },
  ];

  const upcoming = [
    {
      id: 1,
      title: "Tech Careers Expo 2026",
      date: "March 12, 2026",
      time: "10:00 AM",
      status: "Upcoming",
      action: "View Details",
      link: "/fair-details",
    },
    {
      id: 2,
      title: "AI & Data Science Fair",
      date: "March 20, 2026",
      time: "11:30 AM",
      status: "Live",
      action: "Enter Lobby",
      link: "/lobby",
    },
  ];

  const recentActions = [
    { when: "10 mins ago", text: "Submitted resume to ZenithAI (Tech Careers Expo 2026)" },
    { when: "45 mins ago", text: "Visited booth: CloudNine • Open roles: Frontend Intern" },
    { when: "2 hrs ago", text: "Chat started with recruiter: ByteWorks HR" },
    { when: "Yesterday", text: "Registered for AI & Data Science Fair" },
  ];

  const suggestedBooths = [
    { name: "ZenithAI", note: "AI Intern • ML Engineer" },
    { name: "NovaTech", note: "Frontend Intern • SDE-1" },
    { name: "FinEdge", note: "Analyst • Data Intern" },
    { name: "CodeCraft", note: "Full Stack Intern" },
  ];

  return (
    <div className="ud-page">
      {/* Topbar */}
      <header className="ud-topbar">
        <Link to="/" className="ud-brand">CareerConnect</Link>

        <nav className="ud-nav">
          <Link to="/fairs">Fairs</Link>
          <Link to="/fair-details">Fair Details</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/admin">Admin</Link>
        </nav>

        <div className="ud-userpill">
          <div className="ud-avatar">S</div>
          <div className="ud-userinfo">
            <p className="ud-username">{profile.name}</p>
            <p className="ud-role">{profile.role}</p>
          </div>
        </div>
      </header>

      {/* Layout */}
      <main className="ud-wrap">
        {/* Left panel */}
        <section className="ud-left">
          <div className="ud-hero">
            <div>
              <p className="ud-badge">Dashboard</p>
              <h1>Welcome back, {profile.name}.</h1>
              <p className="ud-sub">{profile.tagline}</p>

              <div className="ud-actions">
                <Link to="/fairs" className="ud-btn ud-primary">Explore Fairs</Link>
                <Link to="/resume" className="ud-btn ud-outline">Submit Resume</Link>
              </div>
            </div>

            <div className="ud-hero-card">
              <p className="ud-mini-title">Next up</p>
              <p className="ud-mini-main">Tech Careers Expo 2026</p>
              <p className="ud-mini-sub">March 12 • 10:00 AM • Virtual</p>
              <Link to="/fair-details" className="ud-mini-btn">Open</Link>
            </div>
          </div>

          {/* Stats */}
          <div className="ud-stats">
            {stats.map((s) => (
              <div key={s.label} className="ud-stat">
                <p className="ud-stat-value">{s.value}</p>
                <p className="ud-stat-label">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Upcoming */}
          <div className="ud-card">
            <div className="ud-card-head">
              <h2>My Upcoming Fairs</h2>
              <Link to="/fairs" className="ud-link">View all</Link>
            </div>

            <div className="ud-table">
              {upcoming.map((u) => (
                <div key={u.id} className="ud-row">
                  <div className="ud-row-main">
                    <p className="ud-row-title">{u.title}</p>
                    <p className="ud-row-sub">{u.date} • {u.time}</p>
                  </div>

                  <span className={`ud-chip ${u.status.toLowerCase()}`}>{u.status}</span>

                  <Link to={u.link} className="ud-row-btn">
                    {u.action}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="ud-card">
            <div className="ud-card-head">
              <h2>Recent Activity</h2>
              <span className="ud-muted">Last 24 hours</span>
            </div>

            <div className="ud-activity">
              {recentActions.map((a, idx) => (
                <div key={idx} className="ud-activity-item">
                  <span className="ud-dot" />
                  <div>
                    <p className="ud-activity-text">{a.text}</p>
                    <p className="ud-activity-when">{a.when}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right panel */}
        <aside className="ud-right">
          <div className="ud-panel">
            <h3>Quick Shortcuts</h3>
            <div className="ud-shortcuts">
              <Link to="/lobby" className="ud-shortcut">Enter Lobby</Link>
              <Link to="/booth" className="ud-shortcut">Company Booth</Link>
              <Link to="/chat" className="ud-shortcut">Live Chat</Link>
              <Link to="/resume" className="ud-shortcut">Resume Submission</Link>
            </div>
          </div>

          <div className="ud-panel">
            <h3>Suggested Booths</h3>
            <div className="ud-suggest">
              {suggestedBooths.map((b) => (
                <div key={b.name} className="ud-suggest-item">
                  <div className="ud-suggest-left">
                    <div className="ud-suggest-avatar">{b.name[0]}</div>
                    <div>
                      <p className="ud-suggest-name">{b.name}</p>
                      <p className="ud-suggest-note">{b.note}</p>
                    </div>
                  </div>
                  <Link to="/booth" className="ud-suggest-btn">Open</Link>
                </div>
              ))}
            </div>
          </div>

          <div className="ud-panel ud-gradient">
            <p className="ud-grad-title">Pro tip</p>
            <p className="ud-grad-main">Submit your resume early.</p>
            <p className="ud-grad-sub">
              Recruiters often shortlist before the fair ends.
            </p>
            <Link to="/resume" className="ud-grad-btn">Submit now</Link>
          </div>
        </aside>
      </main>

      <footer className="ud-footer">
        © 2026 CareerConnect. User Dashboard UI Prototype.
      </footer>
    </div>
  );
}