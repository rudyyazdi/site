import React from 'react';
import Card from './Card';

const data = { rows: 6, cols: 6 };
const arrayFactory = (length, obj) => Array.from({ length }, () => obj);

const Col = () => (
  <td>
    <Card />
  </td>
);
const cols = arrayFactory(data.cols, <Col />);

const Row = () => (
  <tr>
    {cols}
  </tr>
);
const rows = arrayFactory(data.rows, <Row />);

class Board extends React.Component {
  render() {
    return (
      <table>
        {rows}
      </table>
    );
  }
}

export default Board;
