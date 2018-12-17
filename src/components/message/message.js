import React from 'react';
import PropTypes from 'prop-types';
import './message.css';

export default function Message({ content }) {
  return <p className="message">{content}</p>;
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
};
