//import * as types from '../actions/actionTypes';
import initialState from './initialState';

const controls = (state = initialState.controls, action) => {
  switch (action.type) {
    case 'TEST':
      return 'TEST';
    default:
      return state;
  }
}

export default controls;
