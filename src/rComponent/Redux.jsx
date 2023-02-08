import { createStore } from "redux";
const initialState = {
  counter: 0
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS":
      return { counter: state.counter + 1 };

    case "MINUS":
      return { counter: state.counter - 1 };

    case "VALUE":
      return { counter: state.counter + action.payload };
    default:
      return state;
  }
};
const Store = createStore(reducer);
export default Store;
