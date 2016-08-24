import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addStr: '',
      searchStr: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    if (e.target.type === 'search') {
      this.props.changeFilterStr(e.target.value);
      this.setState({searchStr: e.target.value});
    } else {
      this.props.changeAddStr(e.target.value);
      this.setState({addStr: e.target.value});
    }
  }
  render() {
    const { type, changeFilterStr, changeAddStr, addChannel } = this.props;
    const isFilter = type === 'filter';
    return (
      <form className="input" onSubmit={e => {
          e.preventDefault();
          addChannel(this.state.addStr);
          NotificationManager.success('', 'Channel Added');
          window.scrollTo(0,document.body.scrollHeight);
          this.setState({addStr: ''})
        }}>
        <input
          type={isFilter ? 'search' : 'text'}
          placeholder={isFilter ? 'Filter channels': 'Add a new channel'}
          onChange={this.handleChange}
          value={!isFilter ? this.state.addStr : this.state.searchStr}/>
          <i className={isFilter ? 'ion-search' : 'ion-plus'}/>
          <NotificationContainer />
      </form>
    );
  }
}

export default Input;
