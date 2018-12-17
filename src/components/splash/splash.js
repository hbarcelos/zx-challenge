import React from 'react';
import PropTypes from 'prop-types';
import './splash.css';

export default function Splash({ children }) {
  return (
    <div className="splash">
      <div className="splash__inner">{children}</div>
    </div>
  );
}

Splash.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

Splash.defaultProps = {
  children: null,
};
