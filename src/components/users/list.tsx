import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../store/state";
import API from "../../utils/API";
import UserC from "./user";

export default function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector((state: State) => state && state.users);
  useEffect(() => {
    API.get("/users").then((r) => {
      dispatch({ type: "get-users", payload: r.data });
    });
  }, []);

  return (
    <div style={{ margin: "20px 20px" }}>
      {(users && users.length) && users.map((u) => <UserC key={u.id} user={u}></UserC>)}
    </div>
  );
}
