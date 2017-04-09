import React from 'react';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';

import { cardFlip, } from './actions';


const _Card = ({ isVisible, id, pairId, onClick, }) => {
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
    backgroundColor: isVisible ? 'transparent' : 'black',
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
  isVisible: PropTypes.bool,
};
_Card.defaultProps = {
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(cardFlip(id)),
});

const Card = connect(null, mapDispatchToProps)(_Card);

export default Card;
