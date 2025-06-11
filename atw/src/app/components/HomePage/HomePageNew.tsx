'use client';

import { useState } from 'react';
import styles from './Dashboard.module.css';
import { countries, Country } from '@/app/data/countries';
import CountryModal from '@/app/components/CountryModal/CountryModal';
import MapChart from '../MapChart/MapChart';
import { FaSearch, FaUser } from 'react-icons/fa';
import { GiColiseum, GiPagoda, GiLibertyWing, GiSydneyOperaHouse } from 'react-icons/gi';

const continents = ["Tous", "Afrique", "Amériques", "Asie", "Europe", "Océanie"];
const featuredDestinations = ["Italie", "Japon", "États-Unis", "Australie"];

const destinationIcons: { [key: string]: React.ReactElement } = {
  "Italie": <GiColiseum />,
  "Japon": <GiPagoda />,
  "États-Unis": <GiLibertyWing />,
  "Australie": <GiSydneyOperaHouse />,
};

export default function HomePageNew({ geoJson }: { geoJson: any }) {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedContinent, setSelectedContinent] = useState('Europe');

  const handleOpenModal = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleMapCountryClick = (countryName: string) => {
    let foundCountry = countries.find(c => c.name === countryName || c.altNames?.includes(countryName));
    if (!foundCountry) {
      foundCountry = {
        name: countryName,
        description: "Les informations détaillées pour ce pays seront bientôt disponibles.",
        image: `https://source.unsplash.com/800x600/?${countryName}`,
        region: 'Monde',
        highlights: [],
        coordinates: { lat: 0, lng: 0 },
      };
    }
    setSelectedCountry(foundCountry);
  };

  const handleCloseModal = () => setSelectedCountry(null);
  
  const filteredCountries = countries.filter(c => selectedContinent === 'Tous' || c.region === selectedContinent);

  return (
    <div className={styles.pageBackground}>
      <div className={styles.dashboardContainer}>
        <aside className={styles.sidebar}>
          <h1 className={styles.title}>Around the World</h1>
          <nav className={styles.continentList}>
            {continents.map(continent => (
              <button
                key={continent}
                className={`${styles.continentButton} ${selectedContinent === continent ? styles.active : ''}`}
                onClick={() => setSelectedContinent(continent)}
              >
                {continent}
              </button>
            ))}
          </nav>
        </aside>

        <main className={styles.mainContent}>
          <div className={styles.topBar}>
            <button className={styles.iconButton}><FaSearch /></button>
            <button className={styles.iconButton}><FaUser /></button>
          </div>
          <div className={styles.mapContainer}>
            <MapChart geoJson={geoJson} onCountryClick={handleMapCountryClick} />
          </div>
          
          <h2 className={styles.sectionTitle}>Destinations</h2>
          <div className={styles.destinationsGrid}>
            {filteredCountries.slice(0, 4).map(country => (
              <div key={country.name} className={styles.destinationCard} onClick={() => handleOpenModal(country)}>
                <div className={styles.destinationIcon}>
                  {destinationIcons[country.name] || '🌍'}
                </div>
                <p className={styles.destinationName}>{country.name}</p>
              </div>
            ))}
          </div>
        </main>

        {selectedCountry && (
          <CountryModal country={selectedCountry} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
} 