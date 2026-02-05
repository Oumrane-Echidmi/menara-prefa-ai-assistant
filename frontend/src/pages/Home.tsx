import React from 'react';
import { Link } from 'react-router-dom';

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
                                        <i className="bi bi-file-earmark-text me-2"></i>Demander un
                                        devis
                                    </Link>
                                    <a href="#produits" className="btn btn-outline-light btn-lg">
                                        <i className="bi bi-grid me-2"></i>Nos Produits
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
                        <div className="col-md-3">
                            <div className="certification-item">
                                <i className="bi bi-award"></i>
                                <div>ISO 9001 v2008</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="certification-item">
                                <i className="bi bi-shield-check"></i>
                                <div>NM 10.1.009</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="certification-item">
                                <i className="bi bi-trophy"></i>
                                <div>Leader Régional</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="certification-item">
                                <i className="bi bi-gear"></i>
                                <div>Qualité Garantie</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Overview */}
            <section className="py-5" id="produits">
                <div className="container">
                    <h2 className="section-title text-center">Nos Familles de Produits</h2>

                    <div className="row">
                        {/* Agglos */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card product-card">
                                <img
                                    src="/assets/img/agglos.jpeg"
                                    className="card-img-top"
                                    alt="Agglos béton"
                                />
                                <span className="badge">Nouveau</span>
                                <div className="card-body">
                                    <h5 className="card-title">Agglos</h5>
                                    <p className="card-text">
                                        Capacité 220 000 pièces/jour. Gamme diversifiée incluant
                                        l'agglo à bancher pour voiles sans coffrage.
                                    </p>
                                    <ul className="list-unstyled">
                                        <li>
                                            <i className="bi bi-check-circle text-success me-2"></i>AG7,
                                            AG10, AG15, AG20, AG25
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle text-success me-2"></i>Agglo
                                            à bancher (AG-B)
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle text-success me-2"></i>
                                            Conforme NM 10.1.009
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-outline-primary">En savoir plus</a>
                                </div>
                            </div>
                        </div>

                        {/* Hourdis & Planchers */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card product-card">
                                <img
                                    src="/assets/img/hourdis.jpeg"
                                    className="card-img-top"
                                    alt="hourdis"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Hourdis & Planchers</h5>
                                    <p className="card-text">
                                        Poutrelles précontraintes PAP & PAP+. Capacité ~24 000
                                        ml/jour soit ~15 000 m² planchers.
                                    </p>
                                    <ul className="list-unstyled">
                                        <li>
                                            <i className="bi bi-check-circle text-success me-2"></i>H8,
                                            H12, H16, H20, H25, H30
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle text-success me-2"></i>
                                            Panneaux treillis soudés
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle text-success me-2"></i>
                                            Qualité & rigidité
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-outline-primary">En savoir plus</a>
                                </div>
                            </div>
                        </div>

                        {/* Béton prêt à l'emploi */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card product-card">
                                <img
                                    src="/assets/img/beton.jpeg"
                                    className="card-img-top"
                                    alt="béton"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Béton Prêt à l'Emploi</h5>
                                    <p className="card-text">
                                        BCP/BPS, capacité théorique &gt;100 m³/h. Sites Marrakech, El
                                        Kelaâ, Béni Mellal.
                                    </p>
                                    <ul className="list-unstyled">
                                        <li>
                                            <i className="bi bi-check-circle text-success me-2"></i>Béton
                                            cellulaire, léger, lourd
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle text-success me-2"></i>Béton
                                            polis, teintés
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle text-success me-2"></i>
                                            Mortier projeté
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-outline-primary">En savoir plus</a>
                                </div>
                            </div>
                        </div>

                        {/* Revêtements */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <div className="card product-card">
                                <img
                                    src="/assets/img/rds.jpeg"
                                    className="card-img-top"
                                    alt="Revêtements de sol"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Revêtements de Sol</h5>
                                    <p className="card-text">
                                        Pavés, dalles, bordures, caniveaux. Familles TM-F, TS-F,
                                        TM-B, TM-V. Large palette de couleurs.
                                    </p>
                                    <ul className="list-unstyled">
                                        <li>
                                            <i className="bi bi-check-circle text-success me-2"></i>
                                            Antidérapant & drainage
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle text-success me-2"></i>Facile
                                            entretien
                                        </li>
                                        <li>
                                            <i className="bi bi-check-circle text-success me-2"></i>
                                            Réutilisable
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-outline-primary">En savoir plus</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="section-title text-center">Nos Moyens Logistiques</h2>

                    <div className="row">
                        <div className="col-md-3">
                            <div className="logistics-item">
                                <i className="bi bi-truck"></i>
                                <h5>Camions Malaxeurs</h5>
                                <p>Parc de 6/8/9/12/15 m³</p>
                                <div className="progress capacity-bar">
                                    <div className="progress-bar" style={{ width: '85%' }}></div>
                                </div>
                                <small className="text-muted">Capacité optimale</small>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="logistics-item">
                                <i className="bi bi-arrow-up-circle"></i>
                                <h5>Pompes à Béton</h5>
                                <p>29/36/44/56 mètres</p>
                                <div className="progress capacity-bar">
                                    <div className="progress-bar" style={{ width: '90%' }}></div>
                                </div>
                                <small className="text-muted">Hauteur maximale</small>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="logistics-item">
                                <i className="bi bi-clipboard-data"></i>
                                <h5>Distribution</h5>
                                <p>Camions plateau & semi</p>
                                <div className="progress capacity-bar">
                                    <div className="progress-bar" style={{ width: '75%' }}></div>
                                </div>
                                <small className="text-muted">Couverture territoriale</small>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="logistics-item">
                                <i className="bi bi-geo-alt"></i>
                                <h5>Implantations</h5>
                                <p>Marrakech, Safi, El Kelaâ, Béni Mellal</p>
                                <div className="progress capacity-bar">
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
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="card client-card-home">
                                <div className="card-body text-center">
                                    <h5 className="client-name">SOMAGEC</h5>
                                    <p className="client-subtitle">SOMAGEC</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="card client-card-home">
                                <div className="card-body text-center">
                                    <h5 className="client-name">TGCC</h5>
                                    <p className="client-subtitle">TGCC</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="card client-card-home active">
                                <div className="card-body text-center">
                                    <h5 className="client-name">BYMARO</h5>
                                    <p className="client-subtitle">BYMARO</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="card client-card-home">
                                <div className="card-body text-center">
                                    <h5 className="client-name">S.G.T.M</h5>
                                    <p className="client-subtitle">S.G.T.M</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="card client-card-home">
                                <div className="card-body text-center">
                                    <h5 className="client-name">SOGEA Maroc</h5>
                                    <p className="client-subtitle">SOGEA Maroc</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="card client-card-home">
                                <div className="card-body text-center">
                                    <h5 className="client-name">STAM</h5>
                                    <p className="client-subtitle">STAM</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="card client-card-home">
                                <div className="card-body text-center">
                                    <h5 className="client-name">COVEC</h5>
                                    <p className="client-subtitle">COVEC</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="card client-card-home">
                                <div className="card-body text-center">
                                    <h5 className="client-name">CGI Maroc</h5>
                                    <p className="client-subtitle">CGI Maroc</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/references" className="btn btn-outline-primary">
                            <i className="bi bi-plus-lg me-2"></i>Voir tous nos clients
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
