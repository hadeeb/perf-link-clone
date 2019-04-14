<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  import Line from "./GraphLine.svelte";

  export let data = [];
  let graphData = [];

  $: {
    const maxValue = data.reduce(
      (max, current) => (current.median > max ? current.median : max),
      0
    );
    graphData = data.map(x => (x.error || !maxValue ? 1 : x.median / maxValue));
    console.log(data, graphData);
  }
</script>

<aside>
  {#each graphData as result,i}
  <Line value="{result}" error="{data[i].error}"></Line>
  {/each}
</aside>

<style>
  div {
    color: white;
  }
</style>
