import fs from 'fs';
import path from 'path';
import HomePage from '@/app/components/HomePage/HomePage';

async function getGeoJsonData() {
  const geoJsonPath = path.resolve('./public/ne_110m_admin_0_countries.geojson');
  const geoJsonData = fs.readFileSync(geoJsonPath, 'utf-8');
  return JSON.parse(geoJsonData);
}

export default async function Home() {
  const geoJson = await getGeoJsonData();
  return <HomePage geoJson={geoJson} />;
}
