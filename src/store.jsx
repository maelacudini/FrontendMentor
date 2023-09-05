import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

//The code above sets up a Redux store by creating a new instance of the store using the createStore function. Then, the rootReducer – which combines all the application's reducers into a single reducer – is passed as an argument to createStore.
//In addition, the code also uses two other libraries: redux-thunk and redux-devtools-extension.
//The redux-thunk library allows you to write asynchronous actions, while the redux-devtools-extension library enables you to use the Redux DevTools browser extension to debug and inspect the state and actions in the store.
