import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";

export default function Admin() {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem("isLogged");
    navigate("/login");
  }

  return (
    <div className={`login-page ${theme}`}>
      <div className="login-card">
        <h2>Bem-vindo, Admin!</h2>
        <p style={{ fontSize: "12px", marginBottom: "16px" }}>Login feito com sucesso</p>
        <button className="login-btn" onClick={handleLogout}>
          LOGOUT
        </button>
      </div>
    </div>
  );
}