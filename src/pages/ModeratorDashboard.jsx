// src/pages/ModeratorDashboard.jsx
import React from 'react';
import './ModeratorDashboard.css';

const ModeratorDashboard = () => (
  <div className="moderator-dashboard">
    {/* Header con estilo farmacéutico */}
    <div className="dashboard-header">
      <div className="header-content">
        <div className="pharmacy-icon">
          <svg viewBox="0 0 24 24" width="48" height="48">
            <path fill="currentColor" d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z"/>
            <path fill="currentColor" d="M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3z"/>
          </svg>
        </div>
        <div className="header-text">
          <h1>Panel de Control de Farmacia</h1>
          <p className="subtitle">Supervisión y gestión de medicamentos</p>
        </div>
      </div>
    </div>

    {/* Tarjetas principales con diseño farmacéutico */}
    <div className="dashboard-grid">
      {/* Tarjeta de Rol */}
      <div className="dashboard-card role-card">
        <div className="card-header">
          <div className="card-icon">
            <i className="bi bi-shield-check"></i>
          </div>
          <h3>Tu Rol en la Farmacia</h3>
        </div>
        <div className="card-body">
          <p className="card-description">
            Eres el <strong>supervisor</strong> de nuestra farmacia, garantizando la calidad del servicio y supervisando el inventario.
          </p>
          <div className="responsibilities">
            <div className="responsibility-item">
              <span className="check-icon"><i className="bi bi-check-circle"></i></span>
              <span>Control de medicamentos</span>
            </div>
            <div className="responsibility-item">
              <span className="check-icon"><i className="bi bi-check-circle"></i></span>
              <span>Atención a consultas</span>
            </div>
            <div className="responsibility-item">
              <span className="check-icon"><i className="bi bi-check-circle"></i></span>
              <span>Gestión de pedidos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta de Usuarios */}
      <div className="dashboard-card users-card">
        <div className="card-header">
          <div className="card-icon">
            <i className="bi bi-people"></i>
          </div>
          <h3>Gestión de Pacientes</h3>
        </div>
        <div className="card-body">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-value">24</div>
              <div className="stat-label">Consultas hoy</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5</div>
              <div className="stat-label">Recetas</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3</div>
              <div className="stat-label">Entregas</div>
            </div>
          </div>
          <div className="user-actions">
            <button className="action-btn">
              <i className="bi bi-clipboard-plus"></i> Receta
            </button>
            <button className="action-btn">
              <i className="bi bi-chat-dots"></i> Consulta
            </button>
            <button className="action-btn">
              <i className="bi bi-box-seam"></i> Entrega
            </button>
          </div>
        </div>
      </div>

      {/* Tarjeta de Herramientas */}
      <div className="dashboard-card tools-card">
        <div className="card-header">
          <div className="card-icon">
            <i className="bi bi-tools"></i>
          </div>
          <h3>Herramientas</h3>
        </div>
        <div className="card-body">
          <div className="tools-grid">
            <div className="tool-item">
              <i className="bi bi-journal-medical"></i>
              <span>Recetas</span>
            </div>
            <div className="tool-item">
              <i className="bi bi-capsule"></i>
              <span>Medicamentos</span>
            </div>
            <div className="tool-item">
              <i className="bi bi-shop"></i>
              <span>Inventario</span>
            </div>
            <div className="tool-item">
              <i className="bi bi-graph-up"></i>
              <span>Estadísticas</span>
            </div>
            <div className="tool-item">
              <i className="bi bi-archive"></i>
              <span>Historial</span>
            </div>
            <div className="tool-item">
              <i className="bi bi-gear"></i>
              <span>Ajustes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Actividad Reciente */}
      <div className="dashboard-card activity-card">
        <div className="card-header">
          <div className="card-icon">
            <i className="bi bi-activity"></i>
          </div>
          <h3>Actividad Reciente</h3>
          <span className="badge">3 pendientes</span>
        </div>
        <div className="card-body">
          <div className="activity-list">
            <div className="activity-item urgent">
              <div className="activity-icon">
                <i className="bi bi-exclamation-circle"></i>
              </div>
              <div className="activity-content">
                <div className="activity-title">Medicamento agotado</div>
                <div className="activity-meta">Ibuprofeno 600mg · Hace 15 min</div>
              </div>
              <button className="activity-action">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
            
            <div className="activity-item warning">
              <div className="activity-icon">
                <i className="bi bi-clock"></i>
              </div>
              <div className="activity-content">
                <div className="activity-title">Próxima a vencer</div>
                <div className="activity-meta">Amoxicilina · 30 días</div>
              </div>
              <button className="activity-action">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
            
            <div className="activity-item info">
              <div className="activity-icon">
                <i className="bi bi-envelope"></i>
              </div>
              <div className="activity-content">
                <div className="activity-title">Nueva consulta</div>
                <div className="activity-meta">María López · Hace 1 hora</div>
              </div>
              <button className="activity-action">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
          <button className="view-all-btn">
            Ver todo el historial <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ModeratorDashboard;