import React from "react";
import { Action, initialState } from "./store/state";

const defaultContext = {
  state: initialState,
  dispatch: (a: Action) => {},
};
export const Context = React.createContext(defaultContext);
