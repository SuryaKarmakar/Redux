const redux = require("redux");

const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";
// action is an object with a type property => so here the return object is a action
// action creator is a function thats retun a action => here the buyCakeAction() function is the action creator
const buyCakeAction = () => {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
};

// this is our global state
const initialState = {
  numberOfCake: 10,
};

// this is our reducer that accept buycake action as a paramiter then retun new state
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

const store = createStore(reducer);

// getState() function get the store state
console.log(store.getState());

// dispatch() function update the store with help of action creater ...
store.dispatch(buyCakeAction());
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
unsubscribe();
