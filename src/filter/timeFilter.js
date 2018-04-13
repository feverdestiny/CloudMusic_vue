let timeFilter = {};
timeFilter.install = Vue => {
  Vue.filter("timeFliter", value => {
    if (value) {
      var s = value / 1000;
      var m = Math.floor(s / 60);
      s = Math.floor(s % 60);
      var h = Math.floor(m / 60);
      m = Math.floor(m % 60);
      if (s.toString().length <= 1) {
        s = "0" + s;
      }
      if (m.toString().length <= 1) {
        m = "0" + m;
      }
      if (h.toString().length <= 1) {
        h = "0" + h;
      }
      return m + ":" + s;
      
    //   return h + ":" + m + ":" + s;
    } else {
      return "00:00";
        
    //   return "00:00:00";
    }
  });
};

export default timeFilter;
