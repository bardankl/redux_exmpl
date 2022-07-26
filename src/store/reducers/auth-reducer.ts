import { CurrentUser } from "../state";
const defaultState = {
  role: "",
  currentuser: null,
};

enum AUTH_ACTIONS {
  LOGIN = "login",
  LOGOUT = "logout",
}
export const login = (payload: CurrentUser) => ({
  type: AUTH_ACTIONS.LOGIN,
  payload,
});
export const logout = () => ({
  type: AUTH_ACTIONS.LOGOUT,
});
type loginI = { type: AUTH_ACTIONS.LOGIN; payload: CurrentUser };
type logoutI = { type: AUTH_ACTIONS.LOGOUT };
type Action = loginI | logoutI;
export function authReducer(state = defaultState, action: Action) {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN:
      return {
        ...state,
        role: action.payload.role,
        currentuser: action.payload,
      };
    case AUTH_ACTIONS.LOGOUT:
      localStorage.removeItem("token");
      return state;

    default:
      return state;
  }
}
