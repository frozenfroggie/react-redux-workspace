import sampleReducer from "../src/redux/reducers/sampleReducer";
import secondReducer from "../src/redux/reducers/secondReducer";

import chai from "chai";
var assert = chai.assert;
var expect = chai.expect;

describe("sampleReducer", function() {
  describe("if wrong action was provided", function() {
      it('returns default state ', function(){
       const action = { type: 'UNDEFINED_ACTION', payload: "test" };
       const newState = sampleReducer(undefined, action);
       expect(newState).to.deep.equal({sampleInput: "Redux"});
     });
   });
   describe("if right action was provided", function() {
    it('returns new state based on given payload', function(){
     const action = { type: 'SAMPLE_ACTION', payload: "test" };
     const newState = sampleReducer(undefined, action);
     expect(newState).to.deep.equal({sampleInput: "test"});
   });
  });
});
describe("secondReducer", function() {
  describe("if wrong action was provided", function() {
    it('returns default state', function(){
     const action = { type: 'UNDEFINED_ACTION', payload: "test" };
     const newState = secondReducer(undefined, action);
     expect(newState).to.deep.equal({secondData: "test"});
    });
  });
});
