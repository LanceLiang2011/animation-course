<!-- To generage irragular border radius, use: https://9elements.github.io/fancy-border-radius -->

<div class="relative flex h-40 w-40 items-center justify-center">
	{#each [0, 1, 2] as _}
		<span class="absolute inset-0 block animate-spin"></span>
	{/each}
	<p class="font-mono font-thin text-gray-500">Loading...</p>
</div>

<style lang="postcss">
	span:nth-child(1) {
		border-radius: 30% 70% 71% 29% / 30% 35% 65% 70%;
		border-width: 0.25rem;
		border-color: gray;
		animation: spin 2s linear infinite;
	}
	span:nth-child(2) {
		border-radius: 60% 40% 61% 39% / 47% 75% 25% 53%;
		border-width: 0.25rem;
		border-color: gray;
		animation: spin 1.8s linear reverse infinite;
	}
	span:nth-child(3) {
		border-radius: 37% 63% 29% 71% / 64% 18% 82% 36%;
		border-width: 0.25rem;
		border-color: gray;
		animation: spin 3.1s linear reverse infinite;
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
