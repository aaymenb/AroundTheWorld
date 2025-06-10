'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import { countries, Country, Highlight } from '@/app/data/countries';
import CountryModal from '@/app/components/CountryModal/CountryModal';
import Globe from '@/app/components/Globe/Globe';

const regions = ["Tous", "Europe", "Asie", "Amériques", "Afrique", "Océanie"];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Tous');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleOpenModal = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleCloseModal = () => {
    setSelectedCountry(null);
  };

  const filteredCountries = countries.filter((country: Country) => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         country.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'Tous' || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const showGlobe = searchQuery === '' && selectedRegion === 'Tous';

  return (
    <div className={`${styles.container} ${visible ? styles.visible : ''}`}>
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
        
        {showGlobe && (
          <div className={styles.globeContainer}>
            <Globe countries={countries} onCountryClick={handleOpenModal} />
          </div>
        )}

        <div className={styles.countriesGrid}>
          {filteredCountries.map((country: Country, index: number) => (
            <div 
              key={country.name}
              className={styles.countryCard}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => handleOpenModal(country)}
            >
              <div className={styles.countryImage}>
                <img src={country.image} alt={country.name} />
                <span className={styles.regionTag}>{country.region}</span>
              </div>
              <div className={styles.countryInfo}>
                <h2>{country.name}</h2>
                <p>{country.description}</p>
                <div className={styles.highlights}>
                  {country.highlights.map((highlight: Highlight, index: number) => (
                    <span key={index} className={styles.highlightTag}>
                      {highlight.name}
                    </span>
                  ))}
                </div>
                <button 
                  className={styles.exploreButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(country);
                  }}
                >
                  Explorer ce pays
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedCountry && (
        <CountryModal country={selectedCountry} onClose={handleCloseModal} />
      )}
    </div>
  );
}
