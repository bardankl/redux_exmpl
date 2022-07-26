import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/user";
// import { fetchAllUsers } from "../asyncActions/users";

interface UserState {
  users: User[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<User[]>) {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    usersFetchingFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // extraReducers: {
  //   [fetchAllUsers.pending.type]: () => {},
  //   [fetchAllUsers.fulfilled.type]: () => {},
  //   [fetchAllUsers.rejected.type]: () => {},
  // },
});

export default userSlice.reducer;
