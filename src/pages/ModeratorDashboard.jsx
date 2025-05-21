// src/pages/ModeratorDashboard.jsx
import React from 'react';
import './ModeratorDashboard.css';

const ModeratorDashboard = () => (
  <div className="moderator-dashboard">
    {/* Header con estilo de gradiente */}
    <div className="dashboard-header">
      <div className="header-content">
        <div className="shield-icon">
          <svg viewBox="0 0 24 24" width="48" height="48">
            <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z"/>
          </svg>
        </div>
        <div className="header-text">
          <h1>Centro de Control del Moderador</h1>
          <p className="subtitle">Manteniendo la excelencia de nuestra comunidad</p>
        </div>
      </div>
    </div>

    {/* Tarjetas principales con diseño moderno */}
    <div className="dashboard-grid">
      {/* Tarjeta de Rol */}
      <div className="dashboard-card role-card">
        <div className="card-header">
          <div className="card-icon">
            <i className="bi bi-shield-shaded"></i>
          </div>
          <h3>Tu Rol en el Equipo</h3>
        </div>
        <div className="card-body">
          <p className="card-description">
            Eres el <strong>centrocampista</strong> de nuestra comunidad, conectando a los usuarios con los administradores y manteniendo el ritmo del juego limpio.
          </p>
          <div className="responsibilities">
            <div className="responsibility-item">
              <span className="check-icon"><i className="bi bi-check-circle"></i></span>
              <span>Supervisión de contenido en tiempo real</span>
            </div>
            <div className="responsibility-item">
              <span className="check-icon"><i className="bi bi-check-circle"></i></span>
              <span>Primera respuesta a incidencias</span>
            </div>
            <div className="responsibility-item">
              <span className="check-icon"><i className="bi bi-check-circle"></i></span>
              <span>Mediación en conflictos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta de Usuarios */}
      <div className="dashboard-card users-card">
        <div className="card-header">
          <div className="card-icon">
            <i className="bi bi-people-fill"></i>
          </div>
          <h3>Gestión de Jugadores</h3>
        </div>
        <div className="card-body">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-value">24</div>
              <div className="stat-label">Reportes hoy</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5</div>
              <div className="stat-label">Verificaciones</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">3</div>
              <div className="stat-label">Advertencias</div>
            </div>
          </div>
          <div className="user-actions">
            <button className="action-btn">
              <i className="bi bi-person-plus"></i> Verificar
            </button>
            <button className="action-btn">
              <i className="bi bi-chat-dots"></i> Advertir
            </button>
            <button className="action-btn">
              <i className="bi bi-flag"></i> Reportar
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
          <h3>Caja de Herramientas</h3>
        </div>
        <div className="card-body">
          <div className="tools-grid">
            <div className="tool-item">
              <i className="bi bi-list-check"></i>
              <span>Reportes</span>
            </div>
            <div className="tool-item">
              <i className="bi bi-chat-square-text"></i>
              <span>Comentarios</span>
            </div>
            <div className="tool-item">
              <i className="bi bi-file-earmark-text"></i>
              <span>Contenido</span>
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
          <h3>Partido en Directo</h3>
          <span className="badge">3 acciones requeridas</span>
        </div>
        <div className="card-body">
          <div className="activity-list">
            <div className="activity-item urgent">
              <div className="activity-icon">
                <i className="bi bi-exclamation-triangle"></i>
              </div>
              <div className="activity-content">
                <div className="activity-title">Comentario inapropiado</div>
                <div className="activity-meta">Usuario23 · Hace 15 min</div>
              </div>
              <button className="activity-action">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
            
            <div className="activity-item warning">
              <div className="activity-icon">
                <i className="bi bi-files"></i>
              </div>
              <div className="activity-content">
                <div className="activity-title">Contenido duplicado</div>
                <div className="activity-meta">Usuario45 · Hace 32 min</div>
              </div>
              <button className="activity-action">
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
            
            <div className="activity-item info">
              <div className="activity-icon">
                <i className="bi bi-person-check"></i>
              </div>
              <div className="activity-content">
                <div className="activity-title">Solicitud de verificación</div>
                <div className="activity-meta">Usuario12 · Hace 1 hora</div>
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