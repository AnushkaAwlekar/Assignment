"use client";
import { useEffect, useState } from "react";
import "./ShowSchool.css"; // ✅ Import CSS

export default function ShowSchool() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("/api/schools/get")
      .then((r) => r.json())
      .then((data) => {
        console.log("API Response:", data);
        if (Array.isArray(data)) {
          setSchools(data);
        } else if (data && Array.isArray(data.rows)) {
          setSchools(data.rows);
        } else {
          setSchools([]);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="showschool-container">
      {schools.length === 0 ? (
        <p className="text-gray-500">No schools found.</p>
      ) : (
        schools.map((s) => (
          <div key={s.id} className="showschool-card">
            <img
              src={s.image || "/placeholder.png"}
              alt={s.name}
              className="showschool-image"
            />
            <div className="showschool-details">
              <h3 className="showschool-name">{s.name}</h3>
              <p className="showschool-address">{s.address}</p>
              <p className="showschool-meta">
                {s.city} — {s.state}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
