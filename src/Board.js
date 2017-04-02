import React, { PropTypes } from 'react';
import Card from './Card';

class Board extends React.Component {
  static colRowToID(col, row, totalcols) {
    return col + (row * totalcols);
  }

  static arrayFactory(length, fun) {
    return [...Array(length).keys()].map(fun);
  }

  cols(rowNum) {
    return Board.arrayFactory(this.props.cols, (i) => (
      <td key={i}>
        <Card id={Board.colRowToID(i, rowNum, this.props.cols)} isVisible />
      </td>
    ));
  }

  rows() {
    return Board.arrayFactory(this.props.rows, (i) => (
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

Board.propTypes = {
  cols: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired
};

export default Board;
