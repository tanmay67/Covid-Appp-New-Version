import React, { useContext, useState } from 'react';
import IndiaContext from '../../context/india/indiaContext';
import Data from './Data';

const DistrictData = ({ stateName }) => {
  const indiaContext = useContext(IndiaContext);
  const { stateWise, loading } = indiaContext;

  const [districtData, setDistrict] = useState(null);

  const onChange = (e) => {
    setDistrict(e.target.value);
  };

  return (
    <div className="form-group my-4">
      {stateWise !== null &&
        !loading &&
        stateWise.map((state, i) => {
          if (state.state === stateName) {
            return (
              <select key={i} className="form-control" onChange={onChange}>
                <option value={1}>Select City...</option>
                {state.districtData.map((district, i) => (
                  <option key={i} value={district.district}>
                    {district.district}
                  </option>
                ))}
              </select>
            );
          }
        })}
      <Data district={districtData} stateName={stateName} />
    </div>
  );
};

export default DistrictData;
