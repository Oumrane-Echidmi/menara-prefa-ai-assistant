export interface ProductFeature {
  text: string;
}

export interface ProductCard {
  title: string;
  image: string;
  alt: string;
  description: string;
  features: ProductFeature[];
  badge?: string;
}

export const products: ProductCard[] = [
  {
    title: 'Agglos',
    image: '/assets/img/agglos.jpeg',
    alt: 'Agglos béton',
    description:
      'Capacité 220 000 pièces/jour. Gamme diversifiée incluant l\'agglo à bancher pour voiles sans coffrage.',
    features: [
      { text: 'AG7, AG10, AG15, AG20, AG25' },
      { text: 'Agglo à bancher (AG-B)' },
      { text: 'Conforme NM 10.1.009' },
    ],
    badge: 'Nouveau',
  },
  {
    title: 'Hourdis & Planchers',
    image: '/assets/img/hourdis.jpeg',
    alt: 'Hourdis et planchers préfabriqués',
    description:
      'Poutrelles précontraintes PAP & PAP+. Capacité ~24 000 ml/jour soit ~15 000 m² planchers.',
    features: [
      { text: 'H8, H12, H16, H20, H25, H30' },
      { text: 'Panneaux treillis soudés' },
      { text: 'Qualité & rigidité' },
    ],
  },
  {
    title: 'Béton Prêt à l\'Emploi',
    image: '/assets/img/beton.jpeg',
    alt: 'Béton prêt à l\'emploi',
    description:
      'BCP/BPS, capacité théorique >100 m³/h. Sites Marrakech, El Kelaâ, Béni Mellal.',
    features: [
      { text: 'Béton cellulaire, léger, lourd' },
      { text: 'Béton polis, teintés' },
      { text: 'Mortier projeté' },
    ],
  },
  {
    title: 'Revêtements de Sol',
    image: '/assets/img/rds.jpeg',
    alt: 'Revêtements de sol',
    description:
      'Pavés, dalles, bordures, caniveaux. Familles TM-F, TS-F, TM-B, TM-V. Large palette de couleurs.',
    features: [
      { text: 'Antidérapant & drainage' },
      { text: 'Facile entretien' },
      { text: 'Réutilisable' },
    ],
  },
];
