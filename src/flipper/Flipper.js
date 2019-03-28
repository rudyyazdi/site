import React from 'react';

import Board from './Board';
import Console from './Console';

export default () => (
  <div>
    <Board rows={5} cols={5} />
    <Console />
  </div>
);
