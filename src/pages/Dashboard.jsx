import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('username');
    const userRole = localStorage.getItem('role');
    
    if (!token) {
      navigate('/login');
    } else {
      setUsername(user);
      setRole(userRole);
      setTimeout(() => setLoading(false), 1000);
    }
  }, [navigate]);

  if (loading) {
    return (
      <div className="dashboard-loading text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <h4 className="mt-4">Preparando tu experiencia culé...</h4>
      </div>
    );
  }

  return (
    <div className="dashboard-container container-fluid py-4">
      {/* Header con tarjeta de bienvenida */}
      <div className="row mb-4">
        <div className="col">
          <div className="welcome-card p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="fw-bold mb-2 text-white">¡Hola, {username}!</h1>
                <div className="badge bg-white text-primary px-3 py-2 rounded-pill">
                  <i className="bi bi-shield-lock me-2"></i>
                  {role === 'admin' ? 'Administrador' : 
                   role === 'moderador' ? 'Moderador' : 'Usuario'}
                </div>
              </div>
              <div className="avatar-lg rounded-circle d-flex align-items-center justify-content-center">
                {username.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Tarjeta de Acciones Rápidas */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="mb-0 d-flex align-items-center">
                <i className="bi bi-lightning-charge-fill me-2" style={{background: 'var(--barca-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i>
                Acciones Rápidas
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                {[
                  {icon: 'bi-calendar-check', title: 'Mis Eventos', color: 'primary'},
                  {icon: 'bi-file-earmark-text', title: 'Documentos', color: 'success'},
                  {icon: 'bi-people', title: 'Contactos', color: 'warning'},
                  {icon: 'bi-gear', title: 'Configuración', color: 'info'}
                ].map((action, index) => (
                  <div className="col-md-6" key={index}>
                    <button className="btn btn-action-card w-100">
                      <i className={`bi ${action.icon} fs-1`}></i>
                      <h6 className={`text-${action.color} fw-bold mt-2`}>{action.title}</h6>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta de Actividad Reciente */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header">
              <h5 className="mb-0 d-flex align-items-center">
                <i className="bi bi-clock-history me-2" style={{background: 'var(--barca-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}></i>
                Actividad Reciente
              </h5>
            </div>
            <div className="card-body">
              <div className="activity-timeline">
                {[
                  {time: 'Hace 15 minutos', text: 'Has iniciado sesión correctamente', color: 'success'},
                  {time: 'Ayer, 14:32', text: 'Actualizaste tu información de perfil', color: 'primary'},
                  {time: 'Lunes, 09:15', text: 'Subiste un nuevo documento', color: 'warning'},
                  {time: '28 Feb, 2024', text: 'Registro completado', color: 'info'}
                ].map((activity, index) => (
                  <div className="activity-item" key={index}>
                    <div className={`activity-badge bg-${activity.color}`}></div>
                    <div className="activity-content">
                      <small className="text-muted">{activity.time}</small>
                      <p className="mb-0 fw-medium">{activity.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn btn-outline-secondary mt-3 w-100">
                Ver toda la actividad <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Sección de Estadísticas */}
        <div className="col-12">
          <div className="stats-card">
            <div className="card-header">
              <h5 className="mb-0 d-flex align-items-center">
                <i className="bi bi-bar-chart-line me-2"></i>
                Tus Estadísticas
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                {[
                  {value: 12, label: 'Eventos', color: 'primary'},
                  {value: 5, label: 'Tareas completadas', color: 'success'},
                  {value: 3, label: 'Mensajes nuevos', color: 'warning'},
                  {value: 8, label: 'Documentos', color: 'info'}
                ].map((stat, index) => (
                  <div className="col-md-3 col-6" key={index}>
                    <div className="stat-item">
                      <h3 className={`text-${stat.color}`}>{stat.value}</h3>
                      <p className="text-muted mb-0">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;