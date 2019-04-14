<script>
  import { onMount, getContext, setContext } from "svelte";
  import { context, defaultContext } from "./internal";

  export let routes;

  const { match, root } = getContext(context) || defaultContext;

  let selected = null;

  function selectComponent() {
    const currentUrl = location.hash.slice(match.path.length);

    const matchedRoute = routes.find(route => {
      return (
        !route.path ||
        (route.path === "*" && currentUrl) ||
        currentUrl.startsWith(route.path)
      );
    });

    if (matchedRoute) {
      if (!selected || selected.component !== matchedRoute.component) {
        selected = {
          component: matchedRoute.component,
          props: matchedRoute.props || {}
        };
      }
      // setContext(context, {
      //   match: {
      //     path: match.path.concat(matchedRoute.path || "")
      //   }
      // });
    } else {
      selected = null;
    }
  }

  onMount(selectComponent);

  function onHashChange() {
    if (root) selectComponent();
  }
</script>

<svelte:window on:hashchange="{onHashChange}"></svelte:window>

{#if selected}
<svelte:component this="{selected.component}" {...selected.props} />
{:else}
<slot>No component</slot>
{/if}
