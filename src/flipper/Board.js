import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import arrayFactory from 'util/array-factory';
import Card from './Card';

class _Board extends React.Component {
  static colRowToID(col, row, totalcols) {
    return col + (row * totalcols);
  }

  cols(rowNum) {
    const { cards } = this.props;
    const id = (i) => _Board.colRowToID(i, rowNum, this.props.cols);
    return arrayFactory(this.props.cols).map((i) => (
      <td key={i}>
        {React.createElement(Card, cards[id(i)])}
      </td>
    ));
  }

  rows() {
    return arrayFactory(this.props.rows).map((i) => (
      <tr key={i}>
        {this.cols(i)}
      </tr>
    ));
  }

  render() {
    return (
      <table>
        <tbody>
          {this.rows()}
        </tbody>
      </table>
    );
  }
}

_Board.propTypes = {
  cols: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => ({
  cards: state.flipper.cards
});

const Board = connect(mapStateToProps)(_Board);

export default Board;
