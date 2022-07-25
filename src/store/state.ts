import { User } from "../models/user";
export type CurrentUser = { name: string; id: number; role: string };
export type State = {
  currentuser: CurrentUser | null;
  role: string;
  users: User[];
};
export const initialState: State = {
  currentuser: null,
  role: "admin",
  users: [],
};
type createUserAction = { type: "create-user"; payload: User };
type deleteUserAction = { type: "delete-user"; payload: number };
type getUsersAction = { type: "get-users"; payload: User[] };
type updateUserAction = { type: "update-user"; payload: User };

type login = { type: "login"; payload: CurrentUser };
type logout = { type: "logout" };
export type Action =
  | createUserAction
  | deleteUserAction
  | getUsersAction
  | updateUserAction
  | login
  | logout;
