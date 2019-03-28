import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Card from './Card';

const _Board = ({ cols, rows, cards }) => {
  const style = {
    width: '600px',
    height: '600px',
    gridGap: '3px',
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`
  };

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
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => ({
  cards: state.flipper.cards
});

export { _Board };
export default connect(mapStateToProps)(_Board);
