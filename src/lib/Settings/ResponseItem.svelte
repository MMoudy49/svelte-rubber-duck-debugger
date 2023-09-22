<script>
  import '@ui5/webcomponents/dist/ListItem';
  import { createEventDispatcher } from 'svelte';

  export let item;

  const dispatcher = createEventDispatcher();

  const handleDeletePress = () => {
    dispatcher('item-delete', {
      id: item.id,
    });
  };
</script>

<ui5-li data-key={item.id}>
  <div class="li-content">
    <div class="li-content-text">
      <span>{item.desc}</span>
    </div>
    <div class="li-content-delete">
      <ui5-button role="button" tabindex="0" design="Negative" on:click={handleDeletePress}
        >Delete</ui5-button
      >
    </div>
  </div>
</ui5-li>

<style>
  ui5-li {
    all: initial;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  .li-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    min-height: 3rem;
  }

  .li-content-text {
    flex: 1;
    text-align: left;
    white-space: normal;
  }

  .li-content-delete > ui5-button {
    min-width: 5rem;
    margin-right: 0.1rem;
  }
</style>
