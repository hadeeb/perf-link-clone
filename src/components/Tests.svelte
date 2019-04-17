<script>
  import { noop } from "svelte/internal";
  import { onMount } from "svelte";
  import {
    run,
    msToμs,
    runInWorker,
    setHash,
    debounce,
    cancellable
  } from "../utils";
  import Editor from "./Editor.svelte";
  import TestControls from "./TestControls.svelte";
  import Graph from "./Graph.svelte";

  let useWorker = true,
    autoRun = false,
    iterations = 100,
    isAsync = true,
    before = "",
    codes = [],
    results = [],
    errors = [],
    vals = [],
    promise = cancellable(Promise.resolve());
  $: {
    vals = results.map(res => msToμs(res.median));
    errors = results.map(res => res.error);
  }

  const debouncedRun = debounce(runTests, 500);

  $: {
    before, codes;
    if (before && codes.length) setHash(before, codes);
    if (autoRun) debouncedRun();
  }

  $: {
    useWorker, isAsync, iterations;
    if (autoRun) rerun();
  }

  onHashChange();

  function onHashChange() {
    try {
      before = atob(location.hash.slice(1).split("/")[1]);
      codes = JSON.parse(atob(location.hash.slice(1).split("/")[2]));
    } catch (e) {
      before = "";
      codes = [];
    }
  }

  function addTestCase() {
    codes = ["", ...codes];
  }

  function addTestCaseBefore(code, index) {
    codes = [...codes.slice(0, index), code, ...codes.slice(index)];
  }

  function deleteTestCaseAt(index) {
    codes = [...codes.slice(0, index), ...codes.slice(index + 1)];
  }

  function updateURL() {
    setHash(before, codes);
  }

  function rerun() {
    results = Array(codes.length).fill({ error: false, median: 0 });
    debouncedRun();
  }

  function runTests() {
    promise.cancel();
    requestAnimationFrame(() =>
      requestAnimationFrame(async () => {
        const resultPromises = codes.map(code =>
          (useWorker ? runInWorker : run)(
            { code, before },
            { iterations, isAsync }
          )
        );
        promise = cancellable(Promise.all(resultPromises));
        promise
          .then(x => {
            results = x;
          })
          .catch(noop);
      })
    );
  }
</script>

<svelte:window on:hashchange="{onHashChange}"></svelte:window>

<div class="tests-heading">
  <h3>Setup Code</h3>
  <div>
    <label
      ><input class="checkbox" type="checkbox" bind:checked="{useWorker}" /> Run
      In WebWorker</label
    >
    <label
      ><input class="checkbox" type="checkbox" bind:checked="{autoRun}" /> Auto
      Run</label
    >
    <label
      ><input class="checkbox" type="checkbox" bind:checked="{isAsync}" />
      Async</label
    >
    <label
      ><input class="input" type="number" min="1" bind:value="{iterations}" />
      Iterations</label
    >
  </div>
</div>
<Editor bind:code="{before}" label="Setup Code"></Editor>

<br />
<div class="tests-heading">
  <h3>
    Test cases
  </h3>
  <button class="add-button" on:click="{addTestCase}">Add Case</button>
</div>
<ul>
  {#each codes as code,i}
  <li>
    <Editor bind:code="{code}" label="Test case {i}"></Editor>
    <TestControls
      time="{vals[i]}"
      error="{errors[i]}"
      on:copy="{()=>addTestCaseBefore(code,i)}"
      on:delete="{()=>deleteTestCaseAt(i)}"
    ></TestControls>
  </li>
  {/each}
</ul>

{#if codes.length}
<button on:click="{rerun}">Run Tests</button>
<Graph data="{results}"></Graph>
{/if}

<style>
  h1 {
    color: white;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.62);
  }
  .tests-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 1em;
  }
  .add-button {
    color: orange;
    border: 1px solid orange;
  }
  label {
    color: rgba(255, 255, 255, 0.62);
    align-self: center;
    display: flex;
    align-items: baseline;
  }
  .checkbox {
    margin: 0;
    margin-right: 0.5em;
  }
  .input {
    background-color: rgb(42, 43, 47);
    border: none;
    border-radius: 0.5em;
    color: white;
    width: 10vmax;
    min-width: 100px;
    margin: 0.2em 0.5em 0.2em 0;
    padding: 0.3em;
    padding-left: calc(14px + 0.5em);
  }
  button {
    color: lightblue;
    border: 1px solid lightblue;
    padding: 0.62rem;
    border-radius: 1rem;
    background: transparent;
    font-size: 1rem;
    line-height: 1;
    opacity: 0.9;
    cursor: pointer;
    margin: 10px;
  }
  li {
    display: flex;
    background-color: rgb(42, 43, 47);
    border-radius: 1em;
    margin: 1em 0;
  }
</style>
