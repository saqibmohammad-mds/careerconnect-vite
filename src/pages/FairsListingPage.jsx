import "./FairsListingPage.css";
import { Link } from "react-router-dom";
import "./FairsListingPage.css";
<Link to="/" className="home-link">← Back to Home</Link>


export default function FairsListingPage() {
  const fairs = [
    {
      id: 1,
      title: "Tech Careers Expo 2026",
      date: "March 12, 2026",
      time: "10:00 AM",
      companies: 24,
      mode: "Virtual",
      status: "Upcoming",
      category: "Technology",
    },
    {
      id: 2,
      title: "AI & Data Science Fair",
      date: "March 20, 2026",
      time: "11:30 AM",
      companies: 18,
      mode: "Virtual",
      status: "Live",
      category: "AI / Data",
    },
    {
      id: 3,
      title: "Startup Networking Day",
      date: "April 2, 2026",
      time: "2:00 PM",
      companies: 12,
      mode: "Virtual",
      status: "Upcoming",
      category: "Startups",
    },
    {
      id: 4,
      title: "Finance & Consulting Connect",
      date: "April 10, 2026",
      time: "9:30 AM",
      companies: 16,
      mode: "Virtual",
      status: "Upcoming",
      category: "Finance",
    },
    {
      id: 5,
      title: "Women in Tech Career Fair",
      date: "April 16, 2026",
      time: "1:00 PM",
      companies: 20,
      mode: "Virtual",
      status: "Upcoming",
      category: "Technology",
    },
    {
      id: 6,
      title: "Campus Placement Mega Fair",
      date: "April 25, 2026",
      time: "10:30 AM",
      companies: 30,
      mode: "Virtual",
      status: "Completed",
      category: "Campus",
    },
  ];

  return (
    <div className="fairs-page">
    {/* Header */}
    <header className="navbar">
        <Link
  to="/"
  className="logo-link"
  style={{ textDecoration: "none", marginRight: "16px" }}
>
  <div className="logo" style={{ textDecoration: "none" }}>CareerConnect</div>
</Link>

        <nav className="nav-links">
  <Link to="/">Landing</Link>
  <Link to="/fairs">Fairs</Link>
  <Link to="/fair-details">Fair Details</Link>
  <Link to="/login">Login</Link>
  <Link to="/dashboard">User Dashboard</Link>
  <Link to="/lobby">Lobby</Link>
  <Link to="/booth">Booth</Link>
  <Link to="/resume">Resume</Link>
  <Link to="/chat">Chat</Link>
  <Link to="/admin">Admin</Link>
</nav>

    
    </header>




    <header className="fairs-header">
        <div>
            <p className="fairs-badge">Explore Events</p>
            <h1>Career Fairs Listing</h1>
            <p className="fairs-subtitle">
                Browse upcoming fairs, check participating companies, and register
                for events that match your career goals.
            </p>
        </div>
        <button className="create-alert-btn">Set Alert</button>
    </header>

    {/* Filters */}
      <section className="filters-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search fairs, companies, or domains..."
          />
        </div>

        <div className="filter-row">
          <div className="status-tabs">
            <button className="tab active">All</button>
            <button className="tab">Upcoming</button>
            <button className="tab">Live</button>
            <button className="tab">Completed</button>
          </div>

          <div className="dropdown-filters">
            <select>
              <option>All Categories</option>
              <option>Technology</option>
              <option>AI / Data</option>
              <option>Finance</option>
              <option>Startups</option>
              <option>Campus</option>
            </select>

            <select>
              <option>Sort: Nearest Date</option>
              <option>Most Companies</option>
              <option>Latest Added</option>
            </select>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="fairs-grid">
        {fairs.map((fair) => (
          <div key={fair.id} className="fair-item-card">
            <div className="card-top">
              <span
                className={`status-badge ${
                  fair.status.toLowerCase() === "live"
                    ? "live"
                    : fair.status.toLowerCase() === "completed"
                    ? "completed"
                    : "upcoming"
                }`}
              >
                {fair.status}
              </span>
              <span className="category-badge">{fair.category}</span>
            </div>

            <h3>{fair.title}</h3>

            <div className="fair-meta">
              <p>{fair.date}</p>
              <p>{fair.time}</p>
              <p>{fair.mode}</p>
            </div>

            <div className="fair-stats-row">
              <div className="mini-stat">
                <span className="mini-stat-value">{fair.companies}</span>
                <span className="mini-stat-label">Companies</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-value">Live Chat</span>
                <span className="mini-stat-label">Networking</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-value">Resume</span>
                <span className="mini-stat-label">Submission</span>
              </div>
            </div>

            <div className="card-actions">
              <button className="btn-outline">View Details</button>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}