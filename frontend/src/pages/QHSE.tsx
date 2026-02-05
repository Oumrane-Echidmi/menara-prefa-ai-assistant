import React from 'react';
import '../assets/css/qhse.css';
import { Link } from 'react-router-dom';

const QHSE: React.FC = () => {
    return (
        <div className="animate-fade-in">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">QHSE</li>
                        </ol>
                    </nav>
                    <h1>Politique QHSE</h1>
                    <p className="lead mb-0">Qualité • Hygiène • Sécurité • Environnement</p>
                </div>
            </section>

            {/* ISO Certification Banner */}
            <section className="container">
                <div className="iso-banner text-center">
                    <i className="bi bi-award-fill icon"></i>
                    <h2>Certifiée ISO 9001 Version 2008</h2>
                    <p className="lead mb-0">Première entreprise marocaine de BTP certifiée pour la qualité de ses processus de production et de gestion</p>
                </div>
            </section>

            {/* Introduction QHSE */}
            <section className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4">
                        <h2 className="section-title">Notre Engagement QHSE</h2>
                        <p className="lead">Un système de management intégré pour l'excellence opérationnelle.</p>
                        <p>Chez Ménara Préfa, nous avons mis en place un système de management intégré qui couvre tous les aspects de la Qualité, de l'Environnement, de l'Hygiène et de la Sécurité au travail.</p>
                        <p>Notre politique QHSE s'articule autour de six axes stratégiques majeurs, guidant l'ensemble de nos actions et décisions au quotidien. Nous nous engageons à respecter toutes les exigences légales et réglementaires applicables, tout en poursuivant une démarche d'amélioration continue de nos performances.</p>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="row">
                            <div className="col-6 mb-3">
                                <div className="certification-badge">
                                    <i className="bi bi-shield-check"></i>
                                    <h5>Qualité</h5>
                                    <p className="text-muted mb-0">Conformité & Excellence</p>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="certification-badge">
                                    <i className="bi bi-heart-pulse"></i>
                                    <h5>Hygiène</h5>
                                    <p className="text-muted mb-0">Santé & Bien-être</p>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="certification-badge">
                                    <i className="bi bi-shield-fill-exclamation"></i>
                                    <h5>Sécurité</h5>
                                    <p className="text-muted mb-0">Protection & Prévention</p>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="certification-badge">
                                    <i className="bi bi-tree"></i>
                                    <h5>Environnement</h5>
                                    <p className="text-muted mb-0">Durable & Responsable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Six Axes Stratégiques */}
            <section className="container mb-5">
                <h2 className="section-title center text-center">Les Six Axes de Notre Politique QHSE</h2>
                
                <div className="row">
                    {/* Axe 1 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="axe-card">
                            <div className="axe-number">1</div>
                            <i className="bi bi-graph-up-arrow icon"></i>
                            <h4>Investissement Continu</h4>
                            <p>Investir dans les équipements de production et les infrastructures pour garantir la qualité et la performance de nos produits. Modernisation constante de nos outils de production pour rester à la pointe de la technologie.</p>
                        </div>
                    </div>

                    {/* Axe 2 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="axe-card">
                            <div className="axe-number">2</div>
                            <i className="bi bi-people icon"></i>
                            <h4>Partenaires de Confiance</h4>
                            <p>Collaborer avec des partenaires fiables et reconnus pour leur expertise. Établir des relations durables basées sur la confiance mutuelle et le respect des engagements contractuels.</p>
                        </div>
                    </div>

                    {/* Axe 3 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="axe-card">
                            <div className="axe-number">3</div>
                            <i className="bi bi-diagram-3 icon"></i>
                            <h4>Diversification des Produits</h4>
                            <p>Élargir notre gamme de produits pour répondre aux besoins variés de nos clients. Innovation constante pour proposer des solutions constructives adaptées aux évolutions du marché et aux nouvelles normes.</p>
                        </div>
                    </div>

                    {/* Axe 4 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="axe-card">
                            <div className="axe-number">4</div>
                            <i className="bi bi-geo-alt icon"></i>
                            <h4>Couverture Territoriale</h4>
                            <p>Assurer une présence stratégique sur l'ensemble du territoire avec nos sites de production et nos agences commerciales. Proximité avec nos clients pour un service rapide et efficace.</p>
                        </div>
                    </div>

                    {/* Axe 5 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="axe-card">
                            <div className="axe-number">5</div>
                            <i className="bi bi-mortarboard icon"></i>
                            <h4>Développement des Compétences</h4>
                            <p>Former et développer les compétences de nos équipes en continu. Investir dans le capital humain pour garantir l'expertise technique et la maîtrise des processus de production et de management.</p>
                        </div>
                    </div>

                    {/* Axe 6 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="axe-card">
                            <div className="axe-number">6</div>
                            <i className="bi bi-hand-thumbs-up icon"></i>
                            <h4>Engagements QHSE</h4>
                            <p>Respecter l'ensemble des exigences légales et réglementaires. S'engager dans une démarche d'amélioration continue de nos performances en matière de qualité, d'hygiène, de sécurité et d'environnement.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Lab Section */}
            <section className="container">
                <div className="quality-lab">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <i className="bi bi-clipboard-data" style={{ fontSize: '5rem', marginBottom: '20px' }}></i>
                            <h3>Qualité & Laboratoire Interne</h3>
                            <p className="lead">Notre laboratoire interne garantit le contrôle qualité de tous nos produits selon les normes les plus strictes.</p>
                        </div>
                        <div className="col-lg-6">
                            <div className="quality-feature">
                                <i className="bi bi-check-circle-fill"></i>
                                <div>
                                    <h5>Contrôle Systématique</h5>
                                    <p className="mb-0">Tests rigoureux à chaque étape de la production pour garantir la conformité aux normes marocaines et internationales.</p>
                                </div>
                            </div>
                            <div className="quality-feature">
                                <i className="bi bi-check-circle-fill"></i>
                                <div>
                                    <h5>Équipements de Pointe</h5>
                                    <p className="mb-0">Matériel de laboratoire moderne pour des analyses précises de résistance, de composition et de durabilité.</p>
                                </div>
                            </div>
                            <div className="quality-feature">
                                <i className="bi bi-check-circle-fill"></i>
                                <div>
                                    <h5>Traçabilité Complète</h5>
                                    <p className="mb-0">Suivi documenté de chaque lot de production pour assurer une traçabilité totale et faciliter les audits qualité.</p>
                                </div>
                            </div>
                            <div className="quality-feature">
                                <i className="bi bi-check-circle-fill"></i>
                                <div>
                                    <h5>Personnel Qualifié</h5>
                                    <p className="mb-0">Techniciens formés et certifiés pour garantir la fiabilité des tests et des analyses effectués.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="container">
                <div className="stats-section">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Conformité Normative</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="stat-item">
                                <span className="stat-number">ISO</span>
                                <span className="stat-label">9001 v2008</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Contrôle Qualité</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="stat-item">
                                <span className="stat-number">+15</span>
                                <span className="stat-label">Années d'Expertise</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commitments Section */}
            <section className="container mb-5">
                <h2 className="section-title center text-center">Nos Engagements</h2>
                
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <div className="commitment-item d-flex align-items-start">
                            <i className="bi bi-check-circle-fill"></i>
                            <div>
                                <strong>Conformité Légale</strong>
                                <p className="mb-0">Respecter l'ensemble des exigences légales et réglementaires applicables à nos activités.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="commitment-item d-flex align-items-start">
                            <i className="bi bi-check-circle-fill"></i>
                            <div>
                                <strong>Amélioration Continue</strong>
                                <p className="mb-0">Poursuivre une démarche constante d'optimisation de nos processus et de nos performances QHSE.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="commitment-item d-flex align-items-start">
                            <i className="bi bi-check-circle-fill"></i>
                            <div>
                                <strong>Protection de l'Environnement</strong>
                                <p className="mb-0">Minimiser notre impact environnemental par une gestion responsable des ressources et des déchets.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="commitment-item d-flex align-items-start">
                            <i className="bi bi-check-circle-fill"></i>
                            <div>
                                <strong>Sécurité du Personnel</strong>
                                <p className="mb-0">Garantir la sécurité et la santé de nos collaborateurs sur tous nos sites de production.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="commitment-item d-flex align-items-start">
                            <i className="bi bi-check-circle-fill"></i>
                            <div>
                                <strong>Satisfaction Client</strong>
                                <p className="mb-0">Fournir des produits de qualité supérieure qui répondent aux attentes et exigences de nos clients.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="commitment-item d-flex align-items-start">
                            <i className="bi bi-check-circle-fill"></i>
                            <div>
                                <strong>Formation et Sensibilisation</strong>
                                <p className="mb-0">Former et sensibiliser l'ensemble de nos équipes aux enjeux QHSE et aux bonnes pratiques.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="container mb-5">
                <h2 className="section-title center text-center">Notre Processus QHSE</h2>
                
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-icon">
                                    <i className="bi bi-clipboard-check"></i>
                                </div>
                                <div className="timeline-content">
                                    <h5>Planification</h5>
                                    <p className="mb-0">Définition des objectifs QHSE, identification des risques et planification des actions de prévention et d'amélioration.</p>
                                </div>
                            </div>
                            
                            <div className="timeline-item">
                                <div className="timeline-icon">
                                    <i className="bi bi-gear-fill"></i>
                                </div>
                                <div className="timeline-content">
                                    <h5>Mise en Œuvre</h5>
                                    <p className="mb-0">Déploiement des procédures et des processus QHSE sur l'ensemble de nos sites de production et agences.</p>
                                </div>
                            </div>
                            
                            <div className="timeline-item">
                                <div className="timeline-icon">
                                    <i className="bi bi-eye-fill"></i>
                                </div>
                                <div className="timeline-content">
                                    <h5>Surveillance et Contrôle</h5>
                                    <p className="mb-0">Suivi régulier des indicateurs de performance, audits internes et contrôles qualité systématiques.</p>
                                </div>
                            </div>
                            
                            <div className="timeline-item">
                                <div className="timeline-icon">
                                    <i className="bi bi-arrow-clockwise"></i>
                                </div>
                                <div className="timeline-content">
                                    <h5>Amélioration</h5>
                                    <p className="mb-0">Analyse des résultats, identification des opportunités d'amélioration et mise en place des actions correctives nécessaires.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QHSE;
