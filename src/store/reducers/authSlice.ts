import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentUser } from "../state";

interface AuthState {
  currentUser: CurrentUser | null;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  currentUser: null,
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoading = true;
    },
    loginSeccess(state, action: PayloadAction<CurrentUser>) {
      state.isLoading = false;
      state.error = "";
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
