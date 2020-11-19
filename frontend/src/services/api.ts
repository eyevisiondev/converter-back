import axios from "axios";

const api = axios.create({
  baseURL: "http://3.129.57.240:3001",
});

export default api;
