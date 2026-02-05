import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/references.css';

const References: React.FC = () => {
    return (
        <div className="animate-fade-in">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Références</li>
                        </ol>
                    </nav>
                    <h1>Nos Références</h1>
                    <p className="lead mb-0">Ils nous ont fait confiance pour leurs projets de construction</p>
                </div>
            </section>

            {/* Stats Banner */}
            <section className="container">
                <div className="stats-banner">
                    <div className="row">
                        <div className="col-md-3 col-6 mb-3 mb-md-0">
                            <div className="stat-item">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Projets Réalisés</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3 mb-md-0">
                            <div className="stat-item">
                                <span className="stat-number">200+</span>
                                <span className="stat-label">Clients Satisfaits</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="stat-item">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">Années d'Expérience</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="stat-item">
                                <span className="stat-number">5</span>
                                <span className="stat-label">Sites de Production</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients Logos */}
            <section className="container mb-5">
                <h2 className="section-title center text-center">Nos Clients de Référence</h2>
                
                <div className="row g-4">
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-card">
                            <div className="logo-placeholder">
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--dark-anthracite)' }}>SOMAGEC</span>
                            </div>
                            <h5>SOMAGEC</h5>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-card">
                            <div className="logo-placeholder">
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--dark-anthracite)' }}>TGCC</span>
                            </div>
                            <h5>TGCC</h5>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-card">
                            <div className="logo-placeholder">
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--dark-anthracite)' }}>BYMARO</span>
                            </div>
                            <h5>BYMARO</h5>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-card">
                            <div className="logo-placeholder">
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--dark-anthracite)' }}>S.G.T.M</span>
                            </div>
                            <h5>S.G.T.M</h5>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-card">
                            <div className="logo-placeholder">
                                <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--dark-anthracite)' }}>SOGEA Maroc</span>
                            </div>
                            <h5>SOGEA Maroc</h5>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-card">
                            <div className="logo-placeholder">
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--dark-anthracite)' }}>STAM</span>
                            </div>
                            <h5>STAM</h5>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-card">
                            <div className="logo-placeholder">
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--dark-anthracite)' }}>COVEC</span>
                            </div>
                            <h5>COVEC</h5>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-4 col-6">
                        <div className="client-card">
                            <div className="logo-placeholder">
                                <span style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--dark-anthracite)' }}>CGI Maroc</span>
                            </div>
                            <h5>CGI Maroc</h5>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sectors */}
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="section-title center text-center">Secteurs d'Activité</h2>
                    
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="sector-item">
                                <i className="bi bi-buildings"></i>
                                <h5>Immobilier</h5>
                                <p>Résidences, immeubles, complexes résidentiels</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="sector-item">
                                <i className="bi bi-hammer"></i>
                                <h5>Travaux Publics</h5>
                                <p>Routes, ponts, infrastructures urbaines</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="sector-item">
                                <i className="bi bi-building"></i>
                                <h5>Commercial</h5>
                                <p>Centres commerciaux, bureaux, hôtels</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="sector-item">
                                <i className="bi bi-hospital"></i>
                                <h5>Institutionnel</h5>
                                <p>Écoles, hôpitaux, administrations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Showcase */}
            <section className="container my-5">
                <h2 className="section-title center text-center">Projets Réalisés</h2>
                
                <div className="row g-4">
                    {/* Project 1 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="project-card h-100">
                            <div className="project-image-container" style={{ backgroundColor: '#95a5a6', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                 <img src="/assets/img/agglos.jpeg" alt="Résidences Al Manzah" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="project-body p-3 bg-white border-bottom border-start border-end rounded-bottom">
                                <h5 className="fw-bold text-dark">Résidences Al Manzah</h5>
                                <div className="project-meta text-muted mb-2">
                                    <i className="bi bi-geo-alt-fill text-danger me-2"></i>Marrakech
                                </div>
                                <div className="project-meta text-muted mb-2">
                                    <i className="bi bi-calendar3 text-danger me-2"></i>2023
                                </div>
                                <div className="mt-3">
                                    <span className="badge bg-danger">Agglos</span>
                                    <span className="badge bg-danger">Hourdis</span>
                                    <span className="badge bg-danger">Béton</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Project 2 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="project-card h-100">
                            <div className="project-image-container" style={{ backgroundColor: '#95a5a6', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                 <img src="/assets/img/beton.jpeg" alt="Voie Rapide Safi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                             <div className="project-body p-3 bg-white border-bottom border-start border-end rounded-bottom">
                                <h5 className="fw-bold"><a href="#" className="text-dark text-decoration-none">Voie Rapide Safi</a></h5>
                                <div className="project-meta text-muted mb-2">
                                    <i className="bi bi-geo-alt-fill text-danger me-2"></i>Safi
                                </div>
                                <div className="project-meta text-muted mb-2">
                                    <i className="bi bi-calendar3 text-danger me-2"></i>2022
                                </div>
                                <div className="mt-3">
                                    <span className="badge bg-danger">Béton Prêt</span>
                                    <span className="badge bg-danger">Pavés</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Project 3 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="project-card h-100">
                            <div className="project-image-container" style={{ backgroundColor: '#95a5a6', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                <img src="/assets/img/rds.jpeg" alt="Centre Commercial Atlas" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="project-body p-3 bg-white border-bottom border-start border-end rounded-bottom">
                                <h5 className="fw-bold text-dark">Centre Commercial Atlas</h5>
                                <div className="project-meta text-muted mb-2">
                                    <i className="bi bi-geo-alt-fill text-danger me-2"></i>Béni Mellal
                                </div>
                                <div className="project-meta text-muted mb-2">
                                    <i className="bi bi-calendar3 text-danger me-2"></i>2024
                                </div>
                                <div className="mt-3">
                                    <span className="badge bg-danger">Agglos</span>
                                    <span className="badge bg-danger">Planchers</span>
                                    <span className="badge bg-danger">Revêtements</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="container mb-5">
                <h2 className="section-title center text-center">Témoignages</h2>
                
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="testimonial-box">
                            <p className="quote">
                                Ménara Préfa a fourni des matériaux de qualité exceptionnelle pour notre projet résidentiel. Leur professionnalisme et leur respect des délais ont été remarquables. Nous recommandons vivement leurs services.
                            </p>
                            <div className="author">
                                <div className="author-icon">
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="author-info">
                                    <h6>Ahmed Benali</h6>
                                    <p>Directeur Technique, SOMAGEC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 mb-4">
                        <div className="testimonial-box">
                            <p className="quote">
                                Partenaire de confiance depuis plusieurs années. La qualité constante de leurs produits et leur réactivité font de Ménara Préfa un acteur incontournable dans le secteur du BTP au Maroc.
                            </p>
                            <div className="author">
                                <div className="author-icon">
                                    <i className="bi bi-person"></i>
                                </div>
                                <div className="author-info">
                                    <h6>Fatima El Amrani</h6>
                                    <p>Chef de Projet, TGCC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container">
                <div className="cta-section">
                    <h3>Rejoignez nos clients satisfaits</h3>
                    <p>Confiez-nous votre prochain projet de construction</p>
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        <i className="bi bi-envelope me-2"></i>Demander un devis
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default References;
