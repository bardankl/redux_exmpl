import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateUser } from "../../store/user-reducet";
import API from "../../utils/API";

export default function EditUser() {
  const params = useParams();
  const dispatch = useDispatch();
  const [u, setuser] = useState({ name: "", id: 0 });
  const nav = useNavigate();
  useEffect(() => {
    API.get("/users/" + params.id).then((r) => {
      console.log(r.data);
      setuser(r.data);
    });
  }, []);
  return (
    <div>
      <input
        type="text"
        value={u.name}
        onChange={(e) => setuser({ ...u, name: e.target.value })}
      />
      <button
        onClick={() => {
          API.put("users/" + u.id, u).then((r) => {
            dispatch(updateUser(u));
            nav("/users");
          });
        }}
      >
        Save
      </button>
    </div>
  );
}
