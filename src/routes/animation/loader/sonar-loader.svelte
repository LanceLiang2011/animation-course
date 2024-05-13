<section class=" flex gap-1">
	{#each Array(8).fill(0) as _, i}
		<div class=" h-12 w-3 rounded-sm bg-gray-400" style="--index:{i}"></div>
	{/each}
</section>

<style lang="postcss">
	div {
		animation: flow 400ms linear calc(100ms * var(--index)) infinite alternate;
	}

	@keyframes flow {
		from {
			transform: scaleY(0%);
		}
		to {
			transform: scaleY(100%);
		}
	}
</style>
