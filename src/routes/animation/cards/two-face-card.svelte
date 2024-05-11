<script lang="ts">
</script>

<article class="group relative">
	<div
		class="face-one relative z-20 flex h-60 w-80 translate-y-1/2 flex-col items-center justify-center bg-gray-800 px-2 py-4 text-white shadow-md transition-all duration-500 group-hover:translate-y-0 group-hover:bg-pink-700"
	>
		<slot name="cover" />
	</div>
	<div
		class="face-two relative z-0 flex h-60 w-80 -translate-y-1/2 flex-col items-center justify-center px-2 py-4 shadow-lg transition-all duration-500 group-hover:translate-y-0"
	>
		<slot name="content" class="" />
		<a
			class="mt-4 block rounded-sm"
			target="_blank"
			href="https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/cards/two-face-card.svelte"
			>See Code</a
		>
	</div>
</article>

<style lang="postcss">
</style>
