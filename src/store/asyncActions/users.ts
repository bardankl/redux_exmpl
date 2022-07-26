import API from "../../utils/API";
import { User } from "../../models/user";
import { userSlice } from "../reducers/usersSlice";
import { AppDispatch } from "../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await API.get<User[]>("users/");
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(userSlice.actions.usersFetchingFailed("something happend"));
//   }
// };

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await API.get<User[]>("usersss/");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("some error");
    }
  }
);
