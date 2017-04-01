import React, { PropTypes } from 'react';

const style = {
  width: 100,
  height: 100,
  backgroundColor: 'red'
};

const Card = ({ id }) => (
  <div style={style}>
    {id}
  </div>
);

Card.propTypes = {
  id: PropTypes.number.isRequired
};

export default Card;
