const BUY_CAKE = require("../actionTypes/BuyCakeType");

const initialState = {
  numberOfCake: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1,
      };
    default:
      return state;
  }
};

module.exports = reducer;
