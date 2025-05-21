// src/pages/RegisterPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: "user"
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const navigate = useNavigate();

  // Efecto para animar la aparición del formulario
  useEffect(() => {
    // Pequeño retraso para mejorar la experiencia visual
    const timer = setTimeout(() => {
      setFormVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpia el error específico al empezar a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setServerError("");

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
        // Mostrar animación de éxito antes de navegar
        setTimeout(() => {
          navigate("/login", { state: { registrationSuccess: true } });
        }, 800);
      }
    } catch (err) {
      console.error("Registration error:", err);
      setServerError(
        err.response?.data?.message || 
        "Hubo un error al registrar el usuario. Por favor intenta nuevamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Función para cerrar el mensaje de error del servidor
  const closeServerError = () => {
    setServerError("");
  };

  return (
    <div className="register-container">
      <div 
        className="register-card"
        style={{ 
          opacity: formVisible ? 1 : 0, 
          transform: formVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease'
        }}
      >
        <div className="club-badge">
          <div className="badge-inner">
            <span className="badge-text">FCB</span>
          </div>
        </div>
        
        <div className="register-header">
          <h2>Únete al Club</h2>
          <p>Regístrate para ser parte de nuestra comunidad culé</p>
        </div>

        {serverError && (
          <div className="error-message">
            <i className="bi bi-exclamation-triangle-fill"></i>
            <span>{serverError}</span>
            <button onClick={closeServerError} aria-label="Cerrar error">
              <i className="bi bi-x"></i>
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <i className="bi bi-person-fill input-icon"></i>
            <input
              type="text"
              className={errors.username ? "error" : ""}
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label htmlFor="username">Usuario</label>
            {errors.username && (
              <div className="input-error">{errors.username}</div>
            )}
          </div>

          <div className="input-group">
            <i className="bi bi-lock-fill input-icon"></i>
            <input
              type="password"
              className={errors.password ? "error" : ""}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label htmlFor="password">Contraseña</label>
            {errors.password && (
              <div className="input-error">{errors.password}</div>
            )}
            <div className="input-hint">Mínimo 6 caracteres</div>
          </div>

          <div className="input-group">
            <i className="bi bi-shield-lock-fill input-icon"></i>
            <input
              type="password"
              className={errors.confirmPassword ? "error" : ""}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            {errors.confirmPassword && (
              <div className="input-error">{errors.confirmPassword}</div>
            )}
          </div>

          <div className="input-group">
            <i className="bi bi-person-badge-fill input-icon"></i>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="user">Usuario Regular</option>
              <option value="moderator">Moderador</option>
              <option value="admin">Administrador</option>
            </select>
            <label htmlFor="role">Tipo de Cuenta</label>
            <div className="input-hint">* Solo usuarios autorizados pueden crear cuentas de moderador o administrador</div>
          </div>

          <button 
            className="submit-btn" 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Registrando...
              </>
            ) : (
              <>
                <i className="bi bi-person-plus-fill"></i>
                Registrarse
              </>
            )}
          </button>

          <div className="login-link">
            <span>¿Ya tienes una cuenta?</span>
            <Link to="/">
              <i className="bi bi-box-arrow-in-right"></i>
              Iniciar Sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;