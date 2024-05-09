<script lang="ts">
	import frierenCat2 from '$lib/assets/images/frieren-cat-2.jpeg';
	import { cn } from '$lib/utils.js';
	export let direction: 'left' | 'right' = 'left';
</script>

<figure class="group relative overflow-hidden">
	<img
		class="
		w-full transition-transform duration-500
		group-hover:rotate-12 group-hover:scale-125"
		src={frierenCat2}
		alt="Feren and Stark in cat form, Frieren fan art"
	/>
	<figcaption
		class={cn([
			'absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center',
			'bg-black/0 text-center text-white opacity-0 transition-all duration-500',
			'group-hover:translate-x-0 group-hover:bg-black/60 group-hover:opacity-100',
			{ 'translate-x-full': direction === 'right' },
			{ '-translate-x-full': direction === 'left' }
		])}
	>
		<h2 class="mb-8 whitespace-pre-line px-6 text-2xl uppercase">Frieren and Serie in cat form</h2>
		<p class=" mb-4 text-lg capitalize">
			Frieren fan art by <a class="underline" target="_blank" href="https://twitter.com/BoHumbo"
				>@JHumbo</a
			>
		</p>
		<a
			href="https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/image/slide-hover-image.svelte"
			target="_blank"
			class=" font-bold text-blue-300 underline">GitHub Code</a
		>
	</figcaption>
</figure>

<style>
</style>
