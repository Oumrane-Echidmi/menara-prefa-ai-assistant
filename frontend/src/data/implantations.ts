export interface Implantation {
  ville: string;
  coords: [number, number];
  production?: string;
  type?: string;
  telephone: string;
  email: string;
}

export const implantations: Implantation[] = [
  {
    ville: 'Marrakech',
    coords: [31.6295, -7.9811],
    type: 'Siège Social',
    production: 'Agglos, Hourdis, Béton',
    telephone: '+212 524 49 99 00 à 15',
    email: 'infomarrakech@menara-prefa.ma',
  },
  {
    ville: 'El Kelaâ des Sraghna',
    coords: [32.0482, -7.4069],
    production: 'Agglos, Hourdis, Pavés',
    telephone: '+212 5XX XX XX XX',
    email: 'b.commercial@menara-prefa.ma',
  },
  {
    ville: 'Safi',
    coords: [32.2994, -9.2372],
    production: 'Béton prêt à l\'emploi, Agglos',
    telephone: '+212 5XX XX XX XX',
    email: 'b.commercial@menara-prefa.ma',
  },
  {
    ville: 'Béni Mellal',
    coords: [32.3372, -6.3498],
    production: 'Béton prêt à l\'emploi, Revêtements',
    telephone: '+212 5XX XX XX XX',
    email: 'b.commercial@menara-prefa.ma',
  },
  {
    ville: 'Khouribga',
    coords: [32.8865, -6.9209],
    type: 'Distribution',
    production: 'Agence commerciale',
    telephone: '+212 5XX XX XX XX',
    email: 'b.commercial@menara-prefa.ma',
  },
];

/** Map-only markers (subset for the Leaflet map on Contact page) */
export const mapCenter: [number, number] = [31.63, -7.99];
export const mapZoom = 6;
