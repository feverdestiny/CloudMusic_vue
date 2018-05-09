import Vue from "vue";
import test from "@/components/test";

describe("test.vue", () => {
  it("should render correct contents", () => {
    const Constructor = Vue.extend(test);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector(".hello h1").textContent).toEqual("test");
  });
});
