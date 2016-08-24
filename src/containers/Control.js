import React, { Component } from 'react';
import Input from './Input';
import Nav from './Nav';
import { connect } from 'react-redux';
import { changeFilterStr, changeAddStr } from '../actions/controlActions';
import { addChannel } from '../actions/channelActions';

class Control extends Component {
  render() {
    const { changeFilterStr, changeAddStr, addChannel } = this.props;
    return (
      <div className="control">
        <h1>Twitch Streamers</h1>
        <div className="input-group">
          <Input type="filter" changeFilterStr={changeFilterStr}/>
          <Input type="add" changeAddStr={changeAddStr} addChannel={addChannel}/>
        </div>
        <Nav />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilterStr: str => dispatch(changeFilterStr(str)),
    changeAddStr: str => dispatch(changeAddStr(str)),
    addChannel: channel => dispatch(addChannel(channel))
  }
}

export default connect(null, mapDispatchToProps)(Control);
