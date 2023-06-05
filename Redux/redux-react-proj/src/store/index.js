// import redux from "redux";
const redux = require("redux");
// Reducer func
const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === "increment")
    return { counter: state.counter + 1, showCounter: state.showCounter };
  if (action.type === "decrement")
    return { counter: state.counter - 1, showCounter: state.showCounter };
  if (action.type === "toggle")
    return { counter: state.counter, showCounter: !state.showCounter };
  return state;
};

// Create store
const store = redux.createStore(counterReducer);

export default store;
