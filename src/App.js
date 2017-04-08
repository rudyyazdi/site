import React from 'react';
import Board from './Board';
import Console from './Console';

export default () => (
  <div>
    <Board rows={6} cols={6} />
    <Console />
  </div>
);
