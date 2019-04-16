<script>
  import { setHash } from "../utils";

  function gotoTest() {
    const before = "const data = [...Array(10000).keys()]",
      codes = ["data.find(x => x === 5000)", "data.find(x => x === 1000)"];
    setHash(before, codes);
  }
</script>

<main>
  <h1>Home</h1>
  <button on:click="{gotoTest}">Start Tests</button>
  <a href="#/about">About</a>
</main>

<style>
  h1 {
    color: white;
  }
  a {
    color: white;
  }
</style>
