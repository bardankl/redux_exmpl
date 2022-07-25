import axios from "axios";
//dev prod and else
export default axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    "Content-Type": "application/json",
  },
});
