import React, { useReducer } from 'react';
import { COUNTRY_DATA, SET_LOADING_COUNTRY } from '../Types';
import axios from 'axios';
import CountryContext from './countryContext';
import countryReducer from './countryReducer';

const CountryState = (props) => {
  const initialState = {
    countryData: null,
    loading: false,
  };
  const [state, dispatch] = useReducer(countryReducer, initialState);

  //funtions (actions)
  const countryDataFun = async () => {
    setLoading();
    const res = await axios.get(
      'https://coronavirus-19-api.herokuapp.com/countries/'
    );
    dispatch({
      type: COUNTRY_DATA,
      payload: res.data,
    });
  };

  const setLoading = () => {
    dispatch({
      type: SET_LOADING_COUNTRY,
    });
  };

  return (
    <CountryContext.Provider
      value={{
        countryData: state.countryData,
        loading: state.loading,
        countryDataFun,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
