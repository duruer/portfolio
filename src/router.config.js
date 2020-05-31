export default {
  routes: {
    "/": {
      component: () => import("./pages/About.svelte"),
    },
    "/references": {
      component: () => import("./pages/References.svelte")
    },
    "/project/:project": {
      component: () => import("./pages/ProjectDetail.svelte")
    },
    "*": {
      component: () => import("./pages/Error404.svelte")
    }
  },
};
