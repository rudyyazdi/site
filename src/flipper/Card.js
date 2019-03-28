import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { cardFlip } from './actions';


const _Card = ({ isFlipped, isGuessed, id, pairId, onClick }) => {
  const isVisible = isFlipped || isGuessed;
  const outerStyle = {
    cursor: 'pointer',
    backgroundImage: `url(https://api.adorable.io/avatars/100/rw${pairId}.png)`,
    backgroundSize: 'cover'
  };
  const innerStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: isVisible ? 'transparent' : 'black'
  };

  const onClickHandler = () => {
    onClick(id);
  };

  // if the number of cells are odd we need to skip one cell.
  if (pairId === -1) {
    return (
      <div />
    );
  }
  return (
    <div style={outerStyle} onClick={onClickHandler}>
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
