import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
  timeout: 30000,
});

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    const status = error.response?.status;
    if (status === 400) {
      return Promise.reject(error.response?.data?.message);
    } else if (status === 401) {
      return Promise.reject("unauthorized, Incorrect Credentials");
    } else if (status === 404) {
      return Promise.reject("not found");
    }
    return Promise.reject("something went wrong");
  }
);

export { api };
