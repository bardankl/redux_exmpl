import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../../context";
import API from "../../utils/API";

export default function Auth() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(Context);
  const onLogin = () => {
    const id = name === "admin" ? 1 : 2;
    API.get("auth/" + id).then((r) => {
      dispatch({ type: "login", payload: r.data });
      navigate("/");
      localStorage.setItem("token", JSON.stringify(r.data.id));
    });
  };
  return (
    <div>
      <h1>Welcome to app, please login</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onLogin}>login</button>
    </div>
  );
}
