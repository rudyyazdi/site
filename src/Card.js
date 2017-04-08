import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Card = ({ id, isVisible }) => {
  const outerStyle = {
    width: 100,
    height: 100,
    border: '1px solid',
    cursor: 'pointer',
    backgroundImage: `url(https://api.adorable.io/avatars/100/rw${id}.png)`
  };
  const innerStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: isVisible ? 'transparent' : 'black'
  };

  return (
    <div style={outerStyle}>
      <div style={innerStyle} />
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  isVisible: PropTypes.bool
};
Card.defaultProps = {
  isVisible: false
};

export default Card;
