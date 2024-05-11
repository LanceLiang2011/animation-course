<script lang="ts">
	import Flower from '$lib/assets/images/flower.jpeg';
</script>

<article class="group relative overflow-hidden rounded-md shadow-lg">
	<div class=" h-full w-full">
		<img src={Flower} alt="Flower" class="" />
	</div>
	<div
		class="absolute bottom-0 left-1/2 flex w-4/5
    origin-bottom -translate-x-1/2 translate-y-[85%] flex-col items-center justify-center
    gap-4 rounded-md bg-white px-2 py-2 text-center transition-all duration-500
    group-hover:left-0 group-hover:h-full group-hover:w-full group-hover:translate-x-0 group-hover:translate-y-0
    "
	>
		<h2 class="text-2xl font-bold">Scale Card</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perspiciatis vel ex,
			ducimus quos nihil nostrum sint corrupti eveniet sequi sed voluptatibus suscipit provident aut
			culpa? Porro voluptates eos aliquam.
		</p>
		<a
			class=" rounded-md bg-gray-800 px-4 py-2 text-white"
			href="https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/cards/scale-card.svelte"
			>Code</a
		>
	</div>
</article>

<style lang="postcss">
</style>
