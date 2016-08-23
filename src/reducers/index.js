import { combineReducers } from 'redux';
import channels from './channels';
import controls from './controls';

const rootReducer = combineReducers({
  controls,
  channels
});

export default rootReducer;
