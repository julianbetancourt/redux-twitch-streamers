import * as types from './actionTypes';

export const setVisibilityFilter = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}

export const changeFilterStr = (str) => {
  return {
    type: types.CHANGE_FILTER_STR,
    str
  }
}
