import React from 'react';
import { Link } from 'react-router-dom';

const Expertises: React.FC = () => {
    return (
        <>
            {/* Page Header */}
            <section className="page-header bg-light py-5">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Nos Expertises</li>
                        </ol>
                    </nav>
                    <h1 className="display-4 fw-bold">Nos Domaines d'Expertise</h1>
                    <p className="lead">L'alliance de la technologie et du savoir-faire pour la construction de demain.</p>
                </div>
            </section>

            {/* Expertise 1: Industrial Prefab */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="p-4">
                                <div className="bg-light d-flex align-items-center justify-content-center border rounded" style={{ height: '300px' }}>
                                    <i className="bi bi-bricks text-danger display-1"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="section-title">Préfabrication Industrielle</h2>
                            <p className="lead">Une capacité de production capable de répondre aux grands chantiers nationaux.</p>
                            <p>Ménara Préfa dispose de 5 unités de production réparties stratégiquement. Nos lignes de production automatisées garantissent une régularité dimensionnelle et une résistance mécanique optimales pour tous nos produits : agglos, hourdis, pavés, bordures, et tuyaux d'assainissement.</p>
                            <ul className="list-unstyled mt-4">
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-danger me-2"></i>Unités 100% automatisées</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-danger me-2"></i>Contrôle qualité à chaque étape</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-danger me-2"></i>Large gamme de moules et formats</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise 2: BPE */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="p-4">
                                <div className="bg-white d-flex align-items-center justify-content-center border rounded" style={{ height: '300px' }}>
                                    <i className="bi bi-truck text-danger display-1"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="section-title">Béton Prêt à l'Emploi (BPE)</h2>
                            <p className="lead">Des centrales à béton performantes pour vos coulages sur site.</p>
                            <p>Nous fournissons des bétons de haute technicité (BPS, bétons spéciaux, bétons désactivés) livrés par notre flotte de camions malaxeurs géolocalisés. Nos centrales sont certifiées et capables de grands volumes de production journalière.</p>
                            <ul className="list-unstyled mt-4">
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-danger me-2"></i>Centrales à grande capacité</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-danger me-2"></i>Laboratoire mobile sur site</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-danger me-2"></i>Ponctualité et cadence de livraison</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise 3: Lab & Quality */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="p-4">
                                <div className="bg-light d-flex align-items-center justify-content-center border rounded" style={{ height: '300px' }}>
                                    <i className="bi bi-clipboard-data text-danger display-1"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="section-title">R&D et Contrôle Qualité</h2>
                            <p className="lead">L'innovation au cœur de notre stratégie.</p>
                            <p>Notre laboratoire interne, équipé des dernières technologies, effectue plus de 500 essais par jour. Nous développons de nouvelles formulations de béton pour améliorer la durabilité, l'empreinte carbone et les performances thermiques de nos produits.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Expertises;
