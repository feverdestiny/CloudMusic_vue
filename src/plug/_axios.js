import axios from "axios";

const _AXIOSPLUGIN = {};
_AXIOSPLUGIN.install = (Vue, options) => {
  let _AXIOS = axios.create(options);
  Vue.prototype.$axios = _AXIOS;
  Vue.prototype.$http = {
    get: (url, data, options) => {
      let axiosOpt = {
        ...options,
        ...{
          method: "get",
          url: url,
          params: data
        }
      };
      return _AXIOS(axiosOpt);
    },
    post: (url, data, options) => {
      let axiosOpt = {
        ...options,
        ...{
          method: "post",
          url: url,
          data: data
        }
      };
      return _AXIOS(axiosOpt);
    }
  };

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
};

export default _AXIOSPLUGIN;
