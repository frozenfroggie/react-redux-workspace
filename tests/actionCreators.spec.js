import { sampleAction } from '../src/js/actions/sampleActions';
import * as types from '../src/js/constants/actionTypes';

import chai from 'chai';
var expect = chai.expect;

describe('ACTION CREATORS', () => {
  describe('sampleAction', () => {
    it('should create SAMPLE_ACTION', () => {
      const text = 'test';
      const expectedAction = {
        type: types.SAMPLE_ACTION,
        payload: text
      };
      expect(sampleAction(text)).to.deep.equal(expectedAction);
    });
  });
});
