import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../store/auth-reducer";
import { State } from "../../store/state";

export default function Dashboard() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.users.currentuser);
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
          <span>Role:{currentUser?.role} </span>
          <span>Name:{currentUser?.name} </span>
        </div>
        <button
          onClick={() => {
            dispatch(logout());
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
