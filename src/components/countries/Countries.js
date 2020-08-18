import React, { useContext, useEffect, useState } from 'react';
import CountryContext from '../../context/countries/countryContext';
import CountriesInfo from './CountriesInfo';
import Spinner from '../layouts/Spinner';

const Countries = () => {
  const countryContext = useContext(CountryContext);
  const { countryData, loading, countryDataFun } = countryContext;

  const [country, setCountry] = useState('');

  useEffect(() => {
    countryDataFun();
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="mt-5">
      <h2 className="text-center">Countries</h2>
      {!loading && countryData !== null ? (
        <select className="form-control" onChange={onChange}>
          <option value={1}>Select Country...</option>
          {countryData.map((country, i) => (
            <option key={i} value={country.country}>
              {country.country}
            </option>
          ))}
        </select>
      ) : (
        <Spinner />
      )}

      <CountriesInfo country={country} />
    </div>
  );
};

export default Countries;
