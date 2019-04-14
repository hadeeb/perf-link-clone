<script>
  import Router from "./components/Router";
  import Home from "./components/Home.svelte";
  import About from "./components/About.svelte";
  import Tests from "./components/Tests.svelte";

  const routes = [
    {
      path: "about",
      component: About
    },
    {
      path: "*",
      component: Tests
    },
    {
      component: Home
    }
  ];
</script>

<Router routes="{routes}"></Router>
