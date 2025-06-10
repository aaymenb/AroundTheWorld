import React from 'react';
import Link from 'next/link';
import styles from './CountryModal.module.css';
import { Country, Highlight } from '@/app/data/countries';

interface CountryModalProps {
  country: Country;
  onClose: () => void;
}

const CountryModal: React.FC<CountryModalProps> = ({ country, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <div className={styles.modalContent}>
          <div className={styles.modalImage}>
            <img src={country.image} alt={country.name} />
          </div>
          <div className={styles.modalInfo}>
            <h2 className={styles.modalTitle}>{country.name}</h2>
            <p className={styles.modalRegion}>{country.region}</p>
            <p className={styles.modalDescription}>{country.description}</p>
            <div className={styles.modalHighlights}>
              <h3>Explorer une destination :</h3>
              <ul>
                {country.highlights.map((highlight, index) => (
                  <Link key={index} href={`/destination/${encodeURIComponent(highlight.name)}`} passHref>
                    <li className={styles.highlightItem}>
                      {highlight.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryModal; 