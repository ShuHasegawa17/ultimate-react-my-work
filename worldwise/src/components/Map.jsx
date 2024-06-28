import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  const navigate = useNavigate();

  const [searchParams, setSearcheParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <h1>Map</h1>
      <h1>
        Position:{lat}, {lng}
      </h1>
      <button onClick={() => setSearcheParams({ lat: 23, lng: 50 })}>
        change pos
      </button>
    </div>
  );
}

export default Map;
