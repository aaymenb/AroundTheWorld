export interface Highlight {
  name: string;
  description: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Country {
  name: string;
  description: string;
  image: string;
  region: string;
  highlights: Highlight[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const countries: Country[] = [
  // Afrique
  {
    name: "Afrique du Sud",
    description:
      "Une nation arc-en-ciel aux paysages variés, des savanes du parc Kruger aux vignobles du Cap.",
    image:
      "https://images.unsplash.com/photo-1549420808-b1a783856269?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "Afrique",
    coordinates: {
      lat: -30.5595,
      lng: 22.9375,
    },
    highlights: [
      {
        name: "Parc National Kruger",
        description:
          "Immense réserve animalière où l'on peut observer les 'Big Five' dans leur habitat naturel. Une expérience de safari inoubliable.",
        image:
          "https://images.unsplash.com/photo-1583945863490-534a65452831?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        coordinates: {
          lat: -24.0118,
          lng: 31.4893,
        },
      },
      {
        name: "Le Cap",
        description:
          "Ville portuaire vibrante, dominée par la Montagne de la Table, offrant des plages magnifiques et une riche histoire.",
        image:
          "https://images.unsplash.com/photo-1589408200384-21985b838703?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        coordinates: {
          lat: -33.9249,
          lng: 18.4241,
        },
      },
      {
        name: "Route des Vins",
        description:
          "Explorez les domaines viticoles historiques de Stellenbosch et Franschhoek, dégustez des vins de renommée mondiale et profitez de paysages somptueux.",
        image:
          "https://images.unsplash.com/photo-1600054818298-e047413c6753?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        coordinates: {
          lat: -33.9346,
          lng: 18.8668,
        },
      },
    ],
  },
  {
    name: "Algérie",
    description:
      "L'Algérie, plus grand pays d'Afrique, offre une diversité de paysages, des côtes méditerranéennes au désert du Sahara, et une histoire riche.",
    image:
      "https://images.unsplash.com/photo-1603388236109-b85167362752?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "Afrique",
    coordinates: {
      lat: 28.0339,
      lng: 1.6596,
    },
    highlights: [
      {
        name: "Alger",
        description:
          "La capitale, avec sa Casbah classée à l'UNESCO, un labyrinthe de ruelles et d'histoire.",
        image:
          "https://images.unsplash.com/photo-1588716346217-1b2a0013971e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        coordinates: {
          lat: 36.7754,
          lng: 3.0588,
        },
      },
      {
        name: "Oran",
        description:
          "Deuxième ville du pays, connue pour son ambiance méditerranéenne et sa musique Raï.",
        image:
          "https://images.unsplash.com/photo-1620121392021-3818896420b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        coordinates: {
          lat: 35.6911,
          lng: -0.6417,
        },
      },
      {
        name: "Constantine",
        description:
          "La 'ville des ponts suspendus', construite sur un rocher et offrant des vues spectaculaires.",
        image:
          "https://images.unsplash.com/photo-1658421434232-969c52345863?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        coordinates: {
          lat: 36.365,
          lng: 6.6147,
        },
      },
    ],
  },
  {
    name: "Japon",
    description:
      "Un archipel où les traditions anciennes côtoient une modernité futuriste.",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    region: "Asie",
    coordinates: {
      lat: 36.2048,
      lng: 138.2529,
    },
    highlights: [
      {
        name: "Tokyo",
        description:
          "La capitale trépidante, un mélange de gratte-ciel, de temples historiques et de culture pop.",
        image:
          "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        coordinates: {
          lat: 35.6895,
          lng: 139.6917,
        },
      },
      {
        name: "Kyoto",
        description:
          "Ancienne capitale impériale, célèbre pour ses temples, ses jardins zen et ses geishas.",
        image:
          "https://images.unsplash.com/photo-1533224168249-ae12e8a60920?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        coordinates: {
          lat: 35.0116,
          lng: 135.7681,
        },
      },
      {
        name: "Mont Fuji",
        description:
          "Volcan emblématique et plus haute montagne du Japon, une source d'inspiration artistique et spirituelle.",
        image:
          "https://images.unsplash.com/photo-1578637387934-0d32988ab31b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        coordinates: {
          lat: 35.3606,
          lng: 138.7278,
        },
      },
    ],
  },
  // Amériques
  {
    name: "États-Unis",
    description: "Des gratte-ciel de New York aux parcs nationaux spectaculaires, les États-Unis offrent une diversité de paysages et de cultures.",
    image: "https://images.unsplash.com/photo-1485738422759-f6c2f377181e?q=80&w=1000",
    region: "Amériques",
    coordinates: { lat: 37.0902, lng: -95.7129 },
    highlights: [
      {
        name: "New York",
        description: "La ville qui ne dort jamais, avec ses sites emblématiques comme la Statue de la Liberté et Central Park.",
        image: "https://images.unsplash.com/photo-1485738422759-f6c2f377181e?q=80&w=1000",
        coordinates: { lat: 40.7128, lng: -74.0060 }
      },
      {
        name: "Grand Canyon",
        description: "Une merveille naturelle impressionnante, avec ses formations rocheuses colorées et ses vues à couper le souffle.",
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1000",
        coordinates: { lat: 36.1069, lng: -112.1129 }
      },
      {
        name: "Hollywood",
        description: "Le cœur de l'industrie du divertissement, où vous pouvez voir le célèbre Walk of Fame et les studios de cinéma.",
        image: "https://images.unsplash.com/photo-1533114034293-94c6f85e4904?q=80&w=1000",
        coordinates: { lat: 34.0928, lng: -118.3287 }
      }
    ]
  },
  // Europe
  {
    name: "France",
    description: "De la Tour Eiffel à Paris aux champs de lavande de la Provence, la France est un pays de culture, d'art et de gastronomie.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000",
    region: "Europe",
    coordinates: { lat: 46.2276, lng: 2.2137 },
    highlights: [
      {
        name: "Paris",
        description: "La capitale de la France, célèbre pour ses musées, ses monuments et sa vie nocturne.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000",
        coordinates: { lat: 48.8566, lng: 2.3522 }
      },
      {
        name: "Côte d'Azur",
        description: "Une région côtière célèbre pour ses plages, ses stations balnéaires et ses villages pittoresques.",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000",
        coordinates: { lat: 43.7102, lng: 7.2620 }
      },
      {
        name: "Mont Saint-Michel",
        description: "Une île rocheuse au large de la côte normande, célèbre pour son abbaye médiévale.",
        image: "https://images.unsplash.com/photo-1501696461415-678696342f56?q=80&w=1000",
        coordinates: { lat: 48.6360, lng: -1.5118 }
      }
    ]
  },
  // Océanie
  {
    name: "Australie",
    description: "Un vaste pays aux paysages variés, de l'Outback sauvage à la Grande Barrière de Corail.",
    image: "https://images.unsplash.com/photo-1507699622108-49a016ba67e4?q=80&w=1000",
    region: "Océanie",
    coordinates: { lat: -25.2744, lng: 133.7751 },
    highlights: [
      {
        name: "Opéra de Sydney",
        description: "Un chef-d'œuvre architectural et un centre des arts de la scène de renommée mondiale.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000",
        coordinates: { lat: -33.8568, lng: 151.2153 }
      },
      {
        name: "Grande Barrière de Corail",
        description: "Le plus grand système de récifs coralliens du monde, abritant une vie marine diversifiée.",
        image: "https://images.unsplash.com/photo-1520024444633-4bc242750375?q=80&w=1000",
        coordinates: { lat: -18.2871, lng: 147.6992 }
      },
      {
        name: "Uluru",
        description: "Un monolithe de grès massif au cœur de l'Outback australien, sacré pour les peuples autochtones.",
        image: "https://images.unsplash.com/photo-1517062432190-51a1b0a68d4a?q=80&w=1000",
        coordinates: { lat: -25.3444, lng: 131.0369 }
      }
    ]
  }
]; 