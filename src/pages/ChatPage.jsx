import "./ChatPage.css";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

export default function ChatPage() {
  const conversations = useMemo(
    () => [
      { id: 1, name: "ZenithAI Recruiter", role: "Talent Acquisition", last: "Send your resume and GitHub link.", time: "2m", unread: 2, status: "online" },
      { id: 2, name: "NovaTech HR", role: "HR", last: "Which role are you applying for?", time: "19m", unread: 0, status: "online" },
      { id: 3, name: "CloudNine Team", role: "Hiring Team", last: "We have DevOps internships open.", time: "1h", unread: 0, status: "busy" },
      { id: 4, name: "Group: Tech Careers Expo", role: "Networking", last: "AMA starts at 11:00 AM.", time: "Yesterday", unread: 0, status: "online" },
    ],
    []
  );

  const messagesById = useMemo(
    () => ({
      1: [
        { id: "m1", side: "them", text: "Hi! Thanks for joining ZenithAI booth.", time: "10:12 AM" },
        { id: "m2", side: "them", text: "Are you applying for internship or fresher role?", time: "10:12 AM" },
        { id: "m3", side: "me", text: "Internship. Frontend / AI intern depending on fit.", time: "10:13 AM" },
        { id: "m4", side: "them", text: "Great. Send your resume and GitHub link.", time: "10:14 AM" },
      ],
      2: [
        { id: "m1", side: "them", text: "Hello! Which role are you applying for?", time: "9:40 AM" },
        { id: "m2", side: "me", text: "Frontend Intern. I can share portfolio + GitHub.", time: "9:41 AM" },
      ],
      3: [
        { id: "m1", side: "them", text: "We have DevOps internships open.", time: "8:10 AM" },
        { id: "m2", side: "me", text: "Noted. I’ll check requirements.", time: "8:12 AM" },
      ],
      4: [
        { id: "m1", side: "them", text: "Welcome to the group chat.", time: "Yesterday" },
        { id: "m2", side: "them", text: "AMA starts at 11:00 AM.", time: "Yesterday" },
        { id: "m3", side: "me", text: "Got it. I’ll join.", time: "Yesterday" },
      ],
    }),
    []
  );

  const [activeId, setActiveId] = useState(1);
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState("");

  const active = conversations.find((c) => c.id === activeId);
  const messages = messagesById[activeId] || [];

  const filteredConversations = conversations.filter((c) =>
    (c.name + " " + c.role).toLowerCase().includes(query.toLowerCase().trim())
  );

  function sendMessage(e) {
    e.preventDefault();
    if (!draft.trim()) return;
    // UI prototype: we don't persist; just clear draft.
    setDraft("");
  }

  return (
    <div className="chat-page">
      {/* Top bar */}
      <header className="chat-topbar">
        <div className="chat-left">
          <Link to="/" className="chat-brand">CareerConnect</Link>
          <span className="chat-divider" />
          <Link to="/lobby" className="chat-back">← Lobby</Link>
        </div>

        <div className="chat-actions">
          <Link to="/resume" className="chat-btn chat-outline">Submit Resume</Link>
          <Link to="/booth" className="chat-btn chat-primary">Open Booth</Link>
        </div>
      </header>

      {/* Layout */}
      <main className="chat-wrap">
        {/* Sidebar */}
        <aside className="chat-sidebar">
          <div className="side-head">
            <h2>Messages</h2>
            <span className="side-pill">Demo</span>
          </div>

          <div className="side-search">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search chats..."
            />
          </div>

          <div className="chat-list">
            {filteredConversations.map((c) => (
              <button
                key={c.id}
                className={`chat-item ${c.id === activeId ? "active" : ""}`}
                onClick={() => setActiveId(c.id)}
                type="button"
              >
                <div className="chat-item-left">
                  <div className={`avatar ${c.status}`}>
                    {c.name[0]}
                  </div>
                  <div className="chat-item-text">
                    <p className="chat-name">{c.name}</p>
                    <p className="chat-last">{c.last}</p>
                  </div>
                </div>

                <div className="chat-item-right">
                  <span className="chat-time">{c.time}</span>
                  {c.unread > 0 && <span className="chat-unread">{c.unread}</span>}
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Chat panel */}
        <section className="chat-panel">
          <div className="panel-head">
            <div className="panel-title">
              <div className={`avatar big ${active?.status || "online"}`}>
                {active?.name?.[0] || "C"}
              </div>
              <div>
                <p className="panel-name">{active?.name || "Conversation"}</p>
                <p className="panel-sub">
                  {active?.role || "Chat"} •{" "}
                  <span className={`status-dot ${active?.status || "online"}`} />
                  <span className="status-text">{active?.status || "online"}</span>
                </p>
              </div>
            </div>

            <div className="panel-actions">
              <button className="mini-btn" type="button">Call</button>
              <button className="mini-btn" type="button">Info</button>
            </div>
          </div>

          <div className="messages">
            {messages.map((m) => (
              <div key={m.id} className={`msg-row ${m.side}`}>
                <div className={`msg ${m.side}`}>
                  <p className="msg-text">{m.text}</p>
                  <p className="msg-time">{m.time}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="composer" onSubmit={sendMessage}>
            <button className="icon-btn" type="button" title="Attach">+</button>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="send-btn" type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer className="chat-footer">
        © 2026 CareerConnect. Live Chat UI Prototype.
      </footer>
    </div>
  );
}