import { createStore, Reducer } from "redux";
import { reducer } from "./reducer";
import { Action, State } from "./state";

export const store = createStore(reducer as Reducer<State, Action>);
