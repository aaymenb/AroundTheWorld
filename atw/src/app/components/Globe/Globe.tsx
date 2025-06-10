'use client';

import React from 'react';
import Globe from 'react-globe.gl';
import { Country } from '@/app/data/countries';

interface GlobeProps {
  countries: Country[];
  onCountryClick: (country: Country) => void;
}

const World: React.FC<GlobeProps> = ({ countries, onCountryClick }) => {
  const gData = countries.map((country) => ({
    lat: country.coordinates.lat,
    lng: country.coordinates.lng,
    size: 0.1,
    color: 'red',
    country: country,
  }));

  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      pointsData={gData}
      pointAltitude="size"
      pointColor="color"
      onPointClick={(point: any) => {
        onCountryClick(point.country);
      }}
    />
  );
};

export default World; 