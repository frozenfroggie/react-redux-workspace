const sampleReducer = (state = {sampleInput: "Redux"}, action) => {
  switch(action.type) {
    case "SAMPLE_ACTION":
      state = {
        ...state,
        sampleInput: action.payload
      };
      break;
  }
  return state;
};

export default sampleReducer;
