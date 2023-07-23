<script>
	import '../styles.css';
    import Screen from "./screen.svelte"
    import { addDigit, clearCalculator, removeDigit, setOperation, setResult } from "$lib/functions";
</script>

<div id="casing">
  <Screen />
  <div id="firstRow">
    <button id="allClear" on:click={clearCalculator}>AC</button>
    <button id="back" on:click={removeDigit}>←</button>
    <button id="divide" on:click={() => setOperation("÷")}>÷</button>
  </div>
  <div id="secondRow">
    <button class="digit" on:click={() => addDigit("7")}>7</button>
    <button class="digit" on:click={() => addDigit("8")}>8</button>
    <button class="digit" on:click={() => addDigit("9")}>9</button>
    <button id="multiply" on:click={() => setOperation("x")}>x</button>
  </div>
  <div id="thirdRow">
    <button class="digit" on:click={() => addDigit("4")}>4</button>
    <button class="digit" on:click={() => addDigit("5")}>5</button>
    <button class="digit" on:click={() => addDigit("6")}>6</button>
    <button id="subtract" on:click={() => setOperation("-")}>-</button>
  </div>
  <div id="fourthRow">
    <button class="digit" on:click={() => addDigit("1")}>1</button>
    <button class="digit" on:click={() => addDigit("2")}>2</button>
    <button class="digit" on:click={() => addDigit("3")}>3</button>
    <button id="plus" on:click={() => setOperation("+")}>+</button>
  </div>
  <div id="fifthRow">
    <div id="fifthLeft">
      <button class="digit" on:click={() => addDigit("0")}>0</button>
      <button id="decimal" on:click={() => addDigit(".")}>.</button>
    </div>
    <div id="fifthRight">
      <button id="equals" on:click={setResult}>=</button>
    </div>
  </div>
</div>