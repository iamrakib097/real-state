import axios from "axios";
const apiRequest = axios.create({
  baseURL: "https://real-state-backend-aqxa.vercel.app/api",
  withCredentials: true,
});
export default apiRequest;
