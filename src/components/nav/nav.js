import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav({ items }) {
  return (
    <nav className="nav">
      {Object.entries(items).map(([key, { path, content }]) => (
        <Link key={key} to={path} className="nav__item">
          {content}
        </Link>
      ))}
    </nav>
  );
}

const navInfoShape = PropTypes.shape({
  path: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
  content: PropTypes.node.isRequired,
});

Nav.propTypes = {
  items: PropTypes.objectOf(navInfoShape),
};

Nav.defaultProps = {
  items: {},
};
