import React from 'react';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';

import { cardFlip, } from './actions';


const _Card = ({ isFlipped, id, pairId, onClick, }) => {
  const outerStyle = {
    width: 100,
    height: 100,
    border: '1px solid',
    cursor: 'pointer',
    backgroundImage: `url(https://api.adorable.io/avatars/100/rw${pairId}.png)`,
  };
  const innerStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: isFlipped ? 'transparent' : 'black',
  };

  return (
    <div style={outerStyle} onClick={() => onClick(id)}>
      <div style={innerStyle} />
    </div>
  );
};

_Card.propTypes = {
  id: PropTypes.number.isRequired,
  pairId: PropTypes.number.isRequired,
  isFlipped: PropTypes.bool,
};
_Card.defaultProps = {
  isFlipped: false,
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(cardFlip(id)),
});

const Card = connect(null, mapDispatchToProps)(_Card);

export default Card;
