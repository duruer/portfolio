export default {
  routes: {
    "/": {
      component: () => import("./pages/About.svelte"),
    },
    "/references": {
      component: () => import("./pages/References.svelte")
    }
  },
};
