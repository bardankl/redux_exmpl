import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./auth-reducer";
import { usersReducer } from "./user-reducet";

// const rootReducer = combineReducers(usersReducer, authReducer)
const rootReducer = combineReducers({ users: usersReducer, auth: authReducer });
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
