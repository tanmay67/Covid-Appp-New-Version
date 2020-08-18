import React, { useContext } from 'react';
import IndiaContext from '../../context/india/indiaContext';
import CountUp from 'react-countup';

const Data = ({ district, stateName }) => {
  const indiaContext = useContext(IndiaContext);
  const { stateWise, loading } = indiaContext;

  return (
    <div>
      {stateWise !== null &&
        !loading &&
        stateWise.map((state, i) => {
          if (state.state === stateName) {
            return state.districtData.map(
              (districtOne, i) =>
                districtOne.district === district && (
                  <div
                    key={i}
                    className="card card-body text-center my-4 shadow-card"
                  >
                    <h4>{districtOne.district}</h4>
                    <hr />
                    <h5>
                      <span>Active Cases: </span>
                      <CountUp end={districtOne.active} />
                    </h5>
                    <h5>
                      <span>Confirmed Cases: </span>
                      <CountUp end={districtOne.confirmed} />
                    </h5>
                    <h5>
                      <span>Recovered Cases: </span>
                      <CountUp end={districtOne.recovered} />
                    </h5>
                    <h5>
                      <span>Deceased Cases: </span>
                      <CountUp end={districtOne.deceased} />
                    </h5>
                  </div>
                )
            );
          }
        })}
    </div>
  );
};

export default Data;
