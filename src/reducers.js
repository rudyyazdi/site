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

const _flippedLength = (cards) => (cards.filter((card) => card.isFlipped).length);

const _flippedCards = (cards, id) => {
  return ((_flippedLength(cards) > 1) ? _hideAll(cards) : cards)
    .map((card) => ((card.id === id) ? { ...card, isFlipped: !card.isFlipped, } : card));
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
