import Home from ".";
import { shallowMount } from "@vue/test-utils";
import { routes } from "../../router";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

// eslint-disable-next-line no-undef
describe("<Home />", () => {
  // eslint-disable-next-line no-undef
  it("should render home correctly", async () => {
    router.push("/");
    await router.isReady();
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [router],
      },
    });

    // eslint-disable-next-line no-undef
    expect(wrapper.html()).toMatchSnapshot();
  });
});
