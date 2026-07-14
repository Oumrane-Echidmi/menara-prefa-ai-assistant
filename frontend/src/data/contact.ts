export interface ContactInfoItem {
  icon: string;
  content: string;
  href?: string;
}

export interface ContactCard {
  icon: string;
  title: string;
  badgeLabel: string;
  items: ContactInfoItem[];
}

export const contactCards: ContactCard[] = [
  {
    icon: 'bi-building',
    title: 'Siège Social',
    badgeLabel: 'Marrakech',
    items: [
      {
        icon: 'bi-geo-alt-fill',
        content: "Route d'Agadir, BP 4741\nHay Massira, Marrakech, Maroc",
      },
      { icon: 'bi-telephone-fill', content: '+212 524 49 99 00 à 15' },
      {
        icon: 'bi-envelope-fill',
        content: 'infomarrakech@menara-prefa.ma',
        href: 'mailto:infomarrakech@menara-prefa.ma',
      },
    ],
  },
  {
    icon: 'bi-briefcase',
    title: 'Bureau Commercial',
    badgeLabel: 'Devis & Commandes',
    items: [
      {
        icon: 'bi-envelope-fill',
        content: 'b.commercial@menara-prefa.ma',
        href: 'mailto:b.commercial@menara-prefa.ma',
      },
      {
        icon: 'bi-clock-fill',
        content: 'Lun - Ven: 8h00 - 18h00\nSam: 8h00 - 13h00',
      },
      {
        icon: 'bi-file-earmark-text',
        content: 'Demande de devis sous 24h',
      },
    ],
  },
  {
    icon: 'bi-gear',
    title: 'Service Technique',
    badgeLabel: 'Support & Conseil',
    items: [
      {
        icon: 'bi-person-badge',
        content: 'Assistance technique\nÉtudes de projet',
      },
      { icon: 'bi-tools', content: 'Conseil en mise en œuvre' },
      { icon: 'bi-clipboard-check', content: 'Contrôle qualité' },
    ],
  },
];

export interface FormSubject {
  value: string;
  label: string;
}

export const formSubjects: FormSubject[] = [
  { value: 'devis', label: 'Demande de devis' },
  { value: 'info-produit', label: 'Information produit' },
  { value: 'technique', label: 'Question technique' },
  { value: 'livraison', label: 'Livraison' },
  { value: 'reclamation', label: 'Réclamation' },
  { value: 'autre', label: 'Autre' },
];

export interface ContactFormData {
  nom: string;
  entreprise: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
  rgpd: boolean;
}

export const initialFormData: ContactFormData = {
  nom: '',
  entreprise: '',
  email: '',
  telephone: '',
  sujet: '',
  message: '',
  rgpd: false,
};
