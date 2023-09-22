<script>
  import '@ui5/webcomponents/dist/Label';
  import '@ui5/webcomponents/dist/Button';
  import '@ui5/webcomponents-fiori/dist/Bar.js';
  import '@ui5/webcomponents-icons/dist/menu2.js';
  import '@ui5/webcomponents-icons/dist/action-settings.js';
  import SettingsDialog from '../Settings/SettingsDialog.svelte';
</script>

<div class="toolbar">
  <ui5-bar design="Header">
    <img
      class="logo"
      src="src/assets/SAPLogo.svg"
      slot="startContent"
      alt="SAP logo"
    />
    <ui5-label id="basic-label">Rubber Duck Debugger</ui5-label>
    <div slot="endContent">
      <SettingsDialog />
    </div>
  </ui5-bar>
</div>

<style>
  .toolbar::part(root) {
    padding-left: 0.75rem;
    padding-right: 1.25rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.125rem 0
        color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent),
      0 0.5rem 1rem 0
        color-mix(in srgb, var(--sapContent_ShadowColor) 16%, transparent);
  }
  .toolbar {
    grid-column: 1 / span 2;
    grid-row: 1 / 2;
  }

  .logo {
    height: 30px;
  }
</style>
