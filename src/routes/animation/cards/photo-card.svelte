<script lang="ts">
	import FaPhoto from '$lib/assets/images/fa-photo.webp';
</script>

<article class="group relative rounded-md bg-white shadow-md">
	<div class="overflow-hidden p-4 shadow-sm">
		<img
			src={FaPhoto}
			alt="FA"
			class=" block transition-transform duration-500 group-hover:-translate-y-6"
		/>
	</div>
	<div
		class="absolute left-0 top-[85%] h-full w-full text-center opacity-0 transition-opacity group-hover:opacity-100"
	>
		<h2 class=" font-mono font-semibold">Fullmetal Alchemist <span>Brotherhood</span></h2>
	</div>
</article>

<style lang="postcss">
	article::before,
	article::after {
		content: '';
		@apply absolute left-0 top-0 -z-50 h-full w-full bg-white transition-transform delay-75 duration-500;
	}

	article:hover::before,
	article:hover::after {
		@apply bg-gray-50 shadow-lg;
	}

	article:hover::before {
		@apply rotate-12;
	}
	article:hover::after {
		@apply rotate-[25deg];
	}
</style>
