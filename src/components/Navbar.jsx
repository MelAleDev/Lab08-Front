// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Archivo CSS adicional para personalización

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const role = localStorage.getItem('role');
  const username = localStorage.getItem('username');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="bi bi-shield-lock me-2"></i>
          <span className="fw-bold">Sistema de Gestión</span>
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {role === 'admin' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/dashboard">
                    <i className="bi bi-speedometer2 me-1"></i>
                    Panel Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    <i className="bi bi-person-plus me-1"></i>
                    Registrar Usuario
                  </Link>
                </li>
              </>
            )}
            {role === 'moderador' && (
              <li className="nav-item">
                <Link className="nav-link" to="/moderator/dashboard">
                  <i className="bi bi-clipboard-data me-1"></i>
                  Panel Moderador
                </Link>
              </li>
            )}
            {role === 'usuario' && (
              <li className="nav-item">
                <Link className="nav-link" to="/user/dashboard">
                  <i className="bi bi-person-circle me-1"></i>
                  Mi Panel
                </Link>
              </li>
            )}
          </ul>
          
          <ul className="navbar-nav ms-auto">
            {username && (
              <>
                <li className="nav-item d-flex align-items-center">
                  <div className="avatar-sm me-2">
                    <span className="avatar-text bg-white text-primary rounded-circle">
                      {username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="nav-link me-3 d-none d-lg-inline">
                    {username} <small className="text-white-50">({role})</small>
                  </span>
                </li>
                <li className="nav-item">
                  <button 
                    className="btn btn-outline-light"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-1"></i>
                    Cerrar Sesión
                  </button>
                </li>
              </>
            )}
            
            {!username && (
              <li className="nav-item d-flex">
                <Link className="btn btn-outline-light me-2" to="/">
                  <i className="bi bi-box-arrow-in-right me-1"></i>
                  Iniciar Sesión
                </Link>
                <Link className="btn btn-light text-primary" to="/register">
                  <i className="bi bi-person-plus me-1"></i>
                  Registrarse
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;