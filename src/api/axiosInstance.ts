import axios from "axios";

const api = axios.create({
  // baseURL: process.env.REACT_APP_API_URL|| "http://backend.default.svc.cluster.local", 
  baseURL: process.env.REACT_APP_API_URL|| "http://localhost:8080", 

  headers: {
    "Content-Type": "application/json",
  },
});
// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });


// Optional: Add interceptors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;
