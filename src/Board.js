import React, { PropTypes } from 'react';
import Card from './Card';

const data = { rows: 6, cols: 6 };
const arrayFactory = (length, obj) =>
  [...Array(length).keys()].map((i) => React.cloneElement(obj, { key: i.toString(), i }));

const colRowToID = (col, row, totalcols) => col + (row * totalcols);


const Col = ({ i, rowNum }) => (
  <td>
    <Card id={colRowToID(i, rowNum, data.cols)} isVisible />
  </td>
);
Col.propTypes = {
  i: PropTypes.number.isRequired,
  rowNum: PropTypes.number.isRequired
};

const cols = (rowNum) => arrayFactory(data.cols, <Col rowNum={rowNum} />);

const Row = ({ i }) => (
  <tr>
    {cols(i)}
  </tr>
);
Row.propTypes = {
  i: PropTypes.number.isRequired
};

const rows = () => arrayFactory(data.rows, <Row />);

class Board extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {rows()}
        </tbody>
      </table>
    );
  }
}

export default Board;
