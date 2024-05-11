<script lang="ts">
</script>

<article
	class="relative overflow-hidden rounded-md p-10 text-center shadow-lg transition-colors duration-500 hover:text-white"
>
	<slot name="title" class="mb-3 text-2xl font-bold" />
	<slot name="content" class="" />
	<a
		class=" mt-4 block rounded-sm bg-slate-800 px-3 py-2 font-semibold text-white"
		target="_blank"
		href="https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/cards/background-transition-card.svelte"
		>See Code</a
	>
</article>

<style lang="postcss">
	article::before {
		content: '';
		@apply absolute bottom-0 left-0 -z-50 h-full w-full origin-bottom scale-y-[2%] rounded-md bg-sky-700 transition-transform duration-500;
	}
	article:hover::before {
		@apply scale-y-100;
	}
	/* article :global([slot='title']) {
	}

	article :global([slot='content']) {
	}

	a {
	} */
</style>
