import cart from "./cart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart,
});

export default rootReducer;

/*
The index.js file represents the root reducer, which combines all the individual reducers in the application. 
In contrast, the cart.js file is one of the individual reducers that will be combined in the root reducer.
*/
