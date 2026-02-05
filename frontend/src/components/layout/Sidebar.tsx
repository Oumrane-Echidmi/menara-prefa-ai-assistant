import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    // Helper to check active link
    const isActive = (path: string) => location.pathname === path ? 'active' : '';

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="logo-container">
                    <Link to="/">
                        <img
                            src="/assets/img/logo (1).svg"
                            alt="Ménara Préfa"
                            className="sidebar-logo"
                        />
                    </Link>
                </div>
                <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation">
                    <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
                </button>
            </div>

            <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="nav-line"></div>
                <ul className="nav-list">
                    <li className={`nav-item ${isActive('/')}`}>
                        <div className="diamond red-diamond"></div>
                        <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>
                    </li>
                    <li className={`nav-item ${isActive('/expertises')}`}>
                        <div className="diamond"></div>
                        <Link to="/expertises" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Nos expertises</Link>
                    </li>
                    <li className={`nav-item ${isActive('/references')}`}>
                        <div className="diamond"></div>
                        <Link to="/references" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Nos marques</Link>
                    </li>
                    <li className={`nav-item ${isActive('/qhse')}`}>
                        <div className="diamond"></div>
                        <Link to="/qhse" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>R.S.E. & D.D.</Link>
                    </li>
                    <li className={`nav-item ${isActive('/contact')}`}>
                        <div className="diamond"></div>
                        <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    </li>
                        <li className={`nav-item ${isActive('/chatAI')}`}>
                        <div className="diamond"></div>
                        <Link to="/chatAI" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Assistant IA</Link>
                    </li>
                </ul>
            </div>

            <div className="sidebar-footer">
                <div className="footer-logos mb-3">
                    <small className="text-muted" style={{ fontSize: '0.6rem' }}>Ménara Holding</small>
                </div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/menaraprefaofficiel/" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-twitter"></i></a>
                    <a href="https://www.linkedin.com/company/m%C3%A9nara-pr%C3%A9fa/?originalSubdomain=ma" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a href="https://www.instagram.com/menara.prefa.officiel/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
                    <Link to="/chatAI" className="chatbot-icon" title="Chatbot AI">
                        <i className="bi bi-robot"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
