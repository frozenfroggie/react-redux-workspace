import sampleReducer from '../src/js/reducers/sampleReducer';
import secondReducer from '../src/js/reducers/secondReducer';
import * as types from '../src/js/constants/actionTypes';

import chai from 'chai';
var expect = chai.expect;

describe('REDUCERS', function() {
  describe('sampleReducer', function() {
    describe('if no action provided and initial state is undefined', function() {
      it('returns default state', function(){
        const newState = sampleReducer(undefined, {});
        expect(newState).to.deep.equal({sampleInput: ''});
      });
    });
    describe('if right action was provided', function() {
      it('can handle SAMPLE_ACTION', function(){
        const action = { type: types.SAMPLE_ACTION, payload: 'test' };
        const newState = sampleReducer([], action);
        expect(newState).to.deep.equal({sampleInput: 'test'});
      });
    });
  });
  describe('secondReducer', function() {
    describe('if no action provided and initial state is undefined', function() {
      it('returns default state', function(){
        const newState = secondReducer(undefined, {});
        expect(newState).to.deep.equal({secondData: 'test'});
      });
    });
  });
});
