'use client';

import React, { useState, useEffect, useRef } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import { Country } from '@/app/data/countries';
import styles from './Globe.module.css';

interface GlobeProps {
  countries: Country[];
  onCountryClick: (country: Country) => void;
  geoJsonData: any;
}

const World: React.FC<GlobeProps> = ({ countries, onCountryClick, geoJsonData }) => {
  const globeRef = useRef<GlobeMethods | undefined>();
  const [polygonsData, setPolygonsData] = useState<any[]>([]);

  useEffect(() => {
    setPolygonsData(geoJsonData.features);
  }, [geoJsonData]);

  const gData = countries.map((country) => ({
    lat: country.coordinates.lat,
    lng: country.coordinates.lng,
    size: 0.1,
    color: 'red',
    country: country,
  }));

  const handlePolygonClick = (polygon: any) => {
    const clickedCountryName = polygon.properties.ADMIN;
    const matchedCountry = countries.find(c => c.name === clickedCountryName || c.name === polygon.properties.NAME_FR);

    if (matchedCountry) {
      onCountryClick(matchedCountry);
    }
    
    if (globeRef.current) {
      const { lat, lng } = polygon.properties;
       globeRef.current.pointOfView({ lat: polygon.properties.LABEL_Y, lng: polygon.properties.LABEL_X, altitude: 2 }, 1500);
    }
  };
  
  const zoom = (direction: number) => {
    if (!globeRef.current) return;
    const currentAltitude = globeRef.current.pointOfView().altitude || 2.5;
    globeRef.current.pointOfView({ altitude: currentAltitude * (1 - direction * 0.2) }, 500);
  };

  return (
    <div className={styles.globeContainer}>
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        
        polygonsData={polygonsData}
        onPolygonClick={handlePolygonClick}
        polygonCapColor={(feat: any) => feat.properties.ADMIN === "France" ? 'rgba(0, 100, 0, 0.4)' : 'rgba(0, 0, 0, 0)'}
        polygonSideColor={() => 'rgba(0, 100, 0, 0.05)'}
        polygonStrokeColor={() => '#6b7280'}

        pointsData={gData}
        pointAltitude="size"
        pointColor="color"
        onPointClick={(point: any) => onCountryClick(point.country)}
        
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        enablePointerInteraction={true} 
      />
      <div className={styles.zoomControls}>
        <button onClick={() => zoom(1)}>+</button>
        <button onClick={() => zoom(-1)}>-</button>
      </div>
    </div>
  );
};

export default World; 