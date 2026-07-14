import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, socialLinks } from '../../data/navigation';

const Sidebar: React.FC = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActive = (path: string) => location.pathname === path ? 'active' : '';

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="logo-container">
                    <Link to="/">
                        <img
                            src="/assets/img/logo (1).svg"
                            alt="Ménara Préfa - Accueil"
                            className="sidebar-logo"
                        />
                    </Link>
                </div>
                <button
                    className="mobile-toggle"
                    onClick={toggleMobileMenu}
                    aria-label="Ouvrir le menu de navigation"
                    aria-expanded={isMobileMenuOpen}
                >
                    <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`} aria-hidden="true"></i>
                </button>
            </div>

            <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Navigation principale">
                <div className="nav-line"></div>
                <ul className="nav-list">
                    {navLinks.map((link, index) => (
                        <li key={link.path} className={`nav-item ${isActive(link.path)}`}>
                            <div className={`diamond ${index === 0 ? 'red-diamond' : ''}`}></div>
                            <Link
                                to={link.path}
                                className="nav-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="sidebar-footer">
                <div className="footer-logos mb-3">
                    <small className="text-muted" style={{ fontSize: '0.6rem' }}>Ménara Holding</small>
                </div>
                <div className="social-icons">
                    {socialLinks.map((social) => (
                        <a
                            key={social.icon}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.label}
                        >
                            <i className={`bi ${social.icon}`} aria-hidden="true"></i>
                        </a>
                    ))}
                    <Link to="/chatAI" className="chatbot-icon" aria-label="Assistant IA Ménara Préfa">
                        <i className="bi bi-robot" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
