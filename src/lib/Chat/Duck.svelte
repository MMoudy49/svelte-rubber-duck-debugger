<script>
  import { currentResponse, responses } from '../../stores/stores';

  let shaking = false;
  const changeResponse = () => {
    shaking = true;
    if ($currentResponse < $responses.length - 1) {
      currentResponse.update(n => n + 1);
    } else {
      currentResponse.set(0);
    }
    setTimeout(() => {
      shaking = false;
    }, 400); // The same duration as the shake animation
  };
</script>

<div class="duckSpeechBubble">
  {#if $responses.length > 0}
    <p>{$responses[$currentResponse].desc}</p>
  {:else}
    <p>Idk what to say anymore, friend.</p>
  {/if}
</div>
<img
  class="duck {shaking ? 'shake-animation' : ''}"
  src="src/assets/JustYellowRubberDuck.png"
  alt="yellow runner duck looking forward"
  title="Click me for new response"
  on:click={changeResponse}
/>

<style>
  .duck {
    width: 35vh;
    cursor: pointer;
    align-self: center;
  }
  .duckSpeechBubble {
    position: relative;
    margin: 0.5rem;
    background: white;
    border-radius: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .duckSpeechBubble:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 60%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: white;
    border-bottom: 0;
    margin-left: -20px;
    margin-bottom: -20px;
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(10px);
    }
    75% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0);
    }
  }
  .shake-animation {
    animation: shake 0.4s ease-in-out;
  }
</style>
