import React, { useEffect, useContext, useState } from 'react';
import IndiaContext from '../../context/india/indiaContext';
import DistrictData from './DistrictData';
import Spinner from '../layouts/Spinner';

const Home = () => {
  const indiaContext = useContext(IndiaContext);
  const { stateWise, loading, stateWiseData } = indiaContext;

  const [stateName, setStateName] = useState('');

  useEffect(() => {
    stateWiseData();
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    setStateName(e.target.value);
  };

  return (
    <div className="mt-3">
      <h2 className="text-center">India</h2>
      {!loading && stateWise !== null ? (
        <div className="form-group my-4">
          <select className="form-control" onChange={onChange}>
            <option value={1}>Select State...</option>
            {!loading &&
              stateWise !== null &&
              stateWise.map((state, i) => (
                <option key={i} value={state.state}>
                  {state.state}
                </option>
              ))}
          </select>

          <DistrictData stateName={stateName} />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;
