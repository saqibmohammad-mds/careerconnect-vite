import "./LoginPage.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="login-page">
      <header className="login-topbar">
        <Link to="/" className="login-brand">
          CareerConnect
        </Link>
        <Link to="/fairs" className="login-back">
          ← Back to Fairs
        </Link>
      </header>

      <main className="login-wrap">
        <section className="login-card">
          <div className="login-head">
            <p className="login-badge">Welcome back</p>
            <h1>Login</h1>
            <p className="login-sub">
              Sign in to register for fairs, enter lobbies, and chat with recruiters.
            </p>
          </div>

          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <label className="field">
              <span>Email</span>
              <input type="email" placeholder="you@example.com" required />
            </label>

            <label className="field">
              <span>Password</span>
              <input type="password" placeholder="••••••••" required />
            </label>

            <div className="row">
              <label className="check">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button type="button" className="link-btn">
                Forgot password?
              </button>
            </div>

            <button className="primary-btn" type="submit">
              Login
            </button>

            <div className="divider">
              <span>or</span>
            </div>

            <button className="ghost-btn" type="button">
              Continue with Google
            </button>

            <p className="bottom-text">
              New here?{" "}
              <button type="button" className="link-btn">
                Create an account
              </button>
            </p>
          </form>
        </section>

        <aside className="login-side">
          <div className="side-card">
            <h2>What you get</h2>
            <ul>
              <li>Register for fairs in 1 click</li>
              <li>Visit company booths</li>
              <li>Submit resumes to recruiters</li>
              <li>Live chat + networking</li>
            </ul>
          </div>

          <div className="side-mini">
            <p className="mini-title">Next Fair</p>
            <p className="mini-main">Tech Careers Expo 2026</p>
            <p className="mini-sub">March 12 • Virtual • 24 companies</p>
            <Link className="mini-btn" to="/fair-details">
              View details
            </Link>
          </div>
        </aside>
      </main>

      <footer className="login-footer">
        © 2026 CareerConnect. Login UI Prototype.
      </footer>
    </div>
  );
}