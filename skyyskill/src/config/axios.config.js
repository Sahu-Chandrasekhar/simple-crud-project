import axios from "axios";
axios.defaults.baseURL = 'http://localhost:5000/';

const instance = axios.create({
  baseURL: axios.defaults.baseURL,
  timeout: 0,
});

// instance.interceptors.request.use(
//   function (config) {
//     // Get the token from localStorage
//     const token = localStorage.getItem("token");
//     // If the token exists, set the Authorization header with the token value
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );
export default instance;