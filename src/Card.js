import React, { PropTypes } from 'react';

const defaultStyle = {
  width: 100,
  height: 75,
  fontFamily: 'monospace',
  fontSize: 40,
  textAlign: 'center',
  paddingTop: 25,
  border: '1px doted',
  cursor: 'pointer'
};

const Card = ({ id, isVisible }) => {
  const style = Object.assign(defaultStyle);
  if (isVisible) {
    style.backgroundColor = 'white';
  } else {
    style.backgroundColor = 'black';
  }
  return (
    <div style={style}>
      {id}
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
