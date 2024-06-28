import Spinner from './Spinner';
import styles from './CountryList.module.css';
import CountryItem from './CountryItem';
import Message from './Message';

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="empty city" />;

  const countries = cities.reduce((ary, city) => {
    if (!ary.map((el) => el.country).includes(city.country)) {
      return [
        ...ary,
        { id: city.id, country: city.country, emoji: city.emoji },
      ];
    } else {
      return ary;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
