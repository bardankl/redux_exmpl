import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../../context";
import API from "../../utils/API";

export default function CreateUser() {
  const { dispatch } = useContext(Context);
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
            dispatch({ type: "create-user", payload: r.data });
            nav('/users')
          });
        }}
      >
        Create
      </button>
    </div>
  );
}
