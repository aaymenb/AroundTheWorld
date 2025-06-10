import React, { useState } from 'react';
import styles from './CountryModal.module.css';
import { Country, Highlight } from '../../data/countries';

interface CountryModalProps {
  country: Country;
  onClose: () => void;
}

const CountryModal: React.FC<CountryModalProps> = ({ country, onClose }) => {
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null);

  const handleHighlightClick = (highlight: Highlight) => {
    setSelectedHighlight(highlight);
  };

  const handleBackClick = () => {
    setSelectedHighlight(null);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        
        {selectedHighlight ? (
          <div className={styles.modalContent}>
            <div className={styles.modalImage}>
              <img src={selectedHighlight.image} alt={selectedHighlight.name} />
            </div>
            <div className={styles.modalInfo}>
              <button className={styles.backButton} onClick={handleBackClick}>&larr; Retour</button>
              <h2 className={styles.modalTitle}>{selectedHighlight.name}</h2>
              <p className={styles.modalDescription}>{selectedHighlight.description}</p>
            </div>
          </div>
        ) : (
          <div className={styles.modalContent}>
            <div className={styles.modalImage}>
              <img src={country.image} alt={country.name} />
            </div>
            <div className={styles.modalInfo}>
              <h2 className={styles.modalTitle}>{country.name}</h2>
              <p className={styles.modalRegion}>{country.region}</p>
              <p className={styles.modalDescription}>{country.description}</p>
              <div className={styles.modalHighlights}>
                <h3>Cliquez sur une ville pour en savoir plus :</h3>
                <ul>
                  {country.highlights.map((highlight, index) => (
                    <li key={index} onClick={() => handleHighlightClick(highlight)} className={styles.highlightItem}>
                      {highlight.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryModal; 