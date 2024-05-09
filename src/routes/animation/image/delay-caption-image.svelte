<script>
	import pixelKnight from '$lib/assets/images/pixel_knight.png';
</script>

<figure class="group relative overflow-hidden text-white">
	<img class=" w-full" src={pixelKnight} alt="A knight in the wood, pixel art" />
	<figcaption
		class="absolute left-0 top-0 flex h-full w-full -translate-y-5 flex-col items-center justify-center opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 group-hover:delay-300"
	>
		<h2 class="mb-2 text-xl font-semibold uppercase tracking-wider">Knight in the wood</h2>
		<p class="bg-gradient-to-r from-amber-900 to-amber-600 px-2 py-1 tracking-wide">
			Pixel art by <a class="underline" href="https://twitter.com/eCherryArt" target="_blank"
				>@echerry</a
			>
		</p>
	</figcaption>
</figure>

<style lang="postcss">
	figure::before {
		content: '';
		@apply absolute left-0 top-0 h-full w-full translate-y-full bg-green-700/50 transition-transform delay-150 duration-300;
	}

	figure:hover::before {
		@apply translate-y-0 delay-0;
	}
</style>
