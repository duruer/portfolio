export default {
  routes: {
    "/": {
      component: () => import("./pages/About.svelte"),
    },
    "/references": {
      component: () => import("./pages/References.svelte"),
    },
    "/project/:projectID": {
      component: () => import("./pages/ProjectDetail.svelte"),
    },
    "/work/:workID": {
      component: () => import("./pages/WorkDetail.svelte"),
    },
    "*": {
      component: () => import("./pages/Error404.svelte"),
    },
  },
};
