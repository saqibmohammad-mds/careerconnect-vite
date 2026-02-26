import "./LobbyPage.css";
import { Link } from "react-router-dom";

export default function LobbyPage() {
  const fair = {
    name: "Tech Careers Expo 2026",
    date: "March 12, 2026",
    time: "10:00 AM - 4:00 PM",
    mode: "Virtual",
    companies: 24,
  };

  const quickStats = [
    { label: "Booths Live", value: "18" },
    { label: "Recruiters Online", value: "42" },
    { label: "Chats Active", value: "9" },
    { label: "Sessions Today", value: "5" },
  ];

  const booths = [
    { name: "ZenithAI", roles: "AI Intern • ML Engineer", status: "Online" },
    { name: "NovaTech", roles: "Frontend Intern • SDE-1", status: "Online" },
    { name: "CloudNine", roles: "Cloud Intern • DevOps", status: "Busy" },
    { name: "ByteWorks", roles: "SDE Intern • Backend", status: "Online" },
    { name: "FinEdge", roles: "Analyst • Data Intern", status: "Offline" },
    { name: "CodeCraft", roles: "Full Stack Intern", status: "Online" },
  ];

  const schedule = [
    { time: "10:00 AM", title: "Lobby opens" },
    { time: "11:00 AM", title: "Recruiter AMA (Group Chat)" },
    { time: "12:30 PM", title: "Resume Review Desk" },
    { time: "2:00 PM", title: "Networking Session" },
    { time: "4:00 PM", title: "Fair closes" },
  ];

  return (
    <div className="lobby-page">
      {/* Topbar */}
      <header className="lobby-topbar">
        <div className="lobby-left">
          <Link to="/" className="lobby-brand">CareerConnect</Link>
          <span className="lobby-divider" />
          <Link to="/fair-details" className="lobby-back">← Fair Details</Link>
        </div>

        <div className="lobby-actions">
          <Link to="/chat" className="lobby-btn lobby-outline">Open Chat</Link>
          <Link to="/booth" className="lobby-btn lobby-primary">Go to Booth</Link>
        </div>
      </header>

      {/* Header card */}
      <section className="lobby-hero">
        <div className="lobby-hero-main">
          <p className="lobby-badge">Lobby</p>
          <h1>{fair.name}</h1>
          <p className="lobby-sub">
            {fair.date} • {fair.time} • {fair.mode} • {fair.companies} companies
          </p>

          <div className="lobby-hero-row">
            {quickStats.map((s) => (
              <div key={s.label} className="lobby-stat">
                <p className="lobby-stat-value">{s.value}</p>
                <p className="lobby-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lobby-hero-side">
          <div className="lobby-side-card">
            <p className="lobby-side-title">Quick Actions</p>
            <Link to="/resume" className="lobby-side-btn">Submit Resume</Link>
            <Link to="/chat" className="lobby-side-btn">Join Group Chat</Link>
            <Link to="/fairs" className="lobby-side-btn">Explore Other Fairs</Link>
          </div>

          <div className="lobby-side-card lobby-gradient">
            <p className="lobby-side-title">Tip</p>
            <p className="lobby-tip-main">Visit booths early.</p>
            <p className="lobby-tip-sub">Busy booths fill up fast during live hours.</p>
            <Link to="/booth" className="lobby-tip-btn">Start now</Link>
          </div>
        </div>
      </section>

      {/* Main grid */}
      <section className="lobby-grid">
        {/* Booths */}
        <div className="lobby-card">
          <div className="lobby-card-head">
            <h2>Company Booths</h2>
            <div className="lobby-search">
              <input placeholder="Search booth..." />
            </div>
          </div>

          <div className="booth-grid">
            {booths.map((b) => (
              <div key={b.name} className="booth-card">
                <div className="booth-top">
                  <div className="booth-avatar">{b.name[0]}</div>
                  <span className={`booth-chip ${b.status.toLowerCase()}`}>
                    {b.status}
                  </span>
                </div>

                <p className="booth-name">{b.name}</p>
                <p className="booth-roles">{b.roles}</p>

                <div className="booth-actions">
                  <Link to="/booth" className="booth-btn booth-outline">View</Link>
                  <Link to="/chat" className="booth-btn booth-primary">Chat</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="lobby-card">
          <div className="lobby-card-head">
            <h2>Today’s Schedule</h2>
            <Link to="#" className="lobby-link">See full</Link>
          </div>

          <div className="schedule-list">
            {schedule.map((s, idx) => (
              <div key={idx} className="schedule-item">
                <p className="schedule-time">{s.time}</p>
                <p className="schedule-title">{s.title}</p>
              </div>
            ))}
          </div>

          <div className="lobby-note">
            Demo tip: Click “View” on a booth to open Company Booth page.
          </div>
        </div>
      </section>

      <footer className="lobby-footer">
        © 2026 CareerConnect. Lobby UI Prototype.
      </footer>
    </div>
  );
}