<script lang="ts">
	let lastScroll = $state(0);
	let prevScroll = $state(0);

	let mobileMenuOpen = $state(false);

	if (typeof window !== 'undefined') {
		lastScroll = window.scrollY;
		prevScroll = window.scrollY;
	}

	function handleScroll() {
		prevScroll = lastScroll;
		lastScroll = window.scrollY;
	}

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', handleScroll);
	}
</script>

<div
	class="fixed z-50 w-full p-4 transition-transform duration-300 {lastScroll > prevScroll
		? '-translate-y-full'
		: 'translate-y-0'} flex justify-end"
>
	<div
		class="flex flex-col items-end rounded-2xl border border-zinc-400 bg-zinc-300/30 p-4 shadow-lg backdrop-blur-md md:w-full md:flex-row md:items-center md:justify-between"
	>
		<button onclick={toggleMenu} class="md:hidden">
			<img 
				src={mobileMenuOpen ? "assets/icons/close.svg" : "assets/icons/menu.svg"} 
				alt={mobileMenuOpen ? "Close menu" : "Open menu"} 
				class="brightness-0" 
			/>
		</button>

		<a href="/" class="{mobileMenuOpen ? 'block' : 'hidden'} md:block">
			<img src="/assets/gfa.png" alt="Glass Frog Academy Logo" class="h-16 my-8 md:my-0" />
		</a>

		<div class="hidden md:flex md:flex-row gap-4 md:gap-12 {mobileMenuOpen ? '!flex flex-col items-end' : ''}">
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
<div class="md:h-24"></div>
