export interface NavItem {
  path: string;
  label: string;
}

export const navLinks: NavItem[] = [
  { path: '/', label: 'Accueil' },
  { path: '/expertises', label: 'Nos expertises' },
  { path: '/references', label: 'Nos marques' },
  { path: '/qhse', label: 'R.S.E. & D.D.' },
  { path: '/contact', label: 'Contact' },
  { path: '/chatAI', label: 'Assistant IA' },
];

export interface SocialLink {
  href: string;
  icon: string;
  label: string;
  external: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    href: 'https://www.facebook.com/menaraprefaofficiel/',
    icon: 'bi-facebook',
    label: 'Facebook Ménara Préfa',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/company/m%C3%A9nara-pr%C3%A9fa/?originalSubdomain=ma',
    icon: 'bi-linkedin',
    label: 'LinkedIn Ménara Préfa',
    external: true,
  },
  {
    href: 'https://www.instagram.com/menara.prefa.officiel/',
    icon: 'bi-instagram',
    label: 'Instagram Ménara Préfa',
    external: true,
  },
];
