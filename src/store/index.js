import { createStore, combineReducers, applyMiddleware } from "redux";
import debug from 'debug'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth  from "./auth"

debug.enable('axios');

const rootReducer = combineReducers({
   auth,
   
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
 );
