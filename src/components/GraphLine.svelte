<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  export let value = 0;
  export let error = false;

  const progress = tweened(0, {
    duration: 1000,
    easing: cubicOut
  });

  $: {
    progress.set(value || 0);
  }
</script>

<style>
  progress {
    display: block;
    width: 100%;
    -webkit-appearance: none;
    appearance: none;
    margin: 1em 0;
  }

  progress[value]::-webkit-progress-bar {
    background-color: transparent;
  }

  progress[value]::-webkit-progress-value {
    background-image: -webkit-linear-gradient(
        -45deg,
        transparent 33%,
        rgba(0, 0, 0, 0.1) 33%,
        rgba(0, 0, 0, 0.1) 66%,
        transparent 66%
      ),
      -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
      -webkit-linear-gradient(left, #09c, #f44);

    border-radius: 2px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
  }
  progress.error::-webkit-progress-value {
    background: #ff6363;
  }
</style>

<progress class:error value="{$progress}"></progress>
