import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Auth from "./components/auth/auth";
import CreateUser from "./components/users/create";
import EditUser from "./components/users/edit";
import UsersList from "./components/users/list";
import Users from "./components/users/users";
import { useEffect } from "react";
import API from "./utils/API";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "./hooks/redux";
import { login } from "./store/asyncActions/auth";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token")!);
    if (token) {
      dispatch(login(token))

    } else {
      console.log("!!!");
      navigate("/login");
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/users" element={<Users />}>
            <Route index element={<UsersList />}></Route>
            <Route path=":id" element={<EditUser />}></Route>
            <Route path="create" element={<CreateUser />}></Route>
          </Route>
        </Route>
        <Route path="/login" element={<Auth />}></Route>
      </Routes>
    </div>
  );
}

export default App;
