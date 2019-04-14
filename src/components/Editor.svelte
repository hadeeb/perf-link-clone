<script>
  import "prismjs/components/prism-core";
  import "prismjs/components/prism-clike";
  import "prismjs/components/prism-javascript";

  export let code;
  export let label;

  $: styledCode = Prism.highlight(code, Prism.languages.javascript) + "<br />";
</script>

<div class="editor">
  <textarea aria-label="{label}" bind:value="{code}"></textarea>
  <pre aria-hidden="true">{@html styledCode}</pre>
</div>

<style>
  .editor {
    flex: 1;
    font-family: "Fira Code", source-code-pro, Menlo, Monaco, Consolas,
      "Courier New";
    position: relative;
    text-align: left;
    box-sizing: border-box;
    padding: 0px;
    overflow: hidden;
    background-color: rgb(42, 43, 47);
    color: white;
    border-radius: 1em;
  }
  textarea,
  pre {
    margin: 0px;
    border: 0px;
    background: none;
    box-sizing: inherit;
    display: inherit;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-variant-ligatures: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
    tab-size: inherit;
    text-indent: inherit;
    text-rendering: inherit;
    text-transform: inherit;
    white-space: pre-wrap;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
  textarea {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    resize: none;
    color: inherit;
    overflow: hidden;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -webkit-text-fill-color: transparent;
    padding: 20px;
  }
  pre {
    position: relative;
    pointer-events: none;
    padding: 20px;
  }
</style>
