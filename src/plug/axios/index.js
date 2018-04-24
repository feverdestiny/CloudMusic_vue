import axios from "axios";

let _AXIOS = axios.create();

_AXIOS.interceptors.request.use(config => {
  config.url = "api" + config.url;
  return config;
});

_AXIOS.interceptors.response.use(
  response => {
    let res = response.data;
    switch (response.status) {
      case 200:
        res = response.data;
        break;

      default:
        break;
    }
    return res;
  },
  err => {
    return Promise.reject(err);
  }
);

export default _AXIOS;
