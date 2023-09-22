<script>
  import "@ui5/webcomponents-fiori/dist/Assets";
  import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";

  import Header from './lib/Header/Header.svelte';
  import Chat from './lib/Chat/Chat.svelte';

  setTheme("sap_horizon");
</script>

<main class="main-container">
  <Header />
  <Chat />
</main>

<style>
  .main-container {
    width: 100vw;
    height: 100vh;
    background: color-mix(in srgb, black 4%, var(--sapBackgroundColor));
    overflow: auto;
  }
</style>
