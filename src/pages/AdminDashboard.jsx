import React, { useEffect, useState } from "react";
import axios from "axios";
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user"))?.token;
        const response = await axios.get(`${process.env.REACT_APP_BACK_URL}/api/admin/dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data);
      } catch (err) {
        console.error("Error fetching dashboard data", err);
        setError("Error al cargar los datos del dashboard");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Datos de ejemplo
  const sampleData = {
    totalUsers: 1243,
    activeToday: 842,
    newRegistrations: 28,
    adminCount: 5,
    recentActivity: [
      { username: "admin1", role: "admin", action: "Actualizó configuración del sistema", timestamp: "2023-05-15T10:30:00Z" },
      { username: "user45", role: "usuario", action: "Registro completado", timestamp: "2023-05-15T09:15:00Z" },
      { username: "mod2", role: "moderador", action: "Eliminó contenido inapropiado", timestamp: "2023-05-14T16:45:00Z" }
    ]
  };

  return (
    <div className="admin-dashboard container-fluid px-4">
      {/* Nuevo encabezado con estilo Barça */}
      <div className="dashboard-header">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}>
                  <span style={{
                    color: '#A50044',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                  }}>FCB</span>
                </div>
              </div>
              <div>
                <h1 className="mb-1">Panel de Control</h1>
                <p className="subtitle mb-0">Administración del sistema</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <button className="btn btn-light me-2">
              <i className="bi bi-bell-fill text-danger"></i>
            </button>
            <button className="btn btn-light">
              <i className="bi bi-person-circle text-primary"></i>
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5 my-5">
          <div className="spinner-barca" style={{width: '3rem', height: '3rem'}}></div>
          <p className="mt-3 fs-5 text-muted">Cargando datos administrativos...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger rounded-lg">
          <i className="bi bi-exclamation-octagon-fill me-2"></i>
          {error}
        </div>
      ) : (
        <>
          {/* Estadísticas Principales - Rediseñadas */}
          <div className="row g-4 mb-4">
            {[
              { title: "Usuarios Totales", value: data?.totalUsers || sampleData.totalUsers, 
                change: "+12%", icon: "bi-people-fill", color: "text-primary" },
              { title: "Activos Hoy", value: data?.activeToday || sampleData.activeToday, 
                change: "+8%", icon: "bi-activity", color: "text-success" },
              { title: "Nuevos Registros", value: data?.newRegistrations || sampleData.newRegistrations, 
                change: "+3", icon: "bi-person-plus", color: "text-info" },
              { title: "Administradores", value: data?.adminCount || sampleData.adminCount, 
                change: "Acceso completo", icon: "bi-shield-check", color: "text-warning" }
            ].map((stat, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <div className="stat-card card-hover-effect h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="text-muted mb-2">{stat.title}</h6>
                        <h2 className="mb-0">{stat.value}</h2>
                        <small className={`${stat.color} fw-semibold`}>{stat.change}</small>
                      </div>
                      <div className="icon-container">
                        <i className={`bi ${stat.icon} fs-4 ${stat.color}`}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contenido Principal - Dos columnas */}
          <div className="row g-4">
            {/* Tabla de Actividad Reciente */}
            <div className="col-lg-8">
              <div className="card card-hover-effect h-100">
                <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 fw-bold">
                    <i className="bi bi-list-check me-2 text-danger"></i>
                    Actividad Reciente
                  </h5>
                  <div>
                    <button className="btn btn-barca-outline btn-sm">
                      <i className="bi bi-arrow-clockwise me-1"></i> Actualizar
                    </button>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table barca-table mb-0">
                      <thead>
                        <tr>
                          <th>Usuario</th>
                          <th>Rol</th>
                          <th>Acción</th>
                          <th>Fecha/Hora</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {(data?.recentActivity || sampleData.recentActivity).map((activity, index) => (
                          <tr key={index}>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="avatar-sm bg-light rounded-circle me-2 d-flex align-items-center justify-content-center">
                                  {activity.username.charAt(0).toUpperCase()}
                                </div>
                                <span className="fw-semibold">{activity.username}</span>
                              </div>
                            </td>
                            <td>
                              <span className={`badge badge-barca ${
                                activity.role === 'admin' ? 'badge-admin' : 
                                activity.role === 'moderador' ? 'badge-moderador' : 'badge-usuario'
                              }`}>
                                {activity.role}
                              </span>
                            </td>
                            <td>{activity.action}</td>
                            <td>{new Date(activity.timestamp).toLocaleString()}</td>
                            <td className="text-end">
                              <button className="btn btn-sm btn-light">
                                <i className="bi bi-three-dots"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Acciones Rápidas */}
            <div className="col-lg-4">
              <div className="card card-hover-effect h-100">
                <div className="card-header bg-white border-0">
                  <h5 className="mb-0 fw-bold">
                    <i className="bi bi-lightning-charge-fill me-2 text-warning"></i>
                    Acciones Rápidas
                  </h5>
                </div>
                <div className="card-body">
                  <div className="d-grid gap-3">
                    <button className="btn btn-barca text-start py-3 d-flex align-items-center">
                      <i className="bi bi-person-plus-fill me-3 fs-5"></i>
                      <div>
                        <div className="fw-bold">Crear Usuario</div>
                        <small className="opacity-75">Nuevo registro</small>
                      </div>
                    </button>
                    
                    <button className="btn btn-barca-outline text-start py-3 d-flex align-items-center">
                      <i className="bi bi-gear-fill me-3 fs-5"></i>
                      <div>
                        <div className="fw-bold">Configuración</div>
                        <small className="opacity-75">Ajustes del sistema</small>
                      </div>
                    </button>
                    
                    <button className="btn btn-barca-outline text-start py-3 d-flex align-items-center">
                      <i className="bi bi-shield-lock me-3 fs-5"></i>
                      <div>
                        <div className="fw-bold">Permisos</div>
                        <small className="opacity-75">Gestión de accesos</small>
                      </div>
                    </button>
                    
                    <button className="btn btn-barca-outline text-start py-3 d-flex align-items-center">
                      <i className="bi bi-graph-up me-3 fs-5"></i>
                      <div>
                        <div className="fw-bold">Reportes</div>
                        <small className="opacity-75">Generar análisis</small>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gráficos y Alertas */}
          <div className="row g-4 mt-3">
            <div className="col-md-6">
              <div className="card card-hover-effect h-100">
                <div className="card-header bg-white border-0">
                  <h5 className="mb-0 fw-bold">
                    <i className="bi bi-pie-chart-fill me-2 text-primary"></i>
                    Distribución de Usuarios
                  </h5>
                </div>
                <div className="card-body">
                  <div className="chart-placeholder-barca">
                    <div className="text-center">
                      <div className="spinner-border text-light mb-2" role="status"></div>
                      <p className="mb-0">Cargando gráfico...</p>
                    </div>
                  </div>
                  <div className="row mt-4 text-center">
                    <div className="col-4">
                      <div className="h4 text-primary">72%</div>
                      <small className="text-muted">Usuarios</small>
                    </div>
                    <div className="col-4">
                      <div className="h4 text-warning">18%</div>
                      <small className="text-muted">Moderadores</small>
                    </div>
                    <div className="col-4">
                      <div className="h4 text-danger">10%</div>
                      <small className="text-muted">Administradores</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card card-hover-effect h-100">
                <div className="card-header bg-white border-0">
                  <h5 className="mb-0 fw-bold">
                    <i className="bi bi-exclamation-triangle-fill me-2 text-warning"></i>
                    Alertas del Sistema
                  </h5>
                </div>
                <div className="card-body">
                  <div className="alert alert-barca alert-warning mb-3">
                    <div className="d-flex">
                      <i className="bi bi-exclamation-triangle-fill me-3 fs-4"></i>
                      <div>
                        <h6 className="alert-heading mb-1">Espacio en disco</h6>
                        <p className="mb-0 small">El 85% del almacenamiento está en uso</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="alert alert-barca alert-danger mb-3">
                    <div className="d-flex">
                      <i className="bi bi-shield-exclamation me-3 fs-4"></i>
                      <div>
                        <h6 className="alert-heading mb-1">Seguridad</h6>
                        <p className="mb-0 small">3 intentos de acceso no autorizado</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="alert alert-barca alert-info">
                    <div className="d-flex">
                      <i className="bi bi-arrow-up-circle-fill me-3 fs-4"></i>
                      <div>
                        <h6 className="alert-heading mb-1">Actualización</h6>
                        <p className="mb-0 small">Nueva versión disponible (v2.3.1)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;