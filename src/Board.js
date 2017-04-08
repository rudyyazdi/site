import React from 'react';
import PropTypes from 'prop-types';
import { connect, } from 'react-redux';

import Card from './Card';
import arrayFactory from '../util/array-factory';

class _Board extends React.Component {
  static colRowToID(col, row, totalcols) {
    return col + (row * totalcols);
  }

  cols(rowNum) {
    const { cards, } = this.props;
    const id = (i) => _Board.colRowToID(i, rowNum, this.props.cols);
    return arrayFactory(this.props.cols, (i) => (
      <td key={i}>
        <Card data={cards && cards[id(i)]} isVisible />
      </td>
    ));
  }

  rows() {
    return arrayFactory(this.props.rows, (i) => (
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
  cards: PropTypes.array.isRequired,
};

const mapStateToProps = ({ cards, }) => ({
  cards,
});

const Board = connect(mapStateToProps)(_Board);

export default Board;
