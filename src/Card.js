import React from 'react';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';

const _Card = ({ isVisible, data, }) => {
  const outerStyle = {
    width: 100,
    height: 100,
    border: '1px solid',
    cursor: 'pointer',
    backgroundImage: data ? `url(https://api.adorable.io/avatars/100/rw${data.id}.png)` : null,
  };
  const innerStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: isVisible ? 'transparent' : 'black',
  };

  return (
    <div style={outerStyle}>
      <div style={innerStyle} />
    </div>
  );
};

_Card.propTypes = {
  data: PropTypes.object.isRequired,
  isVisible: PropTypes.bool,
};
_Card.defaultProps = {
  isVisible: false,
};

const mapStateToProps = (state) => ({
  state,
});

const Card = connect(mapStateToProps)(_Card);

export default Card;
