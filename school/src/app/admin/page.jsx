"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./Admin.css";

export default function AdminLogin() {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Read from .env
    const VALID_ID = process.env.NEXT_PUBLIC_ADMIN_ID;
    const VALID_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (adminId === VALID_ID && password === VALID_PASSWORD) {
      sessionStorage.setItem("isAdmin", "true");
      router.push("/addSchool"); // go to Add School
    } else {
      setError("❌ Invalid Admin ID or Password");
    }
  };

  return (
    <div className="admin-container">
      <form onSubmit={handleLogin} className="admin-form">
        <h2 className="admin-title">🔐 Admin Login</h2>

        <input
          type="text"
          placeholder="Admin ID"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
          className="admin-input"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="admin-input"
        />

        <button type="submit" className="admin-button">Login</button>

        {error && <p className="admin-error">{error}</p>}
      </form>
    </div>
  );
}
