import {
  GET_RESULT_FAIL,
  GET_RESULT_REQUEST,
  GET_RESULT_SUCCESS,
} from '../types';

// initial value of results
const initialState = {
  data: [],
  isLoading: null,
  error: null,
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULT_REQUEST:
      return {
        isLoading: true,
      };
    case GET_RESULT_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case GET_RESULT_FAIL:
      return {
        isLoading: false,
        error: action.payload,
        data: [],
      };

    default:
      return state;
  }
};

export default resultReducer;
