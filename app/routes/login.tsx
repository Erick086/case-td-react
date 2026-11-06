import { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";

export default function Login() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  function alternarTema() {
    const novo = theme === "light" ? "dark" : "light";
    setTheme(novo);
    localStorage.setItem("theme", novo);
  }

  function entrar() {
    if (usuario === "admin" && senha === "123456") {
      localStorage.setItem("isLogged", "true");
      navigate("/admin");
    } else {
      setErro("Usuário ou senha incorretos");
    }
  }

  return (
    <div className={`login-page ${theme}`}>
      <button className="theme-toggle" onClick={alternarTema}>
        {theme === "light" ? "Dark mode" : "Light mode"}
      </button>
      <div className="login-card">
        <h2>Login</h2>
        <input
          placeholder="Username"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {erro && <p style={{ color: "red" }}>{erro}</p>}
        <button className="login-btn" onClick={entrar}>
          LOGIN
        </button>
      </div>
    </div>
  );
}