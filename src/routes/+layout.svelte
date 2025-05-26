<script lang="ts">
import '../app.css';
import NavBar from '$lib/components/NavBar.svelte';
import Footer from '$lib/components/Footer.svelte';

let { children } = $props();
</script>

<div class="bg-zinc-200">
  <NavBar />
  {@render children()}
  <Footer />
</div>
