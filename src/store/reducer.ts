import { Action, State } from "./state";

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "create-user":
      return { ...state, users: [...state.users, action.payload] };
    case "delete-user":
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
      };
    case "get-users":
      return { ...state, users: action.payload };
    case "update-user":
      return {
        ...state,
        users: state.users.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };
    case "login":
      return {
        ...state,
        role: action.payload.role,
        currentuser: action.payload,
      };
    case "logout":
      localStorage.removeItem("token");
      return state;
  }
}
