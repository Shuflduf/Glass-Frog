<script lang="ts">
import '../app.css';
import NavBar from '$lib/components/NavBar.svelte';
import Footer from '$lib/components/Footer.svelte';

let { children } = $props();

// Generate 100 random star positions
const stars = Array.from({ length: 500 }, () => ({
  top: Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 3,
  size: 1 + Math.random() * 5
}));
</script>

<div class="relative min-h-screen bg-zinc-200 overflow-hidden">
  {#each stars as star}
    <div 
      class="star absolute rounded-full bg-white"
      style="
        top: {star.top}%;
        left: {star.left}%;
        width: {star.size}px;
        height: {star.size}px;
        animation-delay: {star.delay}s;
      "
    ></div>
  {/each}
  <div class="relative z-10">
    <NavBar />
    {@render children()}
    <Footer />
  </div>
</div>

<style>
  .star {
    animation: twinkle 4s ease-in-out infinite;
  }

  @keyframes twinkle {
    0%, 100% {
      opacity: 0.3;
      transform: scale(0.8);
    }
    50% {
      opacity: 1;
      transform: scale(1);
      filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.7));
    }
  }
</style>
