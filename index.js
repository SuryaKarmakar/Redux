const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
// action is an object with a type property => so here the return object is a action
// action creator is a function thats retun a action => here the buyCakeAction() function is the action creator
const buyCakeAction = () => {
  return {
    type: BUY_CAKE,
    info: "first redux action",
  };
};
const buyIceCreamAction = () => {
  return {
    type: BUY_ICECREAM,
  };
};

// this is our global state
// const initialState = {
//   numberOfCake: 10,
// };
// const initialState = {
//   numberOfCake: 10,
//   numberOfIceCream: 20,
// };

const CakeInitialState = {
  numberOfCake: 10,
};
const IceCreamInitialState = {
  numberOfIceCream: 20,
};

// this is our reducer that accept buycake action as a paramiter then retun new state
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCake: state.numberOfCake - 1,
//       };
//     default:
//       return state;
//   }
// };

// single reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCake: state.numberOfCake - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numberOfIceCream: state.numberOfIceCream - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = CakeInitialState, action) => {
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
const IceCreamReducer = (state = IceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
});

// const store = createStore(reducer);
const store = createStore(rootReducers);

// getState() function get the store state
// console.log(store.getState());

// dispatch() function update the store with help of action creater ...
// store.dispatch(buyCakeAction());
// console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyIceCreamAction());
store.dispatch(buyIceCreamAction());
unsubscribe();
