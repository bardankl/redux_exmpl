import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
// import { createUser } from "../../store/user-reducet";
import API from "../../utils/API";

export default function CreateUser() {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const nav = useNavigate();
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button
        onClick={() => {
          API.post("/users", { name }).then((r) => {
            // dispatch(createUser(r.data));
            nav("/users");
          });
        }}
      >
        Create
      </button>
    </div>
  );
}
