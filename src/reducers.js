import arrayFactory from '../util/array-factory';
import arrayShuffle from '../util/array-shuffle';
import { BOARD_SHUFFLE, CARD_FLIP, } from './actions';

const _cardsInitialState = (totalCards) => {
  let pairIds = arrayFactory(totalCards / 2, (i) => i);
  pairIds = pairIds.concat(pairIds);
  pairIds = arrayShuffle(pairIds);
  return arrayFactory(totalCards, (id) => ({
    id,
    pairId: pairIds[id],
    isFlipped: false,
  }));
};

const _getFlipped = (cards) =>
  cards.filter((card) => card.isFlipped);

const _flippedLimit = (cards) =>
  (c) => ((_getFlipped(cards).length > 1) ? { ...c, isFlipped: false, } : c);

const _markGuessed = (cards) => {
  const flippedPairIds = _getFlipped(cards).map((c) => c.pairId);
  const isBingo = flippedPairIds.length === 2 && flippedPairIds[0] === flippedPairIds[1];

  return (c) => (isBingo && c.isFlipped ? { ...c, isGuessed: true, } : c);
};

const _markFlipped = (id) =>
  (c) => ((c.id === id && !c.isGuessed) ? { ...c, isFlipped: true, } : c);

const _flippedCards = (cards, id) =>
  cards.map(_markGuessed(cards)).map(_flippedLimit(cards)).map(_markFlipped(id));

const initialState = {
  totalCards: 36,
  cards: _cardsInitialState(36),
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_SHUFFLE:
      return {
        ...state,
        cards: _cardsInitialState(state.totalCards),
      };
    case CARD_FLIP:
      return {
        ...state,
        cards: _flippedCards(state.cards, action.id),
      };
    default:
      return state;
  }
};

export default appReducer;
