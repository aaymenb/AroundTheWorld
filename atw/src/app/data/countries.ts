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
  altNames?: string[];
}

export const countries: Country[] = [
  // Afrique
  {
    name: "Égypte",
    description: "Terre des pharaons, l'Égypte fascine par ses pyramides antiques, le majestueux Nil et les trésors de ses temples millénaires.",
    image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Afrique",
    coordinates: { lat: 26.8206, lng: 30.8025 },
    highlights: [
      {
        name: "Pyramides de Gizeh",
        description: "Seule des Sept Merveilles du monde antique encore debout, ce complexe funéraire est un témoignage spectaculaire de l'ingénierie égyptienne.",
        image: "https://images.unsplash.com/photo-1572094331353-615a45172458?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 29.9792, lng: 31.1342 }
      },
      {
        name: "Louxor",
        description: "Véritable musée à ciel ouvert sur les rives du Nil, abritant les temples de Karnak et la Vallée des Rois.",
        image: "https://images.unsplash.com/photo-1623275939217-b3c91c33a55c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 25.6872, lng: 32.6396 }
      },
      {
        name: "Le Caire",
        description: "Capitale vibrante, où les souks animés, les mosquées historiques et les musées riches d'artefacts coexistent.",
        image: "https://images.unsplash.com/photo-1565357484370-14819952c138?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 30.0444, lng: 31.2357 }
      }
    ]
  },
  {
    name: "Maroc",
    description: "Un royaume de couleurs, de senteurs et de contrastes, des souks animés de Marrakech aux paysages désertiques du Sahara.",
    image: "https://images.unsplash.com/photo-1549194388-724a15b172b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Afrique",
    coordinates: { lat: 31.7917, lng: -7.0926 },
    highlights: [
      {
        name: "Marrakech",
        description: "La 'ville rouge', célèbre pour sa médina, la place Jemaa el-Fna et ses riads enchanteurs.",
        image: "https://images.unsplash.com/photo-1563974318-83671fcf216b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 31.6295, lng: -7.9811 }
      },
      {
        name: "Fès",
        description: "Capitale spirituelle du Maroc, avec la plus grande médina du monde arabe, un labyrinthe de ruelles et de trésors.",
        image: "https://images.unsplash.com/photo-1588691230249-955c9115a3e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 34.0181, lng: -5.0078 }
      },
      {
        name: "Chefchaouen",
        description: "La 'ville bleue' du Rif, célèbre pour ses bâtiments aux teintes bleues et son atmosphère paisible.",
        image: "https://images.unsplash.com/photo-1559899508-3231cef288cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 35.1716, lng: -5.2692 }
      }
    ]
  },
  {
    name: "Afrique du Sud",
    description: "Une nation arc-en-ciel aux paysages variés, des savanes du parc Kruger aux vignobles du Cap.",
    image: "https://images.unsplash.com/photo-1549420808-b1a783856269?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Afrique",
    coordinates: { lat: -30.5595, lng: 22.9375 },
    highlights: [
      {
        name: "Parc National Kruger",
        description: "Immense réserve animalière où l'on peut observer les 'Big Five' dans leur habitat naturel.",
        image: "https://images.unsplash.com/photo-1583945863490-534a65452831?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -24.0118, lng: 31.4893 }
      },
      {
        name: "Le Cap",
        description: "Ville portuaire vibrante, dominée par la Montagne de la Table, offrant des plages magnifiques.",
        image: "https://images.unsplash.com/photo-1589408200384-21985b838703?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -33.9249, lng: 18.4241 }
      },
      {
        name: "Route des Vins",
        description: "Explorez les domaines viticoles historiques de Stellenbosch et Franschhoek.",
        image: "https://images.unsplash.com/photo-1600054818298-e047413c6753?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -33.9346, lng: 18.8668 }
      }
    ]
  },
  {
    name: "Tanzanie",
    description: "La destination ultime pour le safari, avec le Serengeti, le cratère du Ngorongoro et le Kilimandjaro.",
    image: "https://images.unsplash.com/photo-1532009871151-e1a5582d95b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Afrique",
    coordinates: { lat: -6.3690, lng: 34.8888 },
    highlights: [
      {
        name: "Parc National du Serengeti",
        description: "Célèbre pour sa migration annuelle de millions de gnous, zèbres et gazelles.",
        image: "https://images.unsplash.com/photo-1534430480-92b638914436?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -2.3333, lng: 34.8333 }
      },
      {
        name: "Mont Kilimandjaro",
        description: "Le plus haut sommet d'Afrique, un volcan endormi offrant un trek inoubliable.",
        image: "https://images.unsplash.com/photo-1589553434237-611019d0c64c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -3.0674, lng: 37.3556 }
      },
      {
        name: "Zanzibar",
        description: "Archipel aux plages de sable blanc, aux eaux turquoise et à la riche histoire swahilie.",
        image: "https://images.unsplash.com/photo-1583703190876-234616f15777?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -6.1659, lng: 39.2026 }
      }
    ]
  },
  {
    name: "Kenya",
    description: "Berceau du safari, le Kenya offre des paysages de savane emblématiques et une faune abondante.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Afrique",
    coordinates: { lat: -0.0236, lng: 37.9062 },
    highlights: [
      {
        name: "Réserve Nationale du Masai Mara",
        description: "L'une des plus grandes réserves animalières au monde, célèbre pour sa population de lions et la grande migration.",
        image: "https://images.unsplash.com/photo-1594819232810-06276332a3de?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -1.5, lng: 35.25 }
      },
      {
        name: "Parc National d'Amboseli",
        description: "Connu pour ses grands troupeaux d'éléphants et ses vues sur le mont Kilimandjaro.",
        image: "https://images.unsplash.com/photo-1599452862734-42b7a956976a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -2.6534, lng: 37.2519 }
      },
      {
        name: "Lac Nakuru",
        description: "Un lac alcalin célèbre pour ses milliers de flamants roses et ses rhinocéros.",
        image: "https://images.unsplash.com/photo-1534994274533-35a113f019f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -0.3707, lng: 36.0844 }
      }
    ]
  },

  // Amériques
  {
    name: "États-Unis",
    description: "Des gratte-ciel de New York aux parcs nationaux spectaculaires, les États-Unis offrent une diversité de paysages et de cultures.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Amériques",
    coordinates: { lat: 37.0902, lng: -95.7129 },
    altNames: ["United States of America"],
    highlights: [
      {
        name: "New York",
        description: "La ville qui ne dort jamais, avec ses sites emblématiques comme la Statue de la Liberté.",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 40.7128, lng: -74.0060 }
      },
      {
        name: "Grand Canyon",
        description: "Une merveille naturelle impressionnante, avec ses formations rocheuses colorées.",
        image: "https://images.unsplash.com/photo-1537237858032-3ad1b513414d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 36.1069, lng: -112.1129 }
      },
      {
        name: "Los Angeles",
        description: "Le cœur de l'industrie du divertissement, de Hollywood aux plages de Santa Monica.",
        image: "https://images.unsplash.com/photo-1542317852-523554e56589?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 34.0522, lng: -118.2437 }
      }
    ]
  },
  {
    name: "Mexique",
    description: "Un pays riche en histoire, avec des ruines mayas, des plages des Caraïbes et une cuisine renommée.",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86a5ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Amériques",
    coordinates: { lat: 23.6345, lng: -102.5528 },
    highlights: [
      {
        name: "Cancún",
        description: "Célèbre pour ses plages de sable blanc, ses eaux turquoise et sa vie nocturne animée.",
        image: "https://images.unsplash.com/photo-1548232812-143f6a273641?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 21.1619, lng: -86.8515 }
      },
      {
        name: "Chichén Itzá",
        description: "Un site archéologique maya emblématique, avec sa célèbre pyramide de Kukulcán.",
        image: "https://images.unsplash.com/photo-1517540202863-7b3b3a3af263?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 20.6843, lng: -88.5678 }
      },
      {
        name: "Mexico",
        description: "Capitale dynamique, construite sur les ruines de la cité aztèque de Tenochtitlan.",
        image: "https://images.unsplash.com/photo-1574482227282-7a56de10a14a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 19.4326, lng: -99.1332 }
      }
    ]
  },
  {
    name: "Canada",
    description: "Un pays immense aux paysages grandioses, des montagnes Rocheuses aux grandes villes cosmopolites.",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Amériques",
    coordinates: { lat: 56.1304, lng: -106.3468 },
    highlights: [
      {
        name: "Parc National de Banff",
        description: "Le plus ancien parc national du Canada, célèbre pour ses lacs glaciaires turquoise et ses montagnes majestueuses.",
        image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 51.1784, lng: -115.5708 }
      },
      {
        name: "Vancouver",
        description: "Une ville côtière dynamique, entourée par les montagnes et l'océan Pacifique.",
        image: "https://images.unsplash.com/photo-1559511263-82a8ab3d2986?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 49.2827, lng: -123.1207 }
      },
      {
        name: "Chutes du Niagara",
        description: "Un ensemble de trois chutes d'eau spectaculaires à la frontière entre le Canada et les États-Unis.",
        image: "https://images.unsplash.com/photo-1521019213499-2b2a1a0d84a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 43.0962, lng: -79.0377 }
      }
    ]
  },
  {
    name: "Brésil",
    description: "Pays de la samba, du football et du carnaval, le Brésil est une terre de fête et de nature exubérante.",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Amériques",
    coordinates: { lat: -14.235, lng: -51.9253 },
    highlights: [
      {
        name: "Rio de Janeiro",
        description: "Célèbre pour sa statue du Christ Rédempteur, le Pain de Sucre et les plages de Copacabana et Ipanema.",
        image: "https://images.unsplash.com/photo-1516306580122-e0e4d1d347d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -22.9068, lng: -43.1729 }
      },
      {
        name: "Chutes d'Iguazú",
        description: "Un ensemble de 275 cascades à la frontière avec l'Argentine, une merveille naturelle.",
        image: "https://images.unsplash.com/photo-1596224354742-9abc4b313175?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -25.6953, lng: -54.4367 }
      },
      {
        name: "Forêt Amazonienne",
        description: "La plus grande forêt tropicale du monde, abritant une biodiversité inégalée.",
        image: "https://images.unsplash.com/photo-1590823533964-e45c71e2e987?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -3.4653, lng: -62.2159 }
      }
    ]
  },
  {
    name: "Argentine",
    description: "Du tango de Buenos Aires aux glaciers de Patagonie, l'Argentine est un pays de passions et de paysages spectaculaires.",
    image: "https://images.unsplash.com/photo-1588622153412-b0811f5e8253?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Amériques",
    coordinates: { lat: -38.4161, lng: -63.6167 },
    highlights: [
      {
        name: "Buenos Aires",
        description: "Capitale du tango, célèbre pour son architecture européenne, sa vie nocturne et sa culture vibrante.",
        image: "https://images.unsplash.com/photo-1581458211362-3844f2b1af13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -34.6037, lng: -58.3816 }
      },
      {
        name: "Parc National Los Glaciares",
        description: "Abritant le célèbre glacier Perito Moreno, ce parc offre des paysages glaciaires à couper le souffle.",
        image: "https://images.unsplash.com/photo-1549491741-26c7a4ca73f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -50.5, lng: -73.0667 }
      },
      {
        name: "Ushuaia",
        description: "La ville la plus australe du monde, porte d'entrée de l'Antarctique et de la Terre de Feu.",
        image: "https://images.unsplash.com/photo-1605051978419-6138a0cba486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -54.8019, lng: -68.3030 }
      }
    ]
  },

  // Asie
  {
    name: "Chine",
    description: "Un pays immense à l'histoire millénaire, de la Grande Muraille à l'armée de terre cuite.",
    image: "https://images.unsplash.com/photo-1547981609-2b6c56328247?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Asie",
    coordinates: { lat: 35.8617, lng: 104.1954 },
    highlights: [
      {
        name: "Grande Muraille de Chine",
        description: "Une série de fortifications militaires construites pour protéger les frontières nord de l'empire chinois.",
        image: "https://images.unsplash.com/photo-1509025338669-c0c458d08f4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 40.4319, lng: 116.5704 }
      },
      {
        name: "Pékin",
        description: "Capitale historique et culturelle, abritant la Cité Interdite et la Place Tian'anmen.",
        image: "https://images.unsplash.com/photo-1599576421835-514757042a53?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 39.9042, lng: 116.4074 }
      },
      {
        name: "Shanghai",
        description: "Une métropole moderne et dynamique, célèbre pour son front de mer, le Bund, et ses gratte-ciel.",
        image: "https://images.unsplash.com/photo-1538428312102-73c333f2ab75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 31.2304, lng: 121.4737 }
      }
    ]
  },
  {
    name: "Thaïlande",
    description: "Le 'pays du sourire', célèbre pour ses temples opulents, ses plages tropicales et sa cuisine savoureuse.",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Asie",
    coordinates: { lat: 15.8700, lng: 100.9925 },
    highlights: [
      {
        name: "Bangkok",
        description: "Capitale animée, où les temples dorés côtoient les marchés flottants et les gratte-ciel modernes.",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 13.7563, lng: 100.5018 }
      },
      {
        name: "Phuket",
        description: "La plus grande île de Thaïlande, célèbre pour ses plages, ses stations balnéaires et sa vie nocturne.",
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 7.8804, lng: 98.3923 }
      },
      {
        name: "Chiang Mai",
        description: "Une ville du nord montagneux, célèbre pour ses temples anciens, ses éléphants et sa culture Lanna.",
        image: "https://images.unsplash.com/photo-1585994264906-8c48a736a61a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 18.7883, lng: 98.9853 }
      }
    ]
  },
  {
    name: "Japon",
    description: "Un archipel où les traditions anciennes côtoient une modernité futuriste.",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Asie",
    coordinates: { lat: 36.2048, lng: 138.2529 },
    highlights: [
      {
        name: "Tokyo",
        description: "La capitale trépidante, un mélange de gratte-ciel, de temples historiques et de culture pop.",
        image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 35.6895, lng: 139.6917 }
      },
      {
        name: "Kyoto",
        description: "Ancienne capitale impériale, célèbre pour ses temples, ses jardins zen et ses geishas.",
        image: "https://images.unsplash.com/photo-1533224168249-ae12e8a60920?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 35.0116, lng: 135.7681 }
      },
      {
        name: "Mont Fuji",
        description: "Volcan emblématique et plus haute montagne du Japon, une source d'inspiration artistique et spirituelle.",
        image: "https://images.unsplash.com/photo-1578637387934-0d32988ab31b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 35.3606, lng: 138.7278 }
      }
    ]
  },
  {
    name: "Turquie",
    description: "Un carrefour de civilisations, avec des paysages allant des plages de la Méditerranée aux formations rocheuses de Cappadoce.",
    image: "https://images.unsplash.com/photo-1562692233-2d6403c202e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Asie",
    coordinates: { lat: 38.9637, lng: 35.2433 },
    highlights: [
      {
        name: "Istanbul",
        description: "Une ville à cheval sur deux continents, avec des joyaux comme Sainte-Sophie, la Mosquée Bleue et le Grand Bazar.",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7207?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 41.0082, lng: 28.9784 }
      },
      {
        name: "Cappadoce",
        description: "Une région célèbre pour ses 'cheminées de fées', ses villes souterraines et ses vols en montgolfière.",
        image: "https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 38.6431, lng: 34.8282 }
      },
      {
        name: "Pamukkale",
        description: "Le 'château de coton', avec ses terrasses de calcaire blanc et ses sources chaudes.",
        image: "https://images.unsplash.com/photo-1596489399433-2c07a3c3182b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 37.9333, lng: 29.1167 }
      }
    ]
  },
  {
    name: "Malaisie",
    description: "Un mélange de cultures malaise, chinoise et indienne, avec des forêts tropicales luxuriantes et des villes modernes.",
    image: "https://images.unsplash.com/photo-1566395962899-7353f7d54157?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Asie",
    coordinates: { lat: 4.2105, lng: 101.9758 },
    highlights: [
      {
        name: "Kuala Lumpur",
        description: "Capitale moderne, célèbre pour ses tours jumelles Petronas et ses grottes de Batu.",
        image: "https://images.unsplash.com/photo-1589578523963-630824b3b1b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 3.1390, lng: 101.6869 }
      },
      {
        name: "Langkawi",
        description: "Un archipel de 99 îles, célèbre pour ses plages, ses forêts tropicales et son téléphérique.",
        image: "https://images.unsplash.com/photo-1610419335132-758f83038936?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 6.3500, lng: 99.8000 }
      },
      {
        name: "Bornéo",
        description: "Une île partagée avec l'Indonésie et Brunei, célèbre pour sa forêt tropicale, ses orangs-outans et le mont Kinabalu.",
        image: "https://images.unsplash.com/photo-1559244670-c3d3a6839359?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 1.1553, lng: 112.3041 }
      }
    ]
  },

  // Europe
  {
    name: "France",
    description: "De la Tour Eiffel à Paris aux champs de lavande de la Provence, la France est un pays de culture, d'art et de gastronomie.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Europe",
    coordinates: { lat: 46.2276, lng: 2.2137 },
    highlights: [
      {
        name: "Paris",
        description: "La capitale de la France, célèbre pour ses musées, ses monuments et sa vie nocturne.",
        image: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 48.8566, lng: 2.3522 }
      },
      {
        name: "Côte d'Azur",
        description: "Une région côtière célèbre pour ses plages, ses stations balnéaires et ses villages pittoresques.",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 43.7102, lng: 7.2620 }
      },
      {
        name: "Mont Saint-Michel",
        description: "Une île rocheuse au large de la côte normande, célèbre pour son abbaye médiévale.",
        image: "https://images.unsplash.com/photo-1501696461415-678696342f56?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 48.6360, lng: -1.5118 }
      }
    ]
  },
  {
    name: "Espagne",
    description: "Un pays de soleil, de tapas et de flamenco, avec des villes historiques et des plages méditerranéennes.",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Europe",
    coordinates: { lat: 40.4637, lng: -3.7492 },
    highlights: [
      {
        name: "Barcelone",
        description: "Célèbre pour son architecture moderniste de Gaudí, sa vie nocturne et ses plages.",
        image: "https://images.unsplash.com/photo-1523531294919-4c3c62cf0d43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 41.3851, lng: 2.1734 }
      },
      {
        name: "Madrid",
        description: "Capitale animée, célèbre pour ses musées d'art, ses parcs et sa vie nocturne.",
        image: "https://images.unsplash.com/photo-1578305987483-658b4f4c8026?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 40.4168, lng: -3.7038 }
      },
      {
        name: "Andalousie",
        description: "Une région du sud, célèbre pour son flamenco, ses palais mauresques et ses villages blancs.",
        image: "https://images.unsplash.com/photo-1600197401955-4074f7a4073b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 37.5401, lng: -4.6251 }
      }
    ]
  },
  {
    name: "Italie",
    description: "Berceau de l'Empire romain et de la Renaissance, l'Italie est un pays d'art, d'histoire et de gastronomie.",
    image: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Europe",
    coordinates: { lat: 41.8719, lng: 12.5674 },
    highlights: [
      {
        name: "Rome",
        description: "La 'Ville Éternelle', avec des trésors comme le Colisée, le Forum Romain et le Vatican.",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 41.9028, lng: 12.4964 }
      },
      {
        name: "Florence",
        description: "Le berceau de la Renaissance, célèbre pour sa cathédrale, ses musées d'art et le Ponte Vecchio.",
        image: "https://images.unsplash.com/photo-1528114999395-e24b37d45136?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 43.7696, lng: 11.2558 }
      },
      {
        name: "Venise",
        description: "Une ville unique construite sur l'eau, avec ses canaux, ses gondoles et sa Place Saint-Marc.",
        image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 45.4408, lng: 12.3155 }
      }
    ]
  },
  {
    name: "Royaume-Uni",
    description: "Une nation d'histoire et de culture, de la royauté de Londres aux paysages sauvages d'Écosse.",
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Europe",
    coordinates: { lat: 55.3781, lng: -3.4360 },
    highlights: [
      {
        name: "Londres",
        description: "Capitale cosmopolite, avec des icônes comme le Tower Bridge, le Palais de Buckingham et le British Museum.",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 51.5074, lng: -0.1278 }
      },
      {
        name: "Écosse",
        description: "Célèbre pour ses lochs, ses châteaux hantés, ses Highlands et son whisky.",
        image: "https://images.unsplash.com/photo-1578240428148-5c1a179a6132?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 56.4907, lng: -4.2026 }
      },
      {
        name: "Stonehenge",
        description: "Un monument préhistorique mystérieux, composé de menhirs disposés en cercle.",
        image: "https://images.unsplash.com/photo-1596722309327-599944112349?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 51.1789, lng: -1.8262 }
      }
    ]
  },
  {
    name: "Allemagne",
    description: "Un pays de contrastes, des châteaux de Bavière à la scène artistique de Berlin.",
    image: "https://images.unsplash.com/photo-1528741348279-a78b4a03425a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Europe",
    coordinates: { lat: 51.1657, lng: 10.4515 },
    highlights: [
      {
        name: "Berlin",
        description: "Capitale dynamique, célèbre pour son histoire, sa vie nocturne et sa scène artistique.",
        image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 52.5200, lng: 13.4050 }
      },
      {
        name: "Bavière",
        description: "Une région célèbre pour ses châteaux de conte de fées, ses Alpes et sa Fête de la Bière.",
        image: "https://images.unsplash.com/photo-1599819089260-2615a40a8315?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 48.7904, lng: 11.4979 }
      },
      {
        name: "Forêt-Noire",
        description: "Une région montagneuse célèbre pour ses forêts denses, ses villages pittoresques et ses horloges à coucou.",
        image: "https://images.unsplash.com/photo-1606843431379-24b36d013f9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: 48.0, lng: 8.0 }
      }
    ]
  },

  // Océanie
  {
    name: "Australie",
    description: "Un vaste pays aux paysages variés, de l'Outback sauvage à la Grande Barrière de Corail.",
    image: "https://images.unsplash.com/photo-1507699622108-49a016ba67e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Océanie",
    coordinates: { lat: -25.2744, lng: 133.7751 },
    highlights: [
      {
        name: "Sydney",
        description: "Célèbre pour son opéra, son pont et son port spectaculaire.",
        image: "https://images.unsplash.com/photo-1524293581917-878a6d017c71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -33.8688, lng: 151.2093 }
      },
      {
        name: "Grande Barrière de Corail",
        description: "Le plus grand système de récifs coralliens du monde, abritant une vie marine diversifiée.",
        image: "https://images.unsplash.com/photo-1617935759994-a4773c35f377?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -18.2871, lng: 147.6992 }
      },
      {
        name: "Uluru",
        description: "Un monolithe de grès massif au cœur de l'Outback australien, sacré pour les peuples autochtones.",
        image: "https://images.unsplash.com/photo-1596489399433-2c07a3c3182b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -25.3444, lng: 131.0369 }
      }
    ]
  },
  {
    name: "Nouvelle-Zélande",
    description: "Un pays de paysages spectaculaires, des fjords de Milford Sound aux plages de l'Abel Tasman.",
    image: "https://images.unsplash.com/photo-1507699622108-49a016ba67e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Océanie",
    coordinates: { lat: -40.9006, lng: 174.8860 },
    highlights: [
      {
        name: "Fiordland",
        description: "Une région de fjords spectaculaires, de montagnes et de forêts tropicales.",
        image: "https://images.unsplash.com/photo-1590529124436-0bf17b359f5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -45.4140, lng: 167.7160 }
      },
      {
        name: "Queenstown",
        description: "La capitale mondiale de l'aventure, offrant des activités comme le saut à l'élastique et le ski.",
        image: "https://images.unsplash.com/photo-1544973315-0d3f278077b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -45.0312, lng: 168.6626 }
      },
      {
        name: "Rotorua",
        description: "Une région géothermique célèbre pour ses geysers, ses sources chaudes et sa culture maorie.",
        image: "https://images.unsplash.com/photo-1596489399433-2c07a3c3182b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -38.1386, lng: 176.2452 }
      }
    ]
  },
  {
    name: "Fidji",
    description: "Un archipel de plus de 300 îles, célèbre pour ses plages de sable blanc, ses récifs coralliens et sa culture accueillante.",
    image: "https://images.unsplash.com/photo-1579529362323-c9a9d7f6c374?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Océanie",
    coordinates: { lat: -17.7134, lng: 178.0650 },
    highlights: [
      {
        name: "Îles Mamanuca",
        description: "Un groupe d'îles volcaniques célèbres pour leurs complexes hôteliers de luxe et leurs spots de surf.",
        image: "https://images.unsplash.com/photo-1591543620786-9a5f5f19c4b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -17.6667, lng: 177.0833 }
      },
      {
        name: "Îles Yasawa",
        description: "Un groupe d'îles plus isolées, célèbres pour leurs plages désertes et leurs villages traditionnels.",
        image: "https://images.unsplash.com/photo-1570215777242-5353e04439c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -16.8333, lng: 177.4167 }
      },
      {
        name: "Suva",
        description: "La capitale des Fidji, célèbre pour son architecture coloniale et son marché animé.",
        image: "https://images.unsplash.com/photo-1605051978419-6138a0cba486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -18.1416, lng: 178.4419 }
      }
    ]
  },
  {
    name: "Samoa",
    description: "Un archipel polynésien célèbre pour ses plages, ses cascades et sa culture traditionnelle.",
    image: "https://images.unsplash.com/photo-1596489399433-2c07a3c3182b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Océanie",
    coordinates: { lat: -13.7590, lng: -172.1046 },
    highlights: [
      {
        name: "Upolu",
        description: "L'île principale, célèbre pour ses plages, ses cascades et sa capitale, Apia.",
        image: "https://images.unsplash.com/photo-1591543620786-9a5f5f19c4b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -13.9167, lng: -171.7500 }
      },
      {
        name: "Savai'i",
        description: "Une île plus grande et moins développée, célèbre pour ses champs de lave et ses grottes.",
        image: "https://images.unsplash.com/photo-1570215777242-5353e04439c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -13.6167, lng: -172.4167 }
      },
      {
        name: "To Sua Ocean Trench",
        description: "Un trou d'eau spectaculaire entouré de jardins luxuriants, un lieu de baignade unique.",
        image: "https://images.unsplash.com/photo-1570215777242-5353e04439c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -14.0264, lng: -171.4283 }
      }
    ]
  },
  {
    name: "Vanuatu",
    description: "Un archipel de 83 îles, célèbre pour ses volcans actifs, ses plages de sable noir et sa culture kastom.",
    image: "https://images.unsplash.com/photo-1596489399433-2c07a3c3182b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    region: "Océanie",
    coordinates: { lat: -15.3767, lng: 166.9592 },
    highlights: [
      {
        name: "Tanna",
        description: "Une île célèbre pour son volcan actif, le mont Yasur, et ses villages traditionnels.",
        image: "https://images.unsplash.com/photo-1591543620786-9a5f5f19c4b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -19.5, lng: 169.3333 }
      },
      {
        name: "Espiritu Santo",
        description: "La plus grande île, célèbre pour ses plages, ses grottes et ses sites de plongée sur épave.",
        image: "https://images.unsplash.com/photo-1570215777242-5353e04439c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -15.3333, lng: 166.8333 }
      },
      {
        name: "Port-Vila",
        description: "La capitale, célèbre pour son marché, son front de mer et son ambiance cosmopolite.",
        image: "https://images.unsplash.com/photo-1605051978419-6138a0cba486?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        coordinates: { lat: -17.7333, lng: 168.3167 }
      }
    ]
  }
];