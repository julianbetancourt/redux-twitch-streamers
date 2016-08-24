import React, { Component } from 'react';


class Input extends Component {
  render() {
    const { type, changeFilterStr } = this.props;
    return (
      <form className="input">
        <input
          type={type === 'filter' ? 'search' : 'text'}
          placeholder={type === 'filter' ? 'Filter channels': 'Add a new channel'}
          onChange={ e => changeFilterStr(e.target.value)}/>
        <i className={type === 'filter' ? 'ion-search' : 'ion-plus'}/>
      </form>
    );
  }
}

export default Input;
