import {
  GET_RESULT_FAIL,
  GET_RESULT_REQUEST,
  GET_RESULT_SUCCESS,
} from '../types';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESULT_REQUEST:
      return {
        isLoading: true,
        ...state,
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
        ...state,
      };

    default:
      return state;
  }
};

export default resultReducer;
