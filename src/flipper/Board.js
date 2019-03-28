import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from './Card';
import { flippersInit } from './actions';

const _Board = ({ cols, rows, cards, ...props }) => {
  const style = {
    width: '600px',
    height: '600px',
    gridGap: '3px',
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`
  };

  useEffect(() => {
    props.flippersInit(cols * rows);
  }, []);

  return (
    <div style={style}>
      {cards.map((c) => (
        <Card {...c} key={c.id} />
      ))}
    </div>
  );
};

_Board.propTypes = {
  cols: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  flippersInit: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cards: state.flipper.cards
});

const mapDispatchToProps = {
  flippersInit
};

export { _Board };
export default connect(mapStateToProps, mapDispatchToProps)(_Board);
