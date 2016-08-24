import * as types from '../actions/actionTypes';
import initialState from './initialState';

const controls = (state = initialState.controls, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        filter: action.filter
      });
    case types.CHANGE_FILTER_STR:
      return Object.assign({}, state, {
        searchChannel: action.str
      });
    case types.CHANGE_ADD_STR:
      return Object.assign({}, state, {
        newChannel: action.str
      })
    default:
      return state;
  }
}

export default controls;
