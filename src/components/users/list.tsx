import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { User } from "../../models/user";
import { fetchUsers } from "../../store/asyncActions/users";
import { userSlice } from "../../store/reducers/usersSlice";
import API from "../../utils/API";
import UserC from "./user";

export default function UsersList() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.usersReducer
  );

  useEffect(() => {
    
    dispatch(fetchUsers());
    // API.get("/users").then((r) =>
    //   dispatch(userSlice.actions.usersFetchingSuccess(r.data))
    // );
  }, []);

  return (
    <div style={{ margin: "20px 20px" }}>
      {isLoading && <h1>...loading</h1>}
      {error && <h1>{error}</h1>}
      {users &&
        users.length &&
        users.map((u: any) => <UserC key={u.id} user={u}></UserC>)}
    </div>
  );
}
