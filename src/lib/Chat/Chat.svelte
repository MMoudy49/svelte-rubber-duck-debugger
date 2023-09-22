<script>
  import '@ui5/webcomponents/dist/TextArea';
  import '@ui5/webcomponents-icons/dist/paper-plane.js';
  import Duck from './Duck.svelte';
  import History from './History.svelte';
</script>

<div class="chat">
  <Duck />
  <History />
</div>

<style>
  .chat {
    display: flex;
    flex-direction: column;
  }
</style>
