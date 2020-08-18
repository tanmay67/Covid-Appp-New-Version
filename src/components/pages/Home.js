import React, { useEffect, useContext } from 'react';
import CountryContext from '../../context/countries/countryContext';
import CountUp from 'react-countup';
import Spinner from '../layouts/Spinner';

const Home = () => {
  const countryContext = useContext(CountryContext);
  const { countryData, loading, countryDataFun } = countryContext;

  useEffect(() => {
    countryDataFun();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container text-center">
      <h2>World Stats</h2>
      {!loading && countryData !== null ? (
        countryData.map((country, i) => {
          if (country.country === 'World') {
            return (
              <div key={i} className="row text-center mt-5">
                <div className="col-md-4 ">
                  <div className="card card-body m-2 border border-warning">
                    <h2>TOTAL CASES</h2>
                    <h3>
                      <CountUp duration={2} end={country.cases} />
                    </h3>
                    <hr />
                    <h5 className="lead">Number of cases from COVID-19</h5>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card card-body m-2 border border-danger">
                    <h2>TOTAL DEATHS</h2>
                    <h3>
                      <CountUp duration={2} end={country.deaths} />
                    </h3>
                    <hr />
                    <h5 className="lead">Number of deaths from COVID-19</h5>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card card-body m-2 border border-success">
                    <h2>RECOVERED</h2>
                    <h3>
                      <CountUp duration={2} end={country.recovered} />
                    </h3>
                    <hr />
                    <h5 className="lead">
                      Number of recovered people from COVID-19
                    </h5>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card card-body m-2 border border-primary">
                    <h2>TOTAL ACTIVE CASES</h2>
                    <h3>
                      <CountUp duration={2} end={country.active} />
                    </h3>
                    <hr />
                    <h5 className="lead">
                      Number of active cases from COVID-19
                    </h5>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card card-body m-2 border border-warning">
                    <h2>CRITICAL CASES</h2>
                    <h3>
                      <CountUp duration={2} end={country.critical} />
                    </h3>
                    <hr />
                    <h5 className="lead">
                      Number of critical cases from COVID-19
                    </h5>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card card-body m-2 border border-info">
                    <h2>CASES PER MILLION</h2>
                    <h3>
                      <CountUp duration={2} end={country.casesPerOneMillion} />
                    </h3>
                    <hr />
                    <h5 className="lead">
                      Number of cases from COVID-19 per 1 million
                    </h5>
                  </div>
                </div>
              </div>
            );
          }
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;
