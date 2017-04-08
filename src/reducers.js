import arrayFactory from '../util/array-factory';
import arrayShuffle from '../util/array-shuffle';
import { BOARD_SHUFFLE, } from './actions';

const _cardsInitialState = (totalCards) => {
  let pairIds = arrayFactory(totalCards / 2, (i) => i);
  pairIds = pairIds.concat(pairIds);
  pairIds = arrayShuffle(pairIds);
  return arrayFactory(totalCards, (id) => ({
    id,
    pairId: pairIds[id],
    isVisible: false,
  }));
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
    default:
      return state;
  }
};

export default appReducer;
