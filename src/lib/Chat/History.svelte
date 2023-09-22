<script>
  import '@ui5/webcomponents/dist/TextArea';
  import '@ui5/webcomponents-icons/dist/paper-plane.js';

  let newNote = '';
  let noteHistory = [
    'I restarted',
    'I saved the file',
    'I screamed into a pillow',
    'I formatted the file',
    'I checked the all components were imported properly',
  ];

  const handleTextAreaInput = (event) => {
    newNote = event.target.value;
  };

  const handleSendButton = () => {
    noteHistory = [newNote, ...noteHistory];
    newNote = '';
  }
</script>

<div class="history">
  <div class="textarea">
    <ui5-textarea
      id="noteTextarea"
      placeholder="Enter what you've tried here"
      value={newNote}
      on:input={handleTextAreaInput}
    />
    <ui5-button
      icon="paper-plane"
      role="button"
      tabindex="0"
      on:click={handleSendButton}
    />
  </div>
  <div class="notes">
    {#each noteHistory as note}
      <p>{note}</p>
    {/each}
  </div>
</div>

<style>
  .history {
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  .textarea {
    padding: 0.5rem;
    display: flex;
    place-items: center;
    flex-direction: row;
  }
  .notes {
    background: white;
    overflow-y: auto;
    margin: 0 0.5rem;
    max-height: 265px;
  }
  p {
    padding: 0 0.5rem;
    text-align: start;
  }
</style>
