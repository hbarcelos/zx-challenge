import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

export default function Header({ children }) {
  return <div className="header">{children}</div>;
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Header.defaultProps = {
  children: null,
};
