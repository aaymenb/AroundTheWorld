'use client';

import { useParams } from 'next/navigation';
import React, { useState } from 'react';
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

  const [searchCriteria, setSearchCriteria] = useState({
    departureAirport: '',
    departureDate: '',
    returnDate: '',
    travelers: 1,
  });
  
  const [results, setResults] = useState({
    flights: [] as any[],
    hotels: [] as any[],
    activities: [] as any[],
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de la recherche
    setResults({
      flights: [
        { airline: 'Air France', price: '580€', duration: '8h 15m', stops: 'Direct' },
        { airline: 'Lufthansa', price: '450€', duration: '10h 30m', stops: '1 escale' },
      ],
      hotels: [
        { name: `Grand Hôtel ${cityName}`, price: '250€/nuit', rating: 4.5 },
        { name: 'Hôtel Central', price: '150€/nuit', rating: 4.0 },
      ],
      activities: destinationDetails ? [destinationDetails.highlight] : [],
    });
  };
  
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
        <div className={styles.planningSection}>
          <h2>Planifiez votre voyage</h2>
          <form onSubmit={handleSearch} className={styles.form}>
            <input type="text" placeholder="Aéroport de départ (ex: CDG)" required className={styles.input} />
            <input type="number" min="1" placeholder="Voyageurs" required className={styles.input} />
            <input type="date" required className={styles.input} />
            <input type="date" required className={styles.input} />
            <button type="submit" className={styles.button}>Rechercher</button>
          </form>
        </div>

        {results.flights.length > 0 && (
          <div className={styles.resultsSection}>
            <h3>✈️ Vols</h3>
            {results.flights.map((flight, index) => (
              <div key={index} className={styles.resultCard}>
                <p>{flight.airline} - {flight.duration} ({flight.stops})</p>
                <p className={styles.price}>{flight.price}</p>
              </div>
            ))}
            <h3>🏨 Hôtels</h3>
            {results.hotels.map((hotel, index) => (
              <div key={index} className={styles.resultCard}>
                <p>{hotel.name} - ⭐ {hotel.rating}</p>
                <p className={styles.price}>{hotel.price}</p>
              </div>
            ))}
            <h3>🏄 Activités</h3>
            {results.activities.map((activity, index) => (
              <div key={index} className={styles.resultCard}>
                <p>{activity.name}</p>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default DestinationPage; 