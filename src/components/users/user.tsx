import { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../../context";
import { User } from "../../models/user";

export default function UserC({ user }: { user: User }) {
  const navigate = useNavigate();
  const { dispatch } = useContext(Context);
  return (
    <div style={{ display: "flex", gap: "10px", border: "1px solid #909090" }}>
      <span>{user.id}</span>
      <span>{user.name}</span>
      <button
        onClick={() => dispatch({ type: "delete-user", payload: user.id! })}
      >
        delete
      </button>
      <button onClick={() => navigate("/users/" + user.id)}>Update</button>
    </div>
  );
}
