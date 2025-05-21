// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="bi bi-capsule me-2 text-primary"></i>
          <span className="fw-bold text-primary">PharmaSys</span>
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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  <i className="bi bi-speedometer2 me-1"></i>Administración
                </a>
                <ul className="dropdown-menu shadow-sm">
                  <li>
                    <Link className="dropdown-item" to="/admin/dashboard">
                      <i className="bi bi-grid me-2"></i>Panel de Control
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/register">
                      <i className="bi bi-person-plus me-2"></i>Registrar Usuario
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/admin/inventory">
                      <i className="bi bi-box-seam me-2"></i>Inventario
                    </Link>
                  </li>
                </ul>
              </li>
            )}
            
            {role === 'moderador' && (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  <i className="bi bi-clipboard-data me-1"></i>Gestión
                </a>
                <ul className="dropdown-menu shadow-sm">
                  <li>
                    <Link className="dropdown-item" to="/moderator/dashboard">
                      <i className="bi bi-grid me-2"></i>Panel de Control
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/moderator/reports">
                      <i className="bi bi-file-earmark-text me-2"></i>Reportes
                    </Link>
                  </li>
                </ul>
              </li>
            )}
            
            {role === 'usuario' && (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  <i className="bi bi-person-circle me-1"></i>Mi Cuenta
                </a>
                <ul className="dropdown-menu shadow-sm">
                  <li>
                    <Link className="dropdown-item" to="/user/dashboard">
                      <i className="bi bi-grid me-2"></i>Mi Panel
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/user/orders">
                      <i className="bi bi-bag me-2"></i>Mis Pedidos
                    </Link>
                  </li>
                </ul>
              </li>
            )}
            
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <i className="bi bi-shop me-1"></i>Productos
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <i className="bi bi-envelope me-1"></i>Contacto
              </Link>
            </li>
          </ul>
          
          <ul className="navbar-nav ms-auto">
            {username ? (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                  <div className="avatar-sm me-2 bg-primary rounded-circle">
                    <span className="avatar-text text-white">
                      {username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span>{username}</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      <i className="bi bi-person me-2"></i>Mi Perfil
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right me-2"></i>Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link btn btn-outline-primary me-2" to="/">
                    <i className="bi bi-box-arrow-in-right me-1"></i>Iniciar Sesión
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary text-white" to="/register">
                    <i className="bi bi-person-plus me-1"></i>Registrarse
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;