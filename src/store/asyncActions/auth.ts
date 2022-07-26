import API from "../../utils/API";
import { AppDispatch } from "../store";
import { authSlice } from "../reducers/authSlice";
import { CurrentUser } from "../state";
export const login = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.login);
    const response = await API.get<CurrentUser>("/auth/" + id);
    dispatch(authSlice.actions.loginSeccess(response.data));
  } catch (e) {
    dispatch(authSlice.actions.loginFailed("something happend"));
  }
};
