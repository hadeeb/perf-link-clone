<script>
  import Router from "./components/Router.svelte";

  const routes = [
    {
      path: "/about",
      component: () => import("./components/About.svelte")
    },
    {
      path: "/*",
      component: () => import("./components/Tests.svelte")
    },
    {
      component: () => import("./components/Home.svelte")
    }
  ];
</script>

<Router routes="{routes}"></Router>
