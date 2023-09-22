<script>
  import '@ui5/webcomponents/dist/Button';
  import '@ui5/webcomponents/dist/Input';
  import { responses } from '../../stores/stores';

  let responseInputValue = '';

  const handleItemInput = (event) => {
    responseInputValue = event.target.value;
  };

  const handleAdd = () => {
    if (responseInputValue && responseInputValue.trim() !== '') {
      const newID = $responses.length > 0 ? $responses[$responses.length - 1].id + 1 : 1;
      const newResponse = {
        id: newID,
        desc: responseInputValue,
      };
      responses.update(responses => [...responses, newResponse]);
      responseInputValue = '';
    } else {
      alert('Please include text before adding.');
    }
  }
</script>

<div class="input-response">
  <ui5-input
    id="add-response"
    value={responseInputValue}
    on:input={handleItemInput}
    placeholder="Type a Response..."
  />
  <ui5-button
    role="button"
    tabindex="0"
    design="Emphasized"
    on:click={handleAdd}
  >
    Add
  </ui5-button>
</div>

<style>
  .input-response {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    column-gap: 1rem;
  }
  .input-response > ui5-input {
    flex: 1;
  }

  .input-response > ui5-button {
    min-width: 5rem;
    margin-right: 1.1rem;
  }
</style>
