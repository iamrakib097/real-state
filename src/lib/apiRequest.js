import axios from "axios";
const apiRequest = axios.create({
  baseURL: "https://real-state-backend-aqxa.vercel.app/api",
  // baseURL: "http://localhost:8800/api",
  withCredentials: true,
});
export default apiRequest;
