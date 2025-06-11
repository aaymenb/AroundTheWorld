'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import styles from './destination.module.css';
import { countries } from '@/app/data/countries';

const DestinationPage = () => {
  const params = useParams();
  const cityName = decodeURIComponent(params.cityName as string);

  // Trouver les informations de la ville et du pays
  const findDestinationDetails = () => {
    for (const country of countries) {
      const highlight = country.highlights.find(h => h.name === cityName);
      if (highlight) {
        return { country, highlight };
      }
    }
    return null;
  };

  const destinationDetails = findDestinationDetails();

  if (!destinationDetails) {
    return <div>Destination non trouvée.</div>;
  }
  
  const { country, highlight } = destinationDetails;

  return (
    <div className={styles.container}>
      <header className={styles.header} style={{ backgroundImage: `url(${highlight.image})` }}>
        <div className={styles.headerOverlay}>
          <h1>{highlight.name}</h1>
          <h2>{country.name}</h2>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.resultsSection}>
            <h3>🏄 Activités</h3>
            <div className={styles.resultCard}>
              <p>{highlight.name}</p>
              <p>{highlight.description}</p>
            </div>
        </div>
      </main>
    </div>
  );
};

export default DestinationPage; 