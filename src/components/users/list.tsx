import { useContext, useEffect } from "react";
import { Context } from "../../context";
import API from "../../utils/API";
import UserC from "./user";

export default function UsersList() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    API.get("/users").then((r) => {
      dispatch({ type: "get-users", payload: r.data });
    });
  }, []);
  
  return (
    <div style={{ margin: "20px 20px" }}>
      {state.users.length &&
        state.users.map((u) => <UserC key={u.id} user={u}></UserC>)}
    </div>
  );
}
