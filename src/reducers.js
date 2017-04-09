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

const _hideAll = (cards) =>
  cards.map((card) => ({ ...card, isFlipped: false, }));

const _getFlipped = (cards) => cards.filter((card) => card.isFlipped);

const _flippedLength = (cards) => _getFlipped(cards).length;

const _flippedLimit = (cards) => ((_flippedLength(cards) > 1) ? _hideAll(cards) : cards);

const _markGuessed = (cards) => {
  const flippedPairIds = _getFlipped(cards).map((card) => card.pairId);
  return (flippedPairIds.length === 2 && flippedPairIds[0] === flippedPairIds[1])
    ? cards.map((card) => ((card.isFlipped) ? { ...card, isGuessed: true, } : card))
    : cards;
};

const _flippedCards = (cards, id) => {
  return _flippedLimit(_markGuessed(cards))
    .map((card) => ((card.id === id && !card.isGuessed) ? { ...card, isFlipped: true, } : card));
};

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
