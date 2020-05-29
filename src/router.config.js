export default {
  routes: {
    "/": {
      component: () => import("./pages/About.svelte"),
    },
  },
};
