import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <h5><i className="bi bi-building-fill me-2"></i>Ménara Préfa</h5>
                        <p>
                            Première entreprise marocaine de BTP certifiée ISO 9001 v2008,
                            leader régional des matériaux de construction préfabriqués en
                            béton.
                        </p>

                        <h6 className="mt-4">Siège Social - Marrakech</h6>
                        <div className="contact-item">
                            <i className="bi bi-geo-alt"></i>
                            <span>Route d'Agadir, BP 4741 Hay Massira<br />Marrakech,
                                Maroc</span>
                        </div>
                        <div className="contact-item">
                            <i className="bi bi-telephone"></i>
                            <span>+212 524 49 99 00 à 15</span>
                        </div>
                        <div className="contact-item">
                            <i className="bi bi-envelope"></i>
                            <a href="mailto:infomarrakech@menara-prefa.ma" className="text-white">infomarrakech@menara-prefa.ma</a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5>Produits</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#" className="text-white-50">Agglos</a>
                            </li>
                            <li>
                                <a href="#" className="text-white-50">Hourdis & Planchers</a>
                            </li>
                            <li>
                                <a href="#" className="text-white-50">Béton Prêt</a>
                            </li>
                            <li>
                                <a href="#" className="text-white-50">Revêtements</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5>Entreprise</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/qhse" className="text-white-50">Politique QHSE</Link>
                            </li>
                            <li>
                                <Link to="/references" className="text-white-50">Références</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white-50">Contact</Link>
                            </li>
                            <li><a href="#" className="text-white-50">Numéro Vert</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <h5>Contact Commercial</h5>
                        <div className="contact-item">
                            <i className="bi bi-envelope"></i>
                            <a href="mailto:b.commercial@menara-prefa.ma" className="text-white">b.commercial@menara-prefa.ma</a>
                        </div>
                        <div className="contact-item">
                            <i className="bi bi-telephone-fill"></i>
                            <strong>Numéro Vert: 0801008010</strong>
                        </div>

                        <div className="mt-3">
                            <h6>Autres Implantations</h6>
                            <small className="text-white-50">
                                El Kelaâ des Sraghna • Safi • Béni Mellal • Khouribga<br />
                                +</small>
                        </div>
                    </div>
                </div>
            
            <hr className="border-secondary mt-4 mb-4" style={{opacity: 0.2}} />
            
            <div className="row">
                <div className="col-md-6 text-center text-md-start">
                    <p className="mb-0 text-white-50 small">&copy; 2025 Ménara Préfa. Tous droits réservés.</p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <p className="mb-0 text-white-50 small">Certifié ISO 9001 v2008</p>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
