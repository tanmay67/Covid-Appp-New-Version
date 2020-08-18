import { SET_LOADING_COUNTRY, COUNTRY_DATA } from '../Types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING_COUNTRY:
      return {
        ...state,
        loading: true,
      };
    case COUNTRY_DATA:
      return {
        ...state,
        countryData: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
