<script>
let lastScroll = 0;
let navbar;

if (typeof window !== 'undefined') {
  lastScroll = window.scrollY;
}

function handleScroll() {
  if (!navbar) return;
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll) {
    // down
    navbar.classList.add('-translate-y-full');
  } else {
    // up
    navbar.classList.remove('-translate-y-full');
  }
  lastScroll = currentScroll;
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', handleScroll);
}
</script>

<div bind:this={navbar} class="fixed p-4 w-full z-50 transition-transform duration-300">
  <div class="w-full rounded-2xl backdrop-blur-md border border-zinc-400 bg-zinc-300/30 flex flex-row p-4 items-center shadow-lg gap-16 justify-between">
    <a href="/">
      <img src="/assets/gfa.png" alt="Glass Frog Academy Logo" class="h-16" />
    </a>
    <div class="flex flex-row gap-12">
      <a href="/team">
        <div class="flex items-end">
          <p class="text-xl">Our Team</p>
          <img src="/assets/icons/chevron_down.svg" class="brightness-0" alt="chevron" />
        </div>
      </a>
      <a href="/classes">
        <div class="flex items-end">
          <p class="text-xl">Classes</p>
          <img src="/assets/icons/chevron_down.svg" class="brightness-0" alt="chevron" />
        </div>
      </a>
      <a href="/events">
        <div class="flex items-end">
          <p class="text-xl">Events</p>
          <img src="/assets/icons/chevron_down.svg" class="brightness-0" alt="chevron" />
        </div>
      </a>
    </div>
  </div>
</div>
