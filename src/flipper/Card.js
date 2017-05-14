import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { cardFlip } from './actions';


const _Card = ({ isFlipped, isGuessed, id, pairId, onClick }) => {
  const isVisible = isFlipped || isGuessed;
  const outerStyle = {
    width: 100,
    height: 100,
    border: '1px solid',
    cursor: 'pointer',
    backgroundImage: `url(https://api.adorable.io/avatars/100/rw${pairId}.png)`
  };
  const innerStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: isVisible ? 'transparent' : 'black'
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
  isGuessed: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};
_Card.defaultProps = {
  isFlipped: false,
  isGuessed: false
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => dispatch(cardFlip(id))
});

export { _Card };
export default connect(null, mapDispatchToProps)(_Card);
