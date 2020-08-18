import { STATE_WISE_DATA, SET_LOADING } from '../Types';
import IndiaContext from './indiaContext';
import indiaReducer from './indiaReducer';
import axios from 'axios';

import React, { useReducer } from 'react';

const IndiaState = (props) => {
  const initialState = {
    stateWise: null,
    loading: false,
    districtData: '',
  };

  const [state, dispatch] = useReducer(indiaReducer, initialState);

  //functions

  //stateWiseData
  const stateWiseData = async () => {
    setLoading();
    const res = await axios.get(
      'https://api.covid19india.org/v2/state_district_wise.json'
    );
    dispatch({
      type: STATE_WISE_DATA,
      payload: res.data,
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  return (
    <IndiaContext.Provider
      value={{
        stateWise: state.stateWise,
        loading: state.loading,
        stateWiseData,
      }}
    >
      {props.children}
    </IndiaContext.Provider>
  );
};

export default IndiaState;
