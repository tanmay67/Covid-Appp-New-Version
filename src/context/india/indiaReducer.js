import { SET_LOADING, STATE_WISE_DATA } from '../Types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STATE_WISE_DATA:
      return {
        loading: false,
        stateWise: action.payload,
      };

    default:
      return state;
  }
};
