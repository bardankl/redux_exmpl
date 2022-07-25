import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { User } from "../../models/user";
import { deleteUser } from "../../store/user-reducet";

export default function UserC({ user }: { user: User }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", gap: "10px", border: "1px solid #909090" }}>
      <span>{user.id}</span>
      <span>{user.name}</span>
      <button
        onClick={() => dispatch(deleteUser(user.id!))}
      >
        delete
      </button>
      <button onClick={() => navigate("/users/" + user.id)}>Update</button>
    </div>
  );
}
