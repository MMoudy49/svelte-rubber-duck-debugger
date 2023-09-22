<script>
  import "@ui5/webcomponents/dist/List";
  import ResponseItem from './ResponseItem.svelte';

  export let responses;
</script>

<ui5-list>
  {#each responses as item}
    <ResponseItem {item} on:item-delete/>
  {/each}
</ui5-list>

<style>
</style>
