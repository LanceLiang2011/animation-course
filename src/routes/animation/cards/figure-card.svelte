<script lang="ts">
	import { cn } from '$lib/utils';
	let className = '';
	export let image: string;
	export { className as class };
</script>

<article
	class={cn([
		'group relative flex items-center rounded-md bg-gradient-to-tr from-purple-200 to-sky-300 px-10 py-12 text-slate-600 shadow-lg',
		className
	])}
>
	<div
		class=" w-3/5 translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
	>
		<slot name="title" class="mb-3 text-2xl font-bold" />
		<slot name="content" class="" />
		<a
			class="mt-4 block rounded-sm font-semibold"
			target="_blank"
			href="https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/cards/figure-card.svelte"
			>See Code</a
		>
	</div>
	<img
		src={image}
		alt="figure"
		class="absolute bottom-0 left-1/2 w-96 origin-bottom -translate-x-1/2 transition-transform duration-500 group-hover:translate-x-0 group-hover:scale-110"
	/>
</article>

<style lang="postcss">
</style>
