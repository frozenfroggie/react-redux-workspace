import { SAMPLE_ACTION } from '../constants/actionTypes';

const sampleReducer = (state = {sampleInput: "Redux"}, action) => {
  switch(action.type) {
    case SAMPLE_ACTION:
      state = {
        ...state,
        sampleInput: action.payload
      };
      break;
  }
  return state;
};

export default sampleReducer;
