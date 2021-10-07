import { SET_SEARCH_TERM } from '../types';

const searchTermReducer = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;

    default:
      return state;
  }
};

export default searchTermReducer;
