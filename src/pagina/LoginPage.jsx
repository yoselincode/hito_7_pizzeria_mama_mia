import { useState } from "react";
import { useUser } from "../context/UserContext";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useUser();

  const [userData, setUserData] = useState({
    email: "jocelincode@gmail.com",
    password: "clave2025",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (email === userData.email && password === userData.password) {
      alert("¡Login exitoso!");
    } else {
      alert("¡El usuario no esta registrado!");
    }
    login();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
