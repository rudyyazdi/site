// constants:

export const FLIPPER_SHUFFLE = 'FLIPPER::SHUFFLE';
export const FLIPPER_INIT    = 'FLIPPER::INIT';
export const CARD_FLIP       = 'CARD::FLIP';

// action creators:

export const boardShuffle = () => ({
  type: FLIPPER_SHUFFLE
});
export const boardSInit = (totalCards) => ({
  type: FLIPPER_INIT,
  totalCards
});

export const cardFlip = (id) => ({
  type: CARD_FLIP,
  id
});
