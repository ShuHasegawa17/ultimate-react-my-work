// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from 'react';

export default function CurrencyConverter() {
  const [currency, setCurrency] = useState('');
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [converted, setConverted] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchCurrency = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${currency}&from=${fromCurrency}&to=${toCurrency}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error('somting went wrong fetching movies');

        const data = await res.json();
        console.log(data);
        setConverted(data.rates[toCurrency]);
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (fromCurrency === toCurrency) return setConverted(currency);

    fetchCurrency();

    return () => controller.abort();
  }, [currency, fromCurrency, toCurrency]);

  return (
    <div>
      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency(Number(e.target.value))}
        disabled={isLoading}
      />

      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {converted ? (
        <p>
          OUTPUT:{converted} {toCurrency}
        </p>
      ) : null}
    </div>
  );
}
