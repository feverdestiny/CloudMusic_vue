import _AXIOS from "./index";
const _AXIOSPLUGIN = {};
_AXIOSPLUGIN.install = (Vue, options) => {

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
};

export default _AXIOSPLUGIN;
