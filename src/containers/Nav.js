import React, { Component } from 'react';
import NavItem from '../components/NavItem';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/controlActions';

const hasShadow = (filters, selected, index) => {
  if (filters[index - 1] === selected) {
    return 'up-shadow';
  } else if (filters[index + 1] === selected) {
    return 'down-shadow';
  } else {
    return 'no-shadow';
  }
}

class Nav extends Component {
  render() {
    const { filter, onFilterClick } = this.props;
    const filters = ["all", "online", "offline"];
    return (
      <div className="nav">
        {
          filters.map((f, i) =>
            <NavItem
              text={f}
              active={filter === f}
              shadow={hasShadow(filters, filter, i)}
              key={i}
              onFilterClick={(filter) => onFilterClick(filter)}/>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.controls.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterClick: (filter) => dispatch(setVisibilityFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
