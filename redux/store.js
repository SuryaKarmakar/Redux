const redux = require("redux");
const reducer = require("./reducers/BuyCakeReducer");

const createStore = redux.createStore;

const store = createStore(reducer);

module.exports = store;
