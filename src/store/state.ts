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

