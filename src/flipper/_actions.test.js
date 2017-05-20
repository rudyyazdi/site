import { expect } from 'chai';
import {
  FLIPPER_SHUFFLE,
  FLIPPER_INIT,
  CARD_FLIP,
  flipperShuffle,
  flipperSInit,
  cardFlip
} from './actions';

describe('actions', () => {
  describe('flipperShuffle', () => {
    it('dispatches the correct action', () => {
      expect(flipperShuffle().type).to.equal(FLIPPER_SHUFFLE);
    });
  });

  describe('flipperSInit', () => {
    it('dispatches the correct action', () => {
      expect(flipperSInit().type).to.equal(FLIPPER_INIT);
    });
  });

  describe('cardFlip', () => {
    it('dispatches the correct action', () => {
      expect(cardFlip().type).to.equal(CARD_FLIP);
    });
  });
});
