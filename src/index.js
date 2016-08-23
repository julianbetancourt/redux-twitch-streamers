import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './sass/main.sass';
import configStore from './store/configStore';
import { Provider } from 'react-redux';
import { addChannel } from './actions/channelActions';

const store = configStore();

const channelNames = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", 'comster404', 'ESL_SC2', 'summit1g', "hastad", 'brunofin'];

channelNames.forEach((el) => store.dispatch(addChannel(el)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
