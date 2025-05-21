// src/pages/UserDashboard.jsx
import React from 'react';
import './UserDashboard.css';

const UserDashboard = () => (
  <div className="user-dashboard">
    {/* Header con imagen de fondo */}
    <header className="dashboard-header">
      <div className="header-content">
        <div className="user-avatar">
          <div className="avatar-circle">
            <i className="bi bi-person"></i>
          </div>
        </div>
        <div className="user-info">
          <h1>Bienvenido, Usuario</h1>
          <p className="text-muted">Miembro desde Enero 2023</p>
          <div className="profile-completion">
            <div className="progress-text">Perfil completado al 75%</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '75%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Contenido principal */}
    <main className="dashboard-content">
      <div className="dashboard-grid">
        {/* Sección izquierda - Perfil y acciones */}
        <div className="left-column">
          {/* Tarjeta de perfil */}
          <div className="profile-card card">
            <div className="card-header">
              <h3><i className="bi bi-person-circle"></i> Mi Perfil</h3>
            </div>
            <div className="card-body">
              <div className="profile-details">
                <div className="detail-item">
                  <span className="detail-label"><i className="bi bi-envelope"></i> Email:</span>
                  <span className="detail-value">usuario@ejemplo.com</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label"><i className="bi bi-shield-check"></i> Seguridad:</span>
                  <span className="detail-value status-active">Activa</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label"><i className="bi bi-star"></i> Nivel:</span>
                  <span className="detail-value">Usuario Avanzado</span>
                </div>
              </div>
              <button className="btn btn-edit-profile">
                <i className="bi bi-pencil-square"></i> Editar Perfil
              </button>
            </div>
          </div>

          {/* Tarjeta de acciones rápidas */}
          <div className="quick-actions card">
            <div className="card-header">
              <h3><i className="bi bi-lightning-charge"></i> Acciones Rápidas</h3>
            </div>
            <div className="card-body">
              <button className="action-btn">
                <i className="bi bi-plus-circle"></i>
                <span>Crear Contenido</span>
              </button>
              <button className="action-btn">
                <i className="bi bi-people"></i>
                <span>Gestionar Amigos</span>
              </button>
              <button className="action-btn">
                <i className="bi bi-gear"></i>
                <span>Configuración</span>
              </button>
              <button className="action-btn">
                <i className="bi bi-question-circle"></i>
                <span>Soporte</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sección derecha - Estadísticas y actividad */}
        <div className="right-column">
          {/* Tarjeta de estadísticas */}
          <div className="stats-card card">
            <div className="card-header">
              <h3><i className="bi bi-graph-up"></i> Mis Estadísticas</h3>
            </div>
            <div className="card-body">
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-value">24</div>
                  <div className="stat-label">Contribuciones</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">5</div>
                  <div className="stat-label">Amigos</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">12</div>
                  <div className="stat-label">Seguidores</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">3</div>
                  <div className="stat-label">Proyectos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta de actividad reciente */}
          <div className="activity-card card">
            <div className="card-header">
              <h3><i className="bi bi-clock-history"></i> Actividad Reciente</h3>
              <button className="btn-view-all">Ver todo <i className="bi bi-chevron-right"></i></button>
            </div>
            <div className="card-body">
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">
                    <i className="bi bi-file-earmark-text"></i>
                  </div>
                  <div className="activity-content">
                    <div className="activity-title">Nuevo artículo publicado</div>
                    <div className="activity-time">Hoy, 10:30 AM</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">
                    <i className="bi bi-chat-left-text"></i>
                  </div>
                  <div className="activity-content">
                    <div className="activity-title">Comentario en publicación</div>
                    <div className="activity-time">Ayer, 4:15 PM</div>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">
                    <i className="bi bi-person-plus"></i>
                  </div>
                  <div className="activity-content">
                    <div className="activity-title">Nuevo amigo agregado</div>
                    <div className="activity-time">Ayer, 11:20 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default UserDashboard;