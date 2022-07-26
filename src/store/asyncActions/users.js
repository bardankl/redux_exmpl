import API from "../../utils/API";
import { getUsers } from "../user-reducet";

export const fetchUsers = () => {
  return (dispatch) => {
    API.get("/users").then((r) => {
      dispatch(getUsers(r.data));
    });
  };
};
