import React, { Component } from 'react';
import Input from './Input';
import Nav from './Nav';
//import { connect } from 'react-redux';

class Control extends Component {
  render() {
    return (
      <div className="control">
        <h1>Twitch Viewer</h1>
        <div className="input-group">
          <Input type="filter" />
          <Input type="add" />
        </div>
        <Nav />
      </div>
    );
  }
}

export default Control;
