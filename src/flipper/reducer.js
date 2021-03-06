import shuffle from 'lodash/shuffle';
import flatMap from 'lodash/flatMap';

import arrayFactory from 'util/array-factory';
import { FLIPPER_SHUFFLE, CARD_FLIP, FLIPPER_INIT } from './actions';

const _createNewCards = (totalCards) => {
  const pairIds = shuffle(flatMap(arrayFactory(Math.floor(totalCards / 2)), (i) => [i, i]));
  return arrayFactory(totalCards).map((id) => ({
    id,
    pairId: isNaN(pairIds[id]) ? -1 : pairIds[id],
    isFlipped: false,
    isGuessed: false
  }));
};

const _getFlipped = (cards) =>
  cards.filter((card) => card.isFlipped);

const _flippedLimit = (cards) =>
  (c) => ((_getFlipped(cards).length > 1) ? { ...c, isFlipped: false } : c);

const _markGuessed = (cards) => {
  const flippedPairIds = _getFlipped(cards).map((c) => c.pairId);
  const isBingo = flippedPairIds.length === 2 && flippedPairIds[0] === flippedPairIds[1];

  return (c) => (isBingo && c.isFlipped ? { ...c, isGuessed: true } : c);
};

const _markFlipped = (id) =>
  (c) => ((c.id === id && !c.isGuessed) ? { ...c, isFlipped: true } : c);

const _flippedCards = (cards, id) =>
  cards.map(_markGuessed(cards)).map(_flippedLimit(cards)).map(_markFlipped(id));

const initialState = {
  totalCards: 0,
  cards: []
};

// flipper reducer:

export default (state = initialState, action) => {
  const { totalCards } = action;
  switch (action.type) {
    case FLIPPER_SHUFFLE:
      return {
        ...state,
        cards: _createNewCards(state.totalCards)
      };
    case CARD_FLIP:
      return {
        ...state,
        cards: _flippedCards(state.cards, action.id)
      };
    case FLIPPER_INIT:
      return {
        ...state,
        totalCards,
        cards: _createNewCards(totalCards)
      };
    default:
      return state;
  }
};
