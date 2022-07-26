import { useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const { currentUser, error, isLoading } = useAppSelector(
    (state) => state.authReducer
  );
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
            // dispatch(logout());
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
