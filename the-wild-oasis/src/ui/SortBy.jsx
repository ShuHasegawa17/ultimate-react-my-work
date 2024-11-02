import { useParams, useSearchParams } from 'react-router-dom';
import Select from './Select';

function SortBy({ options }) {
  const [searchPrams, setSearchParams] = useSearchParams();
  const sortBy = searchPrams.get('sortBy') || '';

  function handleChange(e) {
    searchPrams.set('sortBy', e.target.value);
    setSearchParams(searchPrams);
  }
  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
