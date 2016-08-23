import React, { Component } from 'react';
import Control from './Control';
import Channels from './Channels';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Control />
        <Channels />
      </div>
    );
  }
}

export default App;
