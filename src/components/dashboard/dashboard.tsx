import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { Context } from "../../context";
import Auth from "../auth/auth";
import CreateUser from "../users/create";
import EditUser from "../users/edit";
import UsersList from "../users/list";
import Users from "../users/users";

export default function Dashboard() {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex", gap: "30px" }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="users">Users</NavLink>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <span>Role:{state.currentuser?.role} </span>
          <span>Name:{state.currentuser?.name} </span>
        </div>
        <button
          onClick={() => {
            dispatch({ type: "logout" });
            navigate("/login");
          }}
        >
          LOGOUT
        </button>
      </div>

      <Outlet />
    </div>
  );
}
