'use client';

import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import styles from './MapChart.module.css';

const MapChart = ({ geoJson, onCountryClick }: { geoJson: any, onCountryClick: (countryName: string) => void }) => {
  return (
    <div className={styles.mapContainer}>
      <ComposableMap projectionConfig={{ scale: 250 }}>
        <ZoomableGroup center={[0, 20]} maxZoom={6}>
          <Geographies geography={geoJson}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => onCountryClick(geo.properties.NAME)}
                  style={{
                    default: {
                      fill: '#ffe0b2',
                      stroke: '#d95f02',
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    hover: {
                      fill: '#ff8c42',
                      stroke: '#fff',
                      strokeWidth: 1.5,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    pressed: {
                      fill: '#d95f02',
                      stroke: '#fff',
                      strokeWidth: 1.5,
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart; 