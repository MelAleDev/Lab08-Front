import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  // Ensure full-screen display
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACK_URL}/api/auth/login`, {
        username,
        password
      });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', res.data.username);
      localStorage.setItem('role', res.data.role);

      const role = res.data.role;
      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else if (role === 'pharmacist') {
        navigate('/pharmacist/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    } catch (err) {
      setError(err.response?.data.message || 'Error al iniciar sesión');
      setLoading(false);
    }
  };

  return (
    <div className="pharmacy-login-container">
      <div className="pharmacy-navbar">
        <div className="pharmacy-navbar-title">Sistema de Gestión Farmacéutico</div>
        <div>
          <Link to="/login" className="pharmacy-navbar-button">Iniciar Sesión</Link>
          <Link to="/register" className="pharmacy-navbar-button">Registrarse</Link>
        </div>
      </div>
      
      <div className="pharmacy-login-card">
        <div className="pharmacy-login-header">
          <div className="pharmacy-logo-container">
            <div className="pharmacy-logo-circle">
              <i className="bi bi-capsule pharmacy-logo-icon"></i>
            </div>
          </div>
        </div>

        <div className="pharmacy-login-body">
          <h2 className="pharmacy-login-title">Farmacia Online</h2>
          <p className="pharmacy-login-subtitle">Cuidando tu salud - Ingresa tus credenciales</p>

          {error && (
            <div className="pharmacy-alert">
              <i className="bi bi-exclamation-triangle-fill"></i>
              <span>{error}</span>
              <button onClick={() => setError('')}>&times;</button>
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="pharmacy-input-group">
              <label htmlFor="username">
                <i className="bi bi-person-fill"></i>
                Usuario
              </label>
              <div className="pharmacy-input-field">
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Ingrese su nombre de usuario"
                  required
                />
              </div>
            </div>

            <div className="pharmacy-input-group">
              <label htmlFor="password">
                <i className="bi bi-lock-fill"></i>
                Contraseña
              </label>
              <div className="pharmacy-input-field">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingrese su contraseña"
                  required
                />
              </div>
            </div>

            <button 
              className="pharmacy-login-button"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="pharmacy-spinner"></span>
                  Verificando...
                </>
              ) : (
                <>
                  <i className="bi bi-box-arrow-in-right"></i>
                  &nbsp;Iniciar Sesión
                </>
              )}
            </button>

            <div className="pharmacy-forgot-password">
              <a href="/recovery">¿Olvidaste tu contraseña?</a>
            </div>

            <div className="pharmacy-login-footer">
              <p>¿No tienes una cuenta?</p>
              <Link to="/register" className="pharmacy-register-link">
                <i className="bi bi-person-plus"></i>
                Registrarse
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;