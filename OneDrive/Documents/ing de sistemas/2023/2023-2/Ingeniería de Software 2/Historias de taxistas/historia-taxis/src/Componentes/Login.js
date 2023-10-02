// En el archivo Login.js

import React, { useState } from 'react';
import '../estilos/Login.css'; // Importa el archivo CSS desde la carpeta 'estilos'

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación
    // Por ahora, simplemente llamamos a la función onLogin
    onLogin();
  };

  return (
    <div className="login-container">
      <h1 className="form-title">Iniciar Sesión</h1>
      <form onSubmit={handleLogin} className="form">
        <label className="form-label">
          Correo Electrónico:
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <label className="form-label">
          Contraseña:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <button type="submit" className="form-button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
