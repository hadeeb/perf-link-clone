<script>
  import { createEventDispatcher } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  

  import CopyIcon from "../icons/CopyIcon.svelte";
  import CloseIcon from "../icons/CloseIcon.svelte";

  export let time=0;
  export let error=false;

  const progress = tweened(0, {
		duration: 1000,
		easing: cubicOut
  });
  
  $:{
    progress.set(time||0)
  }

  const dispatch = createEventDispatcher();

  function onCopy(){
    dispatch("copy")
  }

  function onDelete(){
    dispatch("delete")
  }
</script>

<div>
  <p>
    {#if error}
      Failed
    {:else}
      {parseInt($progress)} μs
    {/if}
  </p>
  <button aria-label="copy test" on:click={onCopy}>
    <CopyIcon />
  </button>
  <button aria-label="delete test" on:click={onDelete}>
    <CloseIcon />
  </button>
</div>

<style>
  div{
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    /* margin: 0.4em; */
  }
  button {
    background-color: transparent;
    border:none;
    cursor: pointer;
  }

</style>