import React, { Component } from 'react';
import Input from './Input';
import Nav from './Nav';
import { connect } from 'react-redux';
import { changeFilterStr } from '../actions/controlActions';

class Control extends Component {
  render() {
    const { changeFilterStr } = this.props;
    return (
      <div className="control">
        <h1>Twitch Viewer</h1>
        <div className="input-group">
          <Input type="filter" changeFilterStr={changeFilterStr}/>
          <Input type="add" />
        </div>
        <Nav />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilterStr: str => dispatch(changeFilterStr(str))
  }
}

export default connect(null, mapDispatchToProps)(Control);
