import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import '../assets/css/contact.css';
import L from 'leaflet';

// Fix for default marker icon in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        nom: '',
        entreprise: '',
        email: '',
        telephone: '',
        sujet: '',
        message: '',
        rgpd: false
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        // Initialize map
        const mapContainer = document.getElementById('map');
        if (mapContainer && !mapContainer.hasChildNodes()) {
            const map = L.map('map').setView([31.63, -7.99], 6);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap'
            }).addTo(map);

            const implantations = [
                { ville: "Marrakech", coords: [31.6295, -7.9811] as [number, number] },
                { ville: "El Kelaâ des Sraghna", coords: [32.0482, -7.4069] as [number, number] },
                { ville: "Safi", coords: [32.2994, -9.2372] as [number, number] },
                { ville: "Béni Mellal", coords: [32.3372, -6.3498] as [number, number] },
                { ville: "Khouribga", coords: [32.8865, -6.9209] as [number, number] }
            ];

            implantations.forEach(loc => {
                L.marker(loc.coords).addTo(map).bindPopup(`<b>${loc.ville}</b>`);
            });
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData(prev => ({ ...prev, [name]: val }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }

        setSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setSubmitting(false);
            setSubmitSuccess(true);
            setFormData({
                nom: '',
                entreprise: '',
                email: '',
                telephone: '',
                sujet: '',
                message: '',
                rgpd: false
            });
            setValidated(false);
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1500);
    };

    return (
        <div className="animate-fade-in">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                    <h1>Contactez-nous</h1>
                    <p className="lead mb-0">Notre équipe est à votre écoute pour tous vos projets de construction</p>
                </div>
            </section>

            {/* Alert Numéro Vert */}
            <section className="container mb-5">
                <div className="alert-info-custom d-flex align-items-center">
                    <i className="bi bi-telephone-fill"></i>
                    <div>
                        <h4 className="mb-1">Appelez notre Numéro Vert</h4>
                        <p className="mb-0"><strong style={{ fontSize: '1.5rem' }}>0801008010</strong> - Appel gratuit depuis tout le Maroc</p>
                    </div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="container mb-5">
                <div className="row">
                    {/* Siège Social */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="contact-card">
                            <div className="icon">
                                <i className="bi bi-building"></i>
                            </div>
                            <h4 className="text-center">Siège Social</h4>
                            <div className="text-center mb-3">
                                <span className="badge bg-danger">Marrakech</span>
                            </div>
                            <div className="contact-info">
                                <i className="bi bi-geo-alt-fill"></i>
                                <span>Route d'Agadir, BP 4741<br />Hay Massira, Marrakech, Maroc</span>
                            </div>
                            <div className="contact-info">
                                <i className="bi bi-telephone-fill"></i>
                                <span>+212 524 49 99 00 à 15</span>
                            </div>
                            <div className="contact-info">
                                <i className="bi bi-envelope-fill"></i>
                                <a href="mailto:infomarrakech@menara-prefa.ma">infomarrakech@menara-prefa.ma</a>
                            </div>
                        </div>
                    </div>

                    {/* Bureau Commercial */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="contact-card">
                            <div className="icon">
                                <i className="bi bi-briefcase"></i>
                            </div>
                            <h4 className="text-center">Bureau Commercial</h4>
                            <div className="text-center mb-3">
                                <span className="badge bg-danger">Devis & Commandes</span>
                            </div>
                            <div className="contact-info">
                                <i className="bi bi-envelope-fill"></i>
                                <a href="mailto:b.commercial@menara-prefa.ma">b.commercial@menara-prefa.ma</a>
                            </div>
                            <div className="contact-info">
                                <i className="bi bi-clock-fill"></i>
                                <span>Lun - Ven: 8h00 - 18h00<br />Sam: 8h00 - 13h00</span>
                            </div>
                            <div className="contact-info">
                                <i className="bi bi-file-earmark-text"></i>
                                <span>Demande de devis sous 24h</span>
                            </div>
                        </div>
                    </div>

                    {/* Service Technique */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="contact-card">
                            <div className="icon">
                                <i className="bi bi-gear"></i>
                            </div>
                            <h4 className="text-center">Service Technique</h4>
                            <div className="text-center mb-3">
                                <span className="badge bg-danger">Support & Conseil</span>
                            </div>
                            <div className="contact-info">
                                <i className="bi bi-person-badge"></i>
                                <span>Assistance technique<br />Études de projet</span>
                            </div>
                            <div className="contact-info">
                                <i className="bi bi-tools"></i>
                                <span>Conseil en mise en œuvre</span>
                            </div>
                            <div className="contact-info">
                                <i className="bi bi-clipboard-check"></i>
                                <span>Contrôle qualité</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Implantations & Map */}
            <section className="container mb-5">
                <h2 className="section-title text-center">Nos Implantations</h2>

                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="location-card">
                            <h5><i className="bi bi-geo-fill me-2"></i>Site El Kelaâ des Sraghna</h5>
                            <p className="mb-2"><strong>Production:</strong> Agglos, Hourdis, Pavés</p>
                            <div className="contact-info mb-1">
                                <i className="bi bi-telephone"></i>
                                <span>+212 5XX XX XX XX</span>
                            </div>
                            <div className="contact-info">
                                <i className="bi bi-envelope"></i>
                                <a href="mailto:b.commercial@menara-prefa.ma">b.commercial@menara-prefa.ma</a>
                            </div>
                        </div>

                        <div className="location-card">
                            <h5><i className="bi bi-geo-fill me-2"></i>Site Safi</h5>
                            <p className="mb-2"><strong>Production:</strong> Béton prêt à l'emploi, Agglos</p>
                            <div className="contact-info mb-1">
                                <i className="bi bi-telephone"></i>
                                <span>+212 5XX XX XX XX</span>
                            </div>
                            <div className="contact-info">
                                <i className="bi bi-envelope"></i>
                                <a href="mailto:b.commercial@menara-prefa.ma">b.commercial@menara-prefa.ma</a>
                            </div>
                        </div>

                        <div className="location-card">
                            <h5><i className="bi bi-geo-fill me-2"></i>Site Béni Mellal</h5>
                            <p className="mb-2"><strong>Production:</strong> Béton prêt à l'emploi, Revêtements</p>
                            <div className="contact-info mb-1">
                                <i className="bi bi-telephone"></i>
                                <span>+212 5XX XX XX XX</span>
                            </div>
                            <div className="contact-info">
                                <i className="bi bi-envelope"></i>
                                <a href="mailto:b.commercial@menara-prefa.ma">b.commercial@menara-prefa.ma</a>
                            </div>
                        </div>

                        <div className="location-card">
                            <h5><i className="bi bi-geo-fill me-2"></i>Site Khouribga</h5>
                            <p className="mb-2"><strong>Distribution:</strong> Agence commerciale</p>
                            <div className="contact-info mb-1">
                                <i className="bi bi-telephone"></i>
                                <span>+212 5XX XX XX XX</span>
                            </div>
                            <div className="contact-info">
                                <i className="bi bi-envelope"></i>
                                <a href="mailto:b.commercial@menara-prefa.ma">b.commercial@menara-prefa.ma</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        {/* Map Container */}
                        <div className="map-container" style={{ background: 'white', padding: '10px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <div id="map" style={{ height: '500px', width: '100%', borderRadius: '8px' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form (Wide) */}
            <section className="container mb-5">
                <h2 className="section-title text-center">Envoyez-nous un message</h2>
                <div className="contact-form">
                    <form id="contactForm" className={validated ? 'was-validated' : ''} onSubmit={handleSubmit} noValidate>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="nom" className="form-label">Nom complet <span className="text-danger">*</span></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="nom" 
                                    name="nom" 
                                    value={formData.nom}
                                    onChange={handleChange}
                                    required 
                                />
                                <div className="invalid-feedback">Veuillez entrer votre nom.</div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="entreprise" className="form-label">Entreprise</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="entreprise" 
                                    name="entreprise"
                                    value={formData.entreprise}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange} 
                                    required 
                                />
                                <div className="invalid-feedback">Veuillez entrer une adresse email valide.</div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="telephone" className="form-label">Téléphone <span className="text-danger">*</span></label>
                                <input 
                                    type="tel" 
                                    className="form-control" 
                                    id="telephone" 
                                    name="telephone"
                                    value={formData.telephone}
                                    onChange={handleChange} 
                                    required 
                                />
                                <div className="invalid-feedback">Veuillez entrer votre numéro de téléphone.</div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sujet" className="form-label">Sujet <span className="text-danger">*</span></label>
                            <select 
                                className="form-select" 
                                id="sujet" 
                                name="sujet" 
                                value={formData.sujet}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Choisissez un sujet</option>
                                <option value="devis">Demande de devis</option>
                                <option value="info-produit">Information produit</option>
                                <option value="technique">Question technique</option>
                                <option value="livraison">Livraison</option>
                                <option value="reclamation">Réclamation</option>
                                <option value="autre">Autre</option>
                            </select>
                            <div className="invalid-feedback">Veuillez sélectionner un sujet.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                            <textarea 
                                className="form-control" 
                                id="message" 
                                name="message" 
                                rows={6} 
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <div className="invalid-feedback">Veuillez entrer votre message.</div>
                        </div>
                        <div className="mb-4">
                            <div className="form-check">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    id="rgpd" 
                                    name="rgpd" 
                                    checked={formData.rgpd}
                                    onChange={handleChange}
                                    required 
                                />
                                <label className="form-check-label" htmlFor="rgpd">
                                    J'accepte que mes données personnelles soient utilisées pour me recontacter concernant ma demande. <span className="text-danger">*</span>
                                </label>
                                <div className="invalid-feedback">Vous devez accepter avant de soumettre le formulaire.</div>
                            </div>
                        </div>
                        <div className="d-grid gap-2 d-md-block">
                            <button type="submit" className="btn btn-primary" disabled={submitting}>
                                {submitting ? <span className="spinner-border spinner-border-sm me-2"></span> : <i className="bi bi-send me-2"></i>}
                                {submitting ? 'Envoi...' : 'Envoyer le message'}
                            </button>
                            <button 
                                type="reset" 
                                className="btn btn-outline-secondary ms-md-2" 
                                onClick={() => {
                                    setFormData({ nom: '', entreprise: '', email: '', telephone: '', sujet: '', message: '', rgpd: false });
                                    setValidated(false);
                                }}
                            >
                                <i className="bi bi-arrow-clockwise me-2"></i>Réinitialiser
                            </button>
                        </div>
                    </form>
                    {submitSuccess && (
                        <div id="successMessage" className="alert alert-success mt-3" role="alert">
                            <i className="bi bi-check-circle me-2"></i>
                            <strong>Message envoyé avec succès!</strong> Nous vous répondrons dans les plus brefs délais.
                        </div>
                    )}
                </div>
            </section>

            {/* Info Icons Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4 mb-3">
                            <i className="bi bi-clock" style={{ fontSize: '2.5rem', color: 'var(--primary-red)' }}></i>
                            <h5 className="mt-3">Réponse Rapide</h5>
                            <p className="text-muted">Nous répondons à vos demandes sous 24h ouvrées</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <i className="bi bi-truck" style={{ fontSize: '2.5rem', color: 'var(--primary-red)' }}></i>
                            <h5 className="mt-3">Livraison Garantie</h5>
                            <p className="text-muted">Livraison dans toute la région centre</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <i className="bi bi-headset" style={{ fontSize: '2.5rem', color: 'var(--primary-red)' }}></i>
                            <h5 className="mt-3">Support Dédié</h5>
                            <p className="text-muted">Une équipe d'experts à votre écoute</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
