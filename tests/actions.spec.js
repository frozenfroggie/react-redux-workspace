import { sampleAction } from '../src/redux/actions/sampleAction';
import * as types from '../src/redux/constants/actionTypes';

import chai from "chai";
var assert = chai.assert;
var expect = chai.expect;

describe('ACTION CREATORS', () => {
  describe('sampleAction', () => {
    it('should create SAMPLE_ACTION', () => {
      const text = 'test';
      const expectedAction = {
        type: types.SAMPLE_ACTION,
        payload: text
      }
      expect(sampleAction(text)).to.deep.equal(expectedAction);
    })
  })
});
