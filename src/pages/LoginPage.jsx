import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  // Asegurar que ocupe toda la pantalla
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
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
      } else if (role === 'moderator') {
        navigate('/moderator/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    } catch (err) {
      setError(err.response?.data.message || 'Error al iniciar sesión');
      setLoading(false);
    }
  };

  return (
    <div className="barca-login-container">
      <div className="barca-navbar">
        <div className="barca-navbar-title">Sistema de Gestión</div>
        <div className="barca-navbar-actions">
          <Link to="/login" className="barca-navbar-button">Iniciar Sesión</Link>
          <Link to="/register" className="barca-navbar-button">Registrarse</Link>
        </div>
      </div>
      <div className="barca-login-card">
        <div className="barca-login-header">
          <div className="barca-stripes">
            <div className="barca-stripe blue"></div>
            <div className="barca-stripe red"></div>
            <div className="barca-stripe blue"></div>
            <div className="barca-stripe red"></div>
          </div>
          <div className="barca-logo-container">
            <div className="barca-logo-circle">
              <span className="barca-logo-text">FCB</span>
            </div>
          </div>
        </div>

        <div className="barca-login-body">
          <h2 className="barca-login-title">Portal Culé</h2>
          <p className="barca-login-subtitle">Més que un club - Ingresa tus credenciales</p>

          {error && (
            <div className="barca-alert">
              <i className="bi bi-exclamation-triangle-fill"></i>
              <span>{error}</span>
              <button onClick={() => setError('')}>&times;</button>
            </div>
          )}

          <form onSubmit={handleLogin} className="barca-login-form">
            <div className="barca-input-group">
              <label htmlFor="username">
                <i className="bi bi-person-fill"></i>
                Usuario
              </label>
              <div className="barca-input-field">
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="nombre.usuario"
                  required
                />
                <div className="barca-input-underline"></div>
              </div>
            </div>

            <div className="barca-input-group">
              <label htmlFor="password">
                <i className="bi bi-lock-fill"></i>
                Contraseña
              </label>
              <div className="barca-input-field">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
                <div className="barca-input-underline"></div>
              </div>
            </div>

            <button 
              className="barca-login-button"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="barca-spinner"></span>
                  Verificando...
                </>
              ) : (
                <>
                  <i className="bi bi-box-arrow-in-right"></i>
                  Entrar al Camp Nou
                </>
              )}
            </button>

            <div className="barca-forgot-password">
              <a href="/recovery">¿Olvidaste tu contraseña?</a>
            </div>

            <div className="barca-login-footer">
              <p>¿Primera vez en la plataforma culé?</p>
              <Link to="/register" className="barca-register-link">
                <i className="bi bi-person-plus"></i>
                Únete al equipo
              </Link>
            </div>
          </form>
        </div>
        
        <div className="barca-login-footer-banner">
          <div className="barca-footer-stripe"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;