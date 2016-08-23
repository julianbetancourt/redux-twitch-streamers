import * as types from '../actions/actionTypes';
import initialState from './initialState';

const controls = (state = initialState.controls, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        filter: action.filter
      });
    default:
      return state;
  }
}

export default controls;
