'use client';

import { useState } from 'react';
import styles from './page.module.css';

const countries = [
  {
    name: "France",
    description: "La France, pays de l'art de vivre, vous accueille avec sa gastronomie raffinée, ses monuments historiques et ses paysages variés. De Paris à la Côte d'Azur, découvrez un pays riche en culture et en histoire.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000",
    region: "Europe",
    highlights: ["Tour Eiffel", "Louvre", "Côte d'Azur"]
  },
  {
    name: "Japon",
    description: "Le Japon, où tradition et modernité se rencontrent. Des temples anciens aux gratte-ciels futuristes, des jardins zen aux rues animées de Tokyo, découvrez un pays unique en son genre.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000",
    region: "Asie",
    highlights: ["Mont Fuji", "Temples de Kyoto", "Tokyo"]
  },
  {
    name: "Italie",
    description: "L'Italie, berceau de la Renaissance, vous enchante avec son art, son architecture et sa cuisine incomparable. De Rome à Venise, en passant par Florence, chaque ville raconte une histoire unique.",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1000",
    region: "Europe",
    highlights: ["Colisée", "Venise", "Florence"]
  },
  {
    name: "Thaïlande",
    description: "La Thaïlande, le pays du sourire, vous séduit avec ses temples dorés, ses plages paradisiaques et sa cuisine épicée. Un mélange parfait de culture traditionnelle et de modernité.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000",
    region: "Asie",
    highlights: ["Bangkok", "Phuket", "Temples de Chiang Mai"]
  },
  {
    name: "Maroc",
    description: "Le Maroc, où l'Afrique rencontre l'Europe, vous transporte dans un univers de couleurs, de saveurs et de traditions. Des souks animés aux déserts majestueux, une expérience sensorielle unique.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000",
    region: "Afrique",
    highlights: ["Marrakech", "Sahara", "Fès"]
  },
  {
    name: "Canada",
    description: "Le Canada, terre de contrastes, vous émerveille avec ses paysages grandioses, des Rocheuses aux chutes du Niagara. Un pays où nature et urbanité se côtoient harmonieusement.",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000",
    region: "Amériques",
    highlights: ["Montréal", "Vancouver", "Banff"]
  }
];

const regions = ["Tous", "Europe", "Asie", "Amériques", "Afrique", "Océanie"];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Tous');
  const [selectedCountry, setSelectedCountry] = useState<typeof countries[0] | null>(null);

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         country.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'Tous' || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Régions</h2>
          <p className={styles.sidebarDescription}>Filtrez par continent</p>
        </div>
        <nav className={styles.regionNav}>
          {regions.map(region => (
            <button
              key={region}
              className={`${styles.regionButton} ${selectedRegion === region ? styles.active : ''}`}
              onClick={() => setSelectedRegion(region)}
            >
              {region}
            </button>
          ))}
        </nav>
        <div className={styles.sidebarFooter}>
          <p>Découvrez {filteredCountries.length} destinations</p>
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Around The World</h1>
          <p className={styles.description}>
            Découvrez le monde et planifiez votre prochain voyage
          </p>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Rechercher un pays..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>
        
        <div className={styles.countriesGrid}>
          {filteredCountries.map((country) => (
            <div 
              key={country.name}
              className={styles.countryCard}
              onClick={() => setSelectedCountry(country)}
            >
              <div className={styles.countryImage}>
                <img src={country.image} alt={country.name} />
                <span className={styles.regionTag}>{country.region}</span>
              </div>
              <div className={styles.countryInfo}>
                <h2>{country.name}</h2>
                <p>{country.description}</p>
                <div className={styles.highlights}>
                  {country.highlights.map((highlight, index) => (
                    <span key={index} className={styles.highlightTag}>
                      {highlight}
                    </span>
                  ))}
                </div>
                <button 
                  className={styles.exploreButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.href = `/country/${encodeURIComponent(country.name)}`;
                  }}
                >
                  Explorer ce pays
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
