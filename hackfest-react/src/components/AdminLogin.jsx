// src/components/AdminLogin.jsx
import React, { useState } from "react";
import "./Admin.css";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [token, setToken] = useState(
    localStorage.getItem("hackfest_admin_token") || null
  );
  const [message, setMessage] = useState("");
  const [regs, setRegs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setToken(data.token);
      localStorage.setItem("hackfest_admin_token", data.token);
      setMessage("☠️ Admin login successful!");
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchRegistrations = async () => {
    if (!token) return;
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/registrations`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setRegs(data);
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this registration?")) return;

    try {
      await fetch(`${API_BASE_URL}/api/registrations/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      setRegs((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  const exportExcel = async () => {
  const res = await fetch(`${API_BASE_URL}/api/registrations/export`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "hackfest_registrations.xlsx";
  a.click();
};


  return (
    <section id="admin" className="admin-storm-section">
      {/* BACK Button */}
      <a href="/" className="storm-back-btn">
        ← Back to Home
      </a>

      <div className="storm-overlay"></div>

      {/* If Not Logged In */}
      {!token && (
        <div className="admin-login-box" data-aos="zoom-in">
          <h2 className="admin-title">⚔️ Admin Deck Login</h2>

          <form onSubmit={handleLogin} className="admin-form">
            <label className="admin-label">Email</label>
            <input
              type="email"
              name="email"
              className="admin-input"
              onChange={handleChange}
              required
            />

            <label className="admin-label">Password</label>
            <input
              type="password"
              name="password"
              className="admin-input"
              onChange={handleChange}
              required
            />

            {message && <p className="admin-message">{message}</p>}

            <button className="storm-btn admin-btn" disabled={loading}>
              {loading ? "Sailing..." : "Enter Deck"}
            </button>
          </form>
        </div>
      )}

      {/* If Logged In */}
      {token && (
        <div className="admin-panel" data-aos="fade-up">
          <h2 className="admin-title">🌊 Crew Registration Dashboard</h2>

          <div className="admin-actions">
            <button className="storm-btn small" onClick={fetchRegistrations}>
              {loading ? "Loading..." : "Load Crew List"}
            </button>

            <button className="storm-btn small" onClick={exportExcel}>
              Export Excel
            </button>

            <button
              className="storm-btn small danger"
              onClick={() => {
                localStorage.removeItem("hackfest_admin_token");
                setToken(null);
              }}
            >
              Logout
            </button>
          </div>

          <div className="admin-table-box">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>College</th>
                  <th>Branch</th>
                  <th>Year</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {regs.length === 0 && (
                  <tr>
                    <td colSpan="8" className="empty-msg">
                      No data loaded yet.
                    </td>
                  </tr>
                )}

                {regs.map((r, i) => (
                  <tr key={r._id}>
                    <td>{i + 1}</td>
                    <td>{r.name}</td>
                    <td>{r.email}</td>
                    <td>{r.phone}</td>
                    <td>{r.college}</td>
                    <td>{r.branch}</td>
                    <td>{r.year}</td>
                    <td>
                      <button
                        className="delete-btn"
                        onClick={() => deleteUser(r._id)}
                      >
                        ✖
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminLogin;
