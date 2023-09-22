<script>
  import '@ui5/webcomponents/dist/Button';
  import '@ui5/webcomponents/dist/Dialog';
  import '@ui5/webcomponents-icons/dist/action-settings.js';
  import { onMount } from 'svelte';
  import ResponseList from './ResponseList.svelte';
  import { currentResponse, responses } from '../../stores/stores';
  import AddResponse from './AddResponse.svelte';

  let dialog;

  onMount(() => {
    dialog = document.getElementById('responses-dialog');
  });

  const handleClose = () => {
    dialog.close();
  };

  const showDialogClick = () => {
    dialog.show();
  };

  const handleRemove = (event) => {
    const filteredResponses = $responses.filter(
      (response) => response.id !== event.detail.id
    );
    responses.set(filteredResponses);

    currentResponse.set(0);
  }
</script>

<div>
  <ui5-button
    role="button"
    tabindex="0"
    icon="action-settings"
    design="Transparent"
    on:click={showDialogClick}
  />
</div>

<ui5-dialog id="responses-dialog" header-text="Responses Settings">
  <div class="dialog-content">
    <AddResponse />
    <ResponseList responses={$responses} on:item-delete={handleRemove}/>
  </div>
  <div slot="footer" class="footer">
    <ui5-button role="button" tabindex="0" on:click={handleClose}>
      Close
    </ui5-button>
  </div>
</ui5-dialog>

<style>
  .dialog-content {
    width: 30rem;
    height: 50vh;
  }
  .footer {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    margin: 0.2rem 0 0.2rem 0;
  }
</style>
