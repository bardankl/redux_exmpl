import { User } from "../models/user";
const defaultState = {
  users: [],
};
export enum USER_ACTIONS {
  CREATE = "create-user",
  DELETE = "delete-user",
  GET_ALL = "get-users",
  UPDATE = "update-user",
}
type createUserAction = { type: USER_ACTIONS.CREATE; payload: User };
type deleteUserAction = { type: USER_ACTIONS.DELETE; payload: number };
type getUsersAction = { type: USER_ACTIONS.GET_ALL; payload: User[] };
type updateUserAction = { type: USER_ACTIONS.UPDATE; payload: User };

export const createUser = (payload: User) => ({
  type: USER_ACTIONS.CREATE,
  payload,
});
export const deleteUser = (payload: number) => ({
  type: USER_ACTIONS.DELETE,
  payload,
});
export const getUsers = (payload: User[]) => ({
  type: USER_ACTIONS.GET_ALL,
  payload,
});
export const updateUser = (payload: User) => ({
  type: USER_ACTIONS.UPDATE,
  payload,
});

export type Action =
  | createUserAction
  | deleteUserAction
  | getUsersAction
  | updateUserAction;

export function usersReducer(state = defaultState, action: Action) {
  switch (action.type) {
    case "create-user":
      return { ...state, users: [...state.users, action.payload] };
    case "delete-user":
      return {
        ...state,
        users: state.users.filter((u: any) => u.id !== action.payload),
      };
    case "get-users":
      return { ...state, users: action.payload };
    case "update-user":
      return {
        ...state,
        users: state.users.map((e: any) =>
          e.id === action.payload.id ? action.payload : e
        ),
      };

    default:
      return state;
  }
}
