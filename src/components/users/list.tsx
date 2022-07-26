import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
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
    dispatch(fetchUsers())
    // API.get("/users").then((r) => dispatch(fetchUsers(r.data)));
  }, []);

  return (
    <div style={{ margin: "20px 20px" }}>
      {users &&
        users.length &&
        users.map((u: any) => <UserC key={u.id} user={u}></UserC>)}
    </div>
  );
}
