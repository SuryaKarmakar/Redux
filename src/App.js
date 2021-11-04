const store = require("../redux/store");
const buyCakeAction = require("../redux/actions/BuyCakeAction");

console.log(store.getState());

store.dispatch(buyCakeAction());
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
store.dispatch(buyCakeAction());
unsubscribe();
