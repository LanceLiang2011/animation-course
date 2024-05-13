<div class="container flex w-80 gap-2 border-b-4 border-gray-400">
	{#each [0, 1, 2, 3, 4] as ball}
		<div class="flex-1">
			<div class="h-12 w-12 rounded-full bg-gray-400"></div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.container > div {
		animation: bounce 1000ms infinite alternate;
	}
	.container > div:nth-child(1) {
		animation-delay: 200ms;
	}
	.container > div:nth-child(2) {
		animation-delay: 0ms;
	}
	.container > div:nth-child(3) {
		animation-delay: 400ms;
	}
	.container > div:nth-child(4) {
		animation-delay: 100ms;
	}
	.container > div:nth-child(5) {
		animation-delay: 500ms;
	}

	@keyframes bounce {
		from {
			transform: translateY(0%);
		}
		to {
			transform: translateY(-150px);
		}
	}
</style>
