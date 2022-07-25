import { Outlet, useNavigate } from "react-router";

export default function Users() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/users/create")}>create</button>
      <Outlet />
    </div>
  );
}
