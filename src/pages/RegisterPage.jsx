import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    role: 'user'
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = "El nombre de usuario es requerido";
    } else if (formData.username.length < 4) {
      newErrors.username = "El usuario debe tener al menos 4 caracteres";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Debes confirmar la contraseña";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setServerError('');
    
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACK_URL}/api/auth/register`,
        {
          username: formData.username,
          password: formData.password,
          role: formData.role
        }
      );
      
      if (response.data.success) {
        navigate('/login', { state: { registrationSuccess: true } });
      }
    } catch (err) {
      setServerError(
        err.response?.data?.message || 
        "Hubo un error al registrar el usuario. Por favor intenta nuevamente."
      );
    } finally {
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
      
      <div className="pharmacy-login-card pharmacy-register-card">
        <div className="pharmacy-login-header">
          <div className="pharmacy-logo-container">
            <div className="pharmacy-logo-circle">
              <i className="bi bi-capsule pharmacy-logo-icon"></i>
            </div>
          </div>
        </div>

        <div className="pharmacy-login-body">
          <h2 className="pharmacy-login-title">Crear Cuenta</h2>
          <p className="pharmacy-login-subtitle">Regístrate para acceder a nuestra farmacia online</p>

          {serverError && (
            <div className="pharmacy-alert">
              <i className="bi bi-exclamation-triangle-fill"></i>
              <span>{serverError}</span>
              <button onClick={() => setServerError('')}>&times;</button>
            </div>
          )}

          <form onSubmit={handleRegister}>
            <div className="pharmacy-input-group">
              <label htmlFor="username">
                <i className="bi bi-person-fill"></i>
                Usuario
              </label>
              <div className="pharmacy-input-field">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Ingrese su nombre de usuario"
                  required
                  className={errors.username ? "error" : ""}
                />
                {errors.username && <div className="pharmacy-input-error">{errors.username}</div>}
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
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Ingrese su contraseña"
                  required
                  className={errors.password ? "error" : ""}
                />
                {errors.password && <div className="pharmacy-input-error">{errors.password}</div>}
                <div className="pharmacy-input-hint">Mínimo 6 caracteres</div>
              </div>
            </div>

            <div className="pharmacy-input-group">
              <label htmlFor="confirmPassword">
                <i className="bi bi-shield-lock-fill"></i>
                Confirmar Contraseña
              </label>
              <div className="pharmacy-input-field">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirme su contraseña"
                  required
                  className={errors.confirmPassword ? "error" : ""}
                />
                {errors.confirmPassword && <div className="pharmacy-input-error">{errors.confirmPassword}</div>}
              </div>
            </div>

            <div className="pharmacy-input-group">
              <label htmlFor="role">
                <i className="bi bi-person-badge-fill"></i>
                Tipo de Cuenta
              </label>
              <div className="pharmacy-input-field">
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="pharmacy-select"
                >
                  <option value="user">Usuario</option>
                  <option value="moderator">Moderador</option>
                  <option value="admin">Administrador</option>
                </select>
                <div className="pharmacy-input-hint">* Solo personal autorizado puede crear cuentas especiales</div>
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
                  Registrando...
                </>
              ) : (
                <>
                  <i className="bi bi-person-plus-fill"></i>
                  &nbsp;Crear Cuenta
                </>
              )}
            </button>

            <div className="pharmacy-login-footer">
              <p>¿Ya tienes una cuenta?</p>
              <Link to="/login" className="pharmacy-register-link">
                <i className="bi bi-box-arrow-in-right"></i>
                Iniciar Sesión
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
