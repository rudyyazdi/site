import arrayFactory from '../util/array-factory';
import { BOARD_SHUFFLE, } from './actions';

const initialState = {
  totalCards: 36,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_SHUFFLE:
      return {
        ...state,
        cards: arrayFactory(state.totalCards, (id) => ({ id, pairId: id, })),
      };
    default:
      return state;
  }
};

export default appReducer;
