import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { certifications } from '../data/certifications';
import { clients } from '../data/clients';

const Home: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="hero-content">
                                <h1>SOLUTIONS CONSTRUCTIVES</h1>
                                <p className="lead">Pavés, Agglos, Hourdis & Poutrelles</p>
                                <p className="mb-4">
                                    Première entreprise marocaine de BTP certifiée ISO 9001 v2008,
                                    leader régional des matériaux de construction préfabriqués en
                                    béton.
                                </p>
                                <div className="d-flex flex-wrap gap-3">
                                    <Link to="/contact" className="btn btn-primary btn-lg">
                                        <i className="bi bi-file-earmark-text me-2" aria-hidden="true"></i>Demander un
                                        devis
                                    </Link>
                                    <a href="#produits" className="btn btn-outline-light btn-lg">
                                        <i className="bi bi-grid me-2" aria-hidden="true"></i>Nos Produits
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Banner */}
            <section className="certifications-banner">
                <div className="container">
                    <div className="row text-center">
                        {certifications.map((cert) => (
                            <div key={cert.label} className="col-md-3">
                                <div className="certification-item">
                                    <i className={`bi ${cert.icon}`} aria-hidden="true"></i>
                                    <div>{cert.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Overview */}
            <section className="py-5" id="produits">
                <div className="container">
                    <h2 className="section-title text-center">Nos Familles de Produits</h2>

                    <div className="row">
                        {products.map((product) => (
                            <div key={product.title} className="col-lg-3 col-md-6 mb-4">
                                <div className="card product-card">
                                    <img
                                        src={product.image}
                                        className="card-img-top"
                                        alt={product.alt}
                                    />
                                    {product.badge && <span className="badge">{product.badge}</span>}
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <ul className="list-unstyled">
                                            {product.features.map((feat, idx) => (
                                                <li key={idx}>
                                                    <i className="bi bi-check-circle text-success me-2" aria-hidden="true"></i>
                                                    {feat.text}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to="/expertises" className="btn btn-outline-primary">En savoir plus</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center">Nos Moyens Logistiques</h2>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="logistics-item">
                                <i className="bi bi-truck" aria-hidden="true"></i>
                                <h5>Camions Malaxeurs</h5>
                                <p>Parc de 6/8/9/12/15 m³</p>
                                <div className="progress capacity-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} aria-label="Capacité camions malaxeurs">
                                    <div className="progress-bar" style={{ width: '85%' }}></div>
                                </div>
                                <small className="text-muted">Capacité optimale</small>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="logistics-item">
                                <i className="bi bi-arrow-up-circle" aria-hidden="true"></i>
                                <h5>Pompes à Béton</h5>
                                <p>29/36/44/56 mètres</p>
                                <div className="progress capacity-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} aria-label="Capacité pompes à béton">
                                    <div className="progress-bar" style={{ width: '90%' }}></div>
                                </div>
                                <small className="text-muted">Hauteur maximale</small>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="logistics-item">
                                <i className="bi bi-clipboard-data" aria-hidden="true"></i>
                                <h5>Distribution</h5>
                                <p>Camions plateau & semi</p>
                                <div className="progress capacity-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} aria-label="Couverture distribution">
                                    <div className="progress-bar" style={{ width: '75%' }}></div>
                                </div>
                                <small className="text-muted">Couverture territoriale</small>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="logistics-item">
                                <i className="bi bi-geo-alt" aria-hidden="true"></i>
                                <h5>Implantations</h5>
                                <p>Marrakech, Safi, El Kelaâ, Béni Mellal</p>
                                <div className="progress capacity-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} aria-label="Couverture implantations">
                                    <div className="progress-bar" style={{ width: '100%' }}></div>
                                </div>
                                <small className="text-muted">Réseau complet</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <h2 className="section-title text-center">Nos Clients de Référence</h2>

                    <div className="row g-4">
                        {clients.map((client, idx) => (
                            <div key={client.name} className="col-lg-3 col-md-4 col-6">
                                <div className={`card client-card-home${idx === 2 ? ' active' : ''}`}>
                                    <div className="card-body text-center">
                                        <h5 className="client-name">{client.name}</h5>
                                        <p className="client-subtitle">{client.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/references" className="btn btn-outline-primary">
                            <i className="bi bi-plus-lg me-2" aria-hidden="true"></i>Voir tous nos clients
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
