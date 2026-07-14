import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import '../assets/css/contact.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import { implantations, mapCenter, mapZoom } from '../data/implantations';
import { contactCards, formSubjects, initialFormData } from '../data/contact';
import type { ContactFormData } from '../data/contact';

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

/**
 * Placeholder for backend integration.
 * Replace this with a real API call when the backend endpoint is ready.
 */
async function submitContactForm(data: ContactFormData): Promise<void> {
    // TODO: Replace with actual API call, e.g.:
    // const response = await fetch(`${API_BASE}/api/contact`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    // });
    // if (!response.ok) throw new Error('Erreur serveur');
    console.log('Contact form submitted:', data);
    return new Promise(resolve => setTimeout(resolve, 1500));
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({ ...initialFormData });
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [validated, setValidated] = useState(false);

    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapContainerRef.current || mapInstanceRef.current) return;

        const map = L.map(mapContainerRef.current).setView(mapCenter, mapZoom);
        mapInstanceRef.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap'
        }).addTo(map);

        implantations.forEach(loc => {
            L.marker(loc.coords).addTo(map).bindPopup(`<b>${loc.ville}</b>`);
        });

        return () => {
            map.remove();
            mapInstanceRef.current = null;
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
        setFormData(prev => ({ ...prev, [name]: val }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
            return;
        }

        setSubmitting(true);
        setSubmitError(null);

        try {
            await submitContactForm(formData);
            setSubmitSuccess(true);
            setFormData({ ...initialFormData });
            setValidated(false);
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (err: unknown) {
            const detail = err instanceof Error ? err.message : 'Erreur inconnue';
            setSubmitError(`L'envoi a échoué : ${detail}`);
            setTimeout(() => setSubmitError(null), 5000);
        } finally {
            setSubmitting(false);
        }
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
                    <i className="bi bi-telephone-fill" aria-hidden="true"></i>
                    <div>
                        <h4 className="mb-1">Appelez notre Numéro Vert</h4>
                        <p className="mb-0"><strong style={{ fontSize: '1.5rem' }}>0801008010</strong> - Appel gratuit depuis tout le Maroc</p>
                    </div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="container mb-5">
                <div className="row">
                    {contactCards.map((card) => (
                        <div key={card.title} className="col-lg-4 col-md-6 mb-4">
                            <div className="contact-card">
                                <div className="icon">
                                    <i className={`bi ${card.icon}`} aria-hidden="true"></i>
                                </div>
                                <h4 className="text-center">{card.title}</h4>
                                <div className="text-center mb-3">
                                    <span className="badge bg-danger">{card.badgeLabel}</span>
                                </div>
                                {card.items.map((item, idx) => (
                                    <div key={idx} className="contact-info">
                                        <i className={`bi ${item.icon}`} aria-hidden="true"></i>
                                        {item.href ? (
                                            <a href={item.href}>{item.content}</a>
                                        ) : (
                                            <span dangerouslySetInnerHTML={{ __html: item.content.replace(/\n/g, '<br />') }} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Implantations & Map */}
            <section className="container mb-5">
                <h2 className="section-title text-center">Nos Implantations</h2>

                <div className="row">
                    <div className="col-lg-6 mb-4">
                        {implantations.filter(loc => loc.ville !== 'Marrakech').map((loc) => (
                            <div key={loc.ville} className="location-card">
                                <h5><i className="bi bi-geo-fill me-2" aria-hidden="true"></i>Site {loc.ville}</h5>
                                <p className="mb-2"><strong>{loc.type === 'Distribution' ? 'Distribution:' : 'Production:'}</strong> {loc.production}</p>
                                <div className="contact-info mb-1">
                                    <i className="bi bi-telephone" aria-hidden="true"></i>
                                    <span>{loc.telephone}</span>
                                </div>
                                <div className="contact-info">
                                    <i className="bi bi-envelope" aria-hidden="true"></i>
                                    <a href={`mailto:${loc.email}`}>{loc.email}</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-lg-6">
                        <div className="map-container" style={{ background: 'white', padding: '10px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <div
                                ref={mapContainerRef}
                                style={{ height: '500px', width: '100%', borderRadius: '8px' }}
                                aria-label="Carte des implantations Ménara Préfa"
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
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
                                {formSubjects.map(s => (
                                    <option key={s.value} value={s.value}>{s.label}</option>
                                ))}
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
                                {submitting ? <span className="spinner-border spinner-border-sm me-2"></span> : <i className="bi bi-send me-2" aria-hidden="true"></i>}
                                {submitting ? 'Envoi...' : 'Envoyer le message'}
                            </button>
                            <button
                                type="reset"
                                className="btn btn-outline-secondary ms-md-2"
                                onClick={() => {
                                    setFormData({ ...initialFormData });
                                    setValidated(false);
                                }}
                            >
                                <i className="bi bi-arrow-clockwise me-2" aria-hidden="true"></i>Réinitialiser
                            </button>
                        </div>
                    </form>
                    {submitSuccess && (
                        <div id="successMessage" className="alert alert-success mt-3" role="alert">
                            <i className="bi bi-check-circle me-2" aria-hidden="true"></i>
                            <strong>Message envoyé avec succès!</strong> Nous vous répondrons dans les plus brefs délais.
                        </div>
                    )}
                    {submitError && (
                        <div className="alert alert-danger mt-3" role="alert">
                            <i className="bi bi-exclamation-triangle me-2" aria-hidden="true"></i>
                            {submitError}
                        </div>
                    )}
                </div>
            </section>

            {/* Info Icons Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4 mb-3">
                            <i className="bi bi-clock" style={{ fontSize: '2.5rem', color: 'var(--primary-red)' }} aria-hidden="true"></i>
                            <h5 className="mt-3">Réponse Rapide</h5>
                            <p className="text-muted">Nous répondons à vos demandes sous 24h ouvrées</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <i className="bi bi-truck" style={{ fontSize: '2.5rem', color: 'var(--primary-red)' }} aria-hidden="true"></i>
                            <h5 className="mt-3">Livraison Garantie</h5>
                            <p className="text-muted">Livraison dans toute la région centre</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <i className="bi bi-headset" style={{ fontSize: '2.5rem', color: 'var(--primary-red)' }} aria-hidden="true"></i>
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
