import { createContext, useContext, useEffect, useReducer } from 'react';

const BASE_URL = 'http://localhost:8000';

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const initialState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: '',
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'loading':
        return { ...state, isLoading: true };
      case 'cities/loaded':
        return {
          ...state,
          isLoading: false,
          cities: action.payload,
        };
      case 'city/loaded':
        return {
          ...state,
          isLoading: false,
          currentCity: action.payload,
        };
      case 'city/created':
        return {
          ...state,
          isLoading: false,
          cities: [...state.cities, action.payload],
          currentCity: action.payload,
        };
      case 'city/deleted':
        return {
          ...state,
          isLoading: false,
          cities: state.cities.filter((city) => city.id !== action.payload),
          currentCity: {},
        };
      case 'rejected':
        return { ...state, isLoading: false, error: action.payload };
      default:
        throw new Error('Action Type unknown');
    }
  }

  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        dispatch({ type: 'loading' });
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: 'cities/loaded', payload: data });
      } catch {
        dispatch({ type: 'rejected', payload: 'fetching error cities' });
      }
    }
    fetchCities();
  }, []);

  async function createCity(newCity) {
    try {
      dispatch({ type: 'loading' });
      const res = await fetch(`${BASE_URL}/cities/`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      dispatch({ type: 'city/created', payload: data });
    } catch {
      dispatch({ type: 'rejected', payload: 'create city error' });
    }
  }

  async function deleteCity(id) {
    try {
      dispatch({ type: 'loading' });
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });
      dispatch({ type: 'city/deleted', payload: id });
    } catch {
      dispatch({ type: 'rejected', payload: 'delete city error' });
    }
  }

  async function getCity(id) {
    console.log(id, currentCity.id);
    if (Number(id) === currentCity.id) return;
    try {
      dispatch({ type: 'loading' });
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      dispatch({ type: 'city/loaded', payload: data });
    } catch {
      dispatch({ type: 'rejected', payload: 'fetch city error' });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);

  // providerタグ外で使っていないかの確認
  if (context === undefined)
    throw new Error('CitiesContext was used outside the CitiesProvider');

  return context;
}

export { CitiesProvider, useCities };
