import React from 'react';
import styles from '../app/page.module.css';
import Image from 'next/image';

interface CountryCardProps {
  country: {
    name: string;
    capital: string;
    population: number;
    area: number;
    languages: string[];
    currency: string;
    imageUrl: string;
    isTrending?: boolean;
  };
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className={styles.countryCard}>
      {country.isTrending && (
        <div className={styles.trendingBadge}>
          Tendance
        </div>
      )}
      <div className={styles.cardImage}>
        <Image
          src={country.imageUrl}
          alt={country.name}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.cardContent}>
        <h3>{country.name}</h3>
        <p className={styles.capital}>{country.capital}</p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Population</span>
            <span className={styles.statValue}>
              {country.population.toLocaleString()}
            </span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Superficie</span>
            <span className={styles.statValue}>
              {country.area.toLocaleString()} km²
            </span>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>Langues</span>
            <span className={styles.detailValue}>
              {country.languages.join(', ')}
            </span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>Monnaie</span>
            <span className={styles.detailValue}>{country.currency}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard; 