import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../store/user-reducet";
import API from "../../utils/API";
import UserC from "./user";

export default function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state && state.users.users);
  useEffect(() => {
    API.get("/users").then((r) => {
      dispatch(getUsers(r.data));
    });
  }, []);

  return (
    <div style={{ margin: "20px 20px" }}>
      {users &&
        users.length &&
        users.map((u: any) => <UserC key={u.id} user={u}></UserC>)}
    </div>
  );
}
