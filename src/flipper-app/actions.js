// constants:

export const BOARD_SHUFFLE = 'BOARD:SHUFFLE';
export const BOARD_INIT    = 'BOARD:INIT';
export const CARD_FLIP     = 'CARD:FLIP';

// action creators:

export const boardShuffle = () => ({
  type: BOARD_SHUFFLE
});
export const boardSInit = (totalCards) => ({
  type: BOARD_INIT,
  totalCards
});

export const cardFlip = (id) => ({
  type: CARD_FLIP,
  id
});
