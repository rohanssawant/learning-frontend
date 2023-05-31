const redux = require("redux");

// Reducer func
function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "inc") return { counter: state.counter + 1 };
  if (action.type === "dec") return { counter: state.counter - 1 };

  return state;
}

// Creating store
const store = redux.createStore(counterReducer);

// Creating subscriber func. Redux will exec whenever data in store changes
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);
store.dispatch({ type: "inc" });
store.dispatch({ type: "dec" });
