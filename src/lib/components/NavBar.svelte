<script lang="ts">
	let lastScroll = $state(0);
	let prevScroll = $state(0);

	// let mobileMenuOpen = $state(false);
	// let isMobile = $state(false);
	//
	//  let showNavbar = $derived((isMobile && mobileMenuOpen) || (!isMobile))

	if (typeof window !== 'undefined') {
		lastScroll = window.scrollY;
		prevScroll = window.scrollY;

		// isMobile = window.outerWidth > 768;
	}

	function handleScroll() {
		prevScroll = lastScroll;
		lastScroll = window.scrollY;
	}

	// function handleResize() {
	//    console.log('resized');
	// 	isMobile = window.outerWidth > 768;
	// }

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', handleScroll);
		// window.addEventListener('resize', handleResize);
	}
</script>

<div
	class="fixed z-50 w-full p-4 transition-transform duration-300 {lastScroll > prevScroll
		? '-translate-y-full'
		: 'translate-y-0'} flex justify-end"
>
	<div
		class="flex flex-col items-end gap-16 rounded-2xl border border-zinc-400 bg-zinc-300/30 p-4 shadow-lg backdrop-blur-md md:w-full md:flex-row md:items-center md:justify-between"
	>
		<!--   {isMobile} -->
		<!-- {#if showNavbar} -->
			<a href="/">
				<img src="/assets/gfa.png" alt="Glass Frog Academy Logo" class="h-16" />
			</a>
			<div class="flex flex-col items-end gap-12 md:flex-row">
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
		<!-- {/if} -->
	</div>
</div>
<div class="h-24"></div>
