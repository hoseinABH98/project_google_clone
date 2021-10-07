import axios from 'lib/axios';

// types
import {
  GET_RESULT_FAIL,
  GET_RESULT_REQUEST,
  GET_RESULT_SUCCESS,
} from 'store/types';

export const getResults = (endpoint) => async (dispatch) => {
  try {
    // Request For Results
    dispatch({ type: GET_RESULT_REQUEST });

    // Fetch The Results
    const { data } = await axios.get(endpoint);
    dispatch({ type: GET_RESULT_SUCCESS, payload: data });
  } catch (error) {
    // Fetch Results Fails
    dispatch({
      type: GET_RESULT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
