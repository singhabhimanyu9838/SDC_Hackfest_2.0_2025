// src/components/AdminLogin.jsx
import React, { useState, useEffect } from "react";
import "./Admin.css";

const API_BASE_URL = "https://sdc-hackfest-2-0-sever.onrender.com";
// const API_BASE_URL = "http://localhost:3000";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [token, setToken] = useState(
    localStorage.getItem("hackfest_admin_token") || null
  );
  const [message, setMessage] = useState("");
  const [regs, setRegs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

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
        cache: "no-store",
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

    try {
      const res = await fetch(`${API_BASE_URL}/api/registrations`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      // data items should have createdAt or created_at now (model ensures both)
      setRegs(data);
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setIsFetching(false);
    }
  };

  // Delete Registration
  const deleteUser = async (id) => {
    if (!window.confirm("Delete this registration?")) return;

    const oldRegs = [...regs];
    setRegs((prev) =>
      prev.filter((r) => {
        const realId = r._id || r.id || r.registrationId;
        return realId !== id;
      })
    );

    try {
      const res = await fetch(`${API_BASE_URL}/api/registrations/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Server delete failed.");
    } catch (err) {
      alert("Delete failed: " + err.message);
      setRegs(oldRegs);
    }
  };

  const exportExcel = async () => {
    const res = await fetch(`${API_BASE_URL}/api/registrations/export`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "hackfest_registrations.xlsx";
    a.click();
  };

  useEffect(() => {
    if (token) {
      setIsFetching(true);
      fetchRegistrations();
    }
  }, [token]);

  // helper to get timestamp in preferred format
  const formatSubmittedAt = (r) => {
    // r may have createdAt (ISO) or created_at, or created_at may be ISO string
    const raw = r.createdAt || r.created_at || r.created_at;
    if (!raw) return "—";
    try {
      return new Date(raw).toLocaleString();
    } catch {
      return raw;
    }
  };

  return (
    <section id="admin" className="admin-storm-section">
      <a href="/" className="storm-back-btn">← Back to Home</a>
      <div className="storm-overlay"></div>

      {/* LOGIN PAGE */}
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

      {/* DASHBOARD */}
      {token && (
        <div className="admin-panel" data-aos="fade-up">
          <h2 className="admin-title">🌊 Crew Registration Dashboard</h2>

          <div className="admin-actions">
            <button className="storm-btn small" onClick={fetchRegistrations}>
              Reload List
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
                  <th>Submitted At</th> {/* NEW COLUMN */}
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {isFetching && (
                  <tr>
                    <td colSpan="9" className="empty-msg">
                      Loading registrations...
                    </td>
                  </tr>
                )}

                {!isFetching && regs.length === 0 && (
                  <tr>
                    <td colSpan="9" className="empty-msg">
                      No registrations found.
                    </td>
                  </tr>
                )}

                {regs.map((r, i) => {
                  const realId = r._id || r.id || r.registrationId;

                  return (
                    <tr key={realId}>
                      <td>{i + 1}</td>
                      <td>{r.name}</td>
                      <td>{r.email}</td>
                      <td>{r.phone}</td>
                      <td>{r.college}</td>
                      <td>{r.branch}</td>
                      <td>{r.year}</td>

                      {/* NEW: Timestamp (robust) */}
                      <td>{formatSubmittedAt(r)}</td>

                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => deleteUser(realId)}
                        >
                          ✖
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminLogin;
