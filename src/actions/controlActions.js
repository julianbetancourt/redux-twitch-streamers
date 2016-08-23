import * as types from './actionTypes';

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}
