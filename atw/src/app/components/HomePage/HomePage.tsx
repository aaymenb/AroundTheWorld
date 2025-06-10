'use client';

import { useState, useEffect } from 'react';
import styles from '@/app/page.module.css';
import { countries, Country, Highlight } from '@/app/data/countries';
import CountryModal from '@/app/components/CountryModal/CountryModal';
import Globe from '@/app/components/Globe/Globe';

const popularDestinations = ["Italie", "Japon", "États-Unis", "Espagne"];

export default function HomePage({ geoJson }: { geoJson: any }) {
  const [searchQuery, setSearchQuery] = useState('');
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

  const filteredCountries = countries.filter((country: Country) => 
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularCountries = countries.filter(c => popularDestinations.includes(c.name));
  const otherCountries = countries.filter(c => !popularDestinations.includes(c.name));

  return (
    <div className={`${styles.container} ${visible ? styles.visible : ''}`}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Trouvez votre prochaine destination</h1>
            <p className={styles.subtitle}>Recherchez des lieux à visiter</p>
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
          <div className={styles.globeContainer}>
            <Globe countries={countries} onCountryClick={handleOpenModal} geoJsonData={geoJson} />
          </div>
        </div>

        {searchQuery === '' ? (
          <>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Destinations populaires</h2>
              <div className={styles.countriesGrid}>
                {popularCountries.map((country: Country, index: number) => (
                  <CountryCard key={country.name} country={country} index={index} onOpenModal={handleOpenModal} />
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Inspirations de voyage</h2>
              <div className={styles.countriesGrid}>
                {otherCountries.map((country: Country, index: number) => (
                  <CountryCard key={country.name} country={country} index={index} onOpenModal={handleOpenModal} />
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Résultats de recherche</h2>
            <div className={styles.countriesGrid}>
              {filteredCountries.map((country: Country, index: number) => (
                <CountryCard key={country.name} country={country} index={index} onOpenModal={handleOpenModal} />
              ))}
            </div>
          </section>
        )}

      </main>

      {selectedCountry && (
        <CountryModal country={selectedCountry} onClose={handleCloseModal} />
      )}
    </div>
  );
}

const CountryCard = ({ country, index, onOpenModal }: { country: Country, index: number, onOpenModal: (country: Country) => void }) => (
  <div
    className={styles.countryCard}
    style={{ animationDelay: `${index * 0.05}s` }}
    onClick={() => onOpenModal(country)}
  >
    <div className={styles.countryImage}>
      <img src={country.image} alt={country.name} />
      <span className={styles.regionTag}>{country.region}</span>
    </div>
    <div className={styles.countryInfo}>
      <h2>{country.name}</h2>
    </div>
  </div>
); 