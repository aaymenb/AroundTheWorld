import HomePageNew from './components/HomePage/HomePageNew';
import { headers } from 'next/headers';

async function getGeoJsonData() {
  const headersList = headers();
  const host = headersList.get('host') || "";
  const protocol = host.startsWith('localhost') ? 'http' : 'https';
  const url = `${protocol}://${host}/ne_110m_admin_0_countries.geojson`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch geoJSON from ${url}`);
  }
  return res.json();
}

export default async function Home() {
  const geoJson = await getGeoJsonData();
  return <HomePageNew geoJson={geoJson} />;
}
