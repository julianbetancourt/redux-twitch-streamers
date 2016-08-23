import React from 'react';
import _ from 'lodash';

const NavItem = ({active, text, shadow, onFilterClick}) => {
  const itemStyles = {
    up: {
       boxShadow: 'inset 0px 9px 12px 0px rgba(0,0,0,0.45)'
    },
    down: {
      boxShadow: 'inset 0px -9px 12px 0px rgba(0,0,0,0.45)'
    },
    nothing: {
      boxShadow: 'none'
    }
  }
  return (
    <span
      className={active ? 'nav__item nav__active' : 'nav__item'}
      style={shadow === 'up-shadow' ? itemStyles.up : shadow === 'down-shadow' ? itemStyles.down : itemStyles.nothing}
      onClick={() => onFilterClick(text)}>
      {_.capitalize(text)}
    </span>
  );
}

export default NavItem;
