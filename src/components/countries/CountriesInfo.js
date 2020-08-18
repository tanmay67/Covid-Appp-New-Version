import React, { useContext } from 'react';
import CountryContext from '../../context/countries/countryContext';

import CountUp from 'react-countup';

const CountriesInfo = ({ country }) => {
  const countryContext = useContext(CountryContext);
  const { loading, countryData } = countryContext;

  return (
    <div className="mt-4">
      {!loading &&
        countryData !== null &&
        countryData.map((countries, i) => {
          if (countries.country === country) {
            return (
              <div key={i} className="card card-body text-center shadow-card">
                <h4>{countries.country}</h4>
                <hr />
                <h5>
                  Cases:
                  <CountUp className="ml-2" end={countries.cases} />
                </h5>
                <h5>
                  Deaths:
                  <CountUp className="ml-2" end={countries.deaths} />
                </h5>
                <h5>
                  Recovered:{' '}
                  <CountUp className="ml-2" end={countries.recovered} />
                </h5>
                <h5>
                  Active: <CountUp className="ml-2" end={countries.active} />
                </h5>
                <h5>
                  Critical:{' '}
                  <CountUp className="ml-2" end={countries.critical} />
                </h5>
              </div>
            );
          }
        })}
    </div>
  );
};
export default CountriesInfo;
