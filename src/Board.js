import React from 'react';
import Card from './Card';

const data = { rows: 6, cols: 6 };
const arrayFactory =
  (length, obj) =>
  [...Array(length).keys()].map(i => React.cloneElement(obj, { key: i.toString() }));

const Col = () => (
  <td>
    <Card id={13} />
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
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default Board;
