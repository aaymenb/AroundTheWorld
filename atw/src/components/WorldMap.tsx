'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import styles from './WorldMap.module.css';

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

// Données des pays (à remplacer par une API ou une base de données)
const countryData = {
  "France": {
    name: "France",
    description: "La France, pays de l'art de vivre, vous accueille avec sa gastronomie raffinée, ses monuments historiques et ses paysages variés. De Paris à la Côte d'Azur, découvrez un pays riche en culture et en histoire.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000"
  },
  "Japan": {
    name: "Japon",
    description: "Le Japon, où tradition et modernité se rencontrent. Des temples anciens aux gratte-ciels futuristes, des jardins zen aux rues animées de Tokyo, découvrez un pays unique en son genre.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000"
  },
  // Ajoutez d'autres pays ici
};

interface WorldMapProps {
  onCountrySelect: (country: typeof countryData[keyof typeof countryData] | null) => void;
}

const WorldMap = ({ onCountrySelect }: WorldMapProps) => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const handleCountryClick = (geo: any) => {
    const countryName = geo.properties.name;
    const countryInfo = countryData[countryName as keyof typeof countryData];
    if (countryInfo) {
      onCountrySelect(countryInfo);
    }
  };

  return (
    <div className={styles.mapWrapper}>
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 200,
          center: [0, 0]
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  setHoveredCountry(geo.properties.name);
                }}
                onMouseLeave={() => {
                  setHoveredCountry(null);
                }}
                onClick={() => handleCountryClick(geo)}
                style={{
                  default: {
                    fill: "#FFFFFF",
                    outline: "none",
                    stroke: "#000000",
                    strokeWidth: 0.5,
                    cursor: "pointer",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                    stroke: "#000000",
                    strokeWidth: 0.5,
                    cursor: "pointer",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                    stroke: "#000000",
                    strokeWidth: 0.5,
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {hoveredCountry && (
        <div className={styles.tooltip}>
          {hoveredCountry}
        </div>
      )}
    </div>
  );
};

export default WorldMap; 