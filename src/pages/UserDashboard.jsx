// src/pages/UserDashboard.jsx
import React from 'react';
import './UserDashboard.css';

const UserDashboard = () => (
  <div className="pharmacy-dashboard">
    {/* Header simple con información del usuario */}
    <header className="dashboard-header">
      <div className="user-info">
        <div className="avatar">
          <i className="bi bi-person-circle"></i>
        </div>
        <div>
          <h1>Bienvenido, Usuario</h1>
          <p>Cliente desde Enero 2023</p>
        </div>
      </div>
    </header>

    {/* Contenido principal simplificado */}
    <main className="dashboard-content">
      {/* Panel izquierdo */}
      <div className="panel profile-panel">
        <h2><i className="bi bi-person"></i> Mi Perfil</h2>
        <div className="profile-info">
          <p><i className="bi bi-envelope"></i> usuario@ejemplo.com</p>
          <p><i className="bi bi-shield-check"></i> Cuenta verificada</p>
          <p><i className="bi bi-star"></i> Cliente Preferente</p>
        </div>
        <button className="btn primary-btn">Editar Perfil</button>
      </div>

      {/* Panel derecho - Dividido en dos secciones */}
      <div className="panel data-panel">
        {/* Estadísticas simplificadas */}
        <div className="stats-section">
          <h2><i className="bi bi-graph-up"></i> Mis Estadísticas</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">8</div>
              <div className="stat-label">Recetas</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3</div>
              <div className="stat-label">Pedidos</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">2</div>
              <div className="stat-label">Recordatorios</div>
            </div>
          </div>
        </div>

        {/* Actividad reciente simplificada */}
        <div className="activity-section">
          <h2><i className="bi bi-clock-history"></i> Actividad Reciente</h2>
          <div className="activity-list">
            <div className="activity-item">
              <i className="bi bi-capsule"></i>
              <div>
                <strong>Recogida de medicamento</strong>
                <p>Hoy, 10:30 AM</p>
              </div>
            </div>
            <div className="activity-item">
              <i className="bi bi-cart-check"></i>
              <div>
                <strong>Compra completada</strong>
                <p>Ayer, 4:15 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Acciones rápidas simplificadas */}
      <div className="panel actions-panel">
        <h2><i className="bi bi-lightning-charge"></i> Acciones Rápidas</h2>
        <div className="quick-actions">
          <button className="action-btn">
            <i className="bi bi-prescription"></i>
            <span>Mis Recetas</span>
          </button>
          <button className="action-btn">
            <i className="bi bi-calendar-check"></i>
            <span>Recordatorios</span>
          </button>
          <button className="action-btn">
            <i className="bi bi-basket"></i>
            <span>Nuevo Pedido</span>
          </button>
          <button className="action-btn">
            <i className="bi bi-headset"></i>
            <span>Soporte</span>
          </button>
        </div>
      </div>
    </main>
  </div>
);

export default UserDashboard;