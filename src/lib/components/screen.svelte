<script lang="ts">
    import { storage, formatNumber } from "$lib/functions";
  
    $: previous = `${formatNumber($storage.previousOperand)} ${$storage.operation}`;
    $: current = formatNumber($storage.currentOperand);
  </script>
  
  <div id="screen">
    {#if !!$storage.previousOperand}
      <div>{previous}</div>
    {/if}
    {#if !!$storage.currentOperand}
      <div>{current}</div>
    {/if}
  </div>
  

<style>
    
#screen {
  width: 384px;
  height: 80px;
  font-size: 30px;
  background: #dee0e4;
  border: 1px solid #c3c5c9;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  margin: 15px auto auto auto;
  padding-right: 10px;
}
</style>