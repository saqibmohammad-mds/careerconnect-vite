import "./AdminDashboardPage.css";
import { Link } from "react-router-dom";

export default function AdminDashboardPage() {
  const stats = [
    { label: "Total Fairs", value: "6" },
    { label: "Company Booths", value: "42" },
    { label: "Registrations", value: "1,284" },
    { label: "Resumes Submitted", value: "3,950" },
  ];

  const recentFairs = [
    { name: "Tech Careers Expo 2026", date: "Mar 12, 2026", status: "Upcoming" },
    { name: "AI & Data Science Fair", date: "Mar 20, 2026", status: "Live" },
    { name: "Startup Networking Day", date: "Apr 02, 2026", status: "Upcoming" },
  ];

  const activity = [
    { when: "5 mins ago", text: "New booth added: ZenithAI (Tech Careers Expo 2026)" },
    { when: "18 mins ago", text: "Registrations crossed 1,200 for AI & Data Science Fair" },
    { when: "1 hr ago", text: "Schedule updated: Resume Review Desk added (12:30 PM)" },
    { when: "Yesterday", text: "Fair created: Finance & Consulting Connect" },
  ];

  return (
    <div className="admin-page">
      {/* Topbar */}
      <header className="admin-topbar">
        <div className="admin-left">
          <Link to="/" className="admin-brand">CareerConnect</Link>
          <span className="admin-divider" />
          <span className="admin-badge">Admin</span>
        </div>

        <div className="admin-actions">
          <Link to="/manage-fairs" className="admin-btn admin-outline">Manage Fairs</Link>
          <Link to="/manage-booths" className="admin-btn admin-primary">Manage Booths</Link>
        </div>
      </header>

      <main className="admin-wrap">
        {/* Header */}
        <section className="admin-hero">
          <div>
            <p className="admin-chip">Dashboard</p>
            <h1>Admin Dashboard</h1>
            <p className="admin-sub">
              Organize career fairs, manage booths, and track registrations.
            </p>
          </div>

          <div className="admin-hero-card">
            <p className="hero-mini-title">Today</p>
            <p className="hero-mini-main">AI & Data Science Fair</p>
            <p className="hero-mini-sub">Live • 18 booths • 420 online</p>
            <div className="hero-mini-actions">
              <Link to="/manage-fairs" className="mini-btn">Edit Fair</Link>
              <Link to="/manage-booths" className="mini-btn">Booths</Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="admin-stats">
          {stats.map((s) => (
            <div key={s.label} className="admin-stat">
              <p className="admin-stat-value">{s.value}</p>
              <p className="admin-stat-label">{s.label}</p>
            </div>
          ))}
        </section>

        {/* Grid */}
        <section className="admin-grid">
          {/* Recent fairs */}
          <div className="admin-card">
            <div className="admin-card-head">
              <h2>Recent Fairs</h2>
              <Link to="/manage-fairs" className="admin-link">Open</Link>
            </div>

            <div className="admin-list">
              {recentFairs.map((f) => (
                <div key={f.name} className="admin-row">
                  <div>
                    <p className="row-title">{f.name}</p>
                    <p className="row-sub">{f.date}</p>
                  </div>
                  <span className={`row-pill ${f.status.toLowerCase()}`}>{f.status}</span>
                </div>
              ))}
            </div>

            <div className="admin-note">
              Demo tip: Click “Manage Fairs” to show CRUD-style UI next.
            </div>
          </div>

          {/* Activity */}
          <div className="admin-card">
            <div className="admin-card-head">
              <h2>Activity</h2>
              <span className="muted">Last 24 hours</span>
            </div>

            <div className="admin-activity">
              {activity.map((a, idx) => (
                <div key={idx} className="act-item">
                  <span className="act-dot" />
                  <div>
                    <p className="act-text">{a.text}</p>
                    <p className="act-when">{a.when}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="admin-card admin-gradient">
            <p className="g-title">Quick Actions</p>
            <p className="g-main">Keep the fair running smooth.</p>
            <p className="g-sub">
              Use these shortcuts during demo to show admin control.
            </p>

            <div className="g-actions">
              <Link to="/manage-fairs" className="g-btn">Create / Edit Fair</Link>
              <Link to="/manage-booths" className="g-btn">Add / Edit Booth</Link>
              <Link to="/fairs" className="g-btn light">View as User</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="admin-footer">
        © 2026 CareerConnect. Admin Dashboard UI Prototype.
      </footer>
    </div>
  );
}