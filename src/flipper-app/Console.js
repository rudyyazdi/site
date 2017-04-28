import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { boardShuffle } from './actions';

const _Console = ({ onShuffleClick }) =>
  <div>
    <button onClick={onShuffleClick} >
      SHUFFLE
    </button>
  </div>;

_Console.propTypes = {
  onShuffleClick: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onShuffleClick: () => dispatch(boardShuffle())
});

const Console = connect(null, mapDispatchToProps)(_Console);

export default Console;
