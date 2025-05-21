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
        <h4 className="mt-4">Preparando su portal farmacéutico...</h4>
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
                   role === 'moderador' ? 'Farmacéutico' : 'Usuario'}
                </div>
              </div>
              <div className="avatar-lg rounded-circle d-flex align-items-center justify-content-center text-white">
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
              <h5 className="mb-0">
                <i className="bi bi-clipboard-pulse me-2"></i>
                Acciones Rápidas
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                {[
                  {icon: 'bi-capsule', title: 'Medicamentos', color: 'primary'},
                  {icon: 'bi-calendar-check', title: 'Recetas', color: 'success'},
                  {icon: 'bi-people', title: 'Pacientes', color: 'info'},
                  {icon: 'bi-box-seam', title: 'Inventario', color: 'warning'}
                ].map((action, index) => (
                  <div className="col-md-6" key={index}>
                    <button className="btn btn-action-card w-100">
                      <i className={`bi ${action.icon}`}></i>
                      <h6 className="fw-bold mt-2">{action.title}</h6>
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
              <h5 className="mb-0">
                <i className="bi bi-clock-history me-2"></i>
                Actividad Reciente
              </h5>
            </div>
            <div className="card-body">
              <div className="activity-timeline">
                {[
                  {time: 'Hace 15 minutos', text: 'Has iniciado sesión correctamente', color: 'success'},
                  {time: 'Ayer, 14:32', text: 'Ingreso de medicamentos al inventario', color: 'primary'},
                  {time: 'Lunes, 09:15', text: 'Nueva receta registrada', color: 'warning'},
                  {time: '28 Feb, 2024', text: 'Actualización del catálogo', color: 'info'}
                ].map((activity, index) => (
                  <div className="activity-item" key={index}>
                    <div className={`activity-badge bg-${activity.color}`}></div>
                    <div className="activity-content">
                      <small className="text-muted">{activity.time}</small>
                      <p className="mb-0">{activity.text}</p>
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
              <h5 className="mb-0">
                <i className="bi bi-bar-chart-line me-2"></i>
                Estadísticas
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                {[
                  {value: 32, label: 'Medicamentos', color: 'primary'},
                  {value: 15, label: 'Recetas hoy', color: 'success'},
                  {value: 8, label: 'Notificaciones', color: 'warning'},
                  {value: 125, label: 'Pacientes', color: 'info'}
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