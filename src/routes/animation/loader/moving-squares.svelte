<div class="relative h-40 w-40">
	<span class="absolute block h-16 w-16 rounded-md bg-gray-300 shadow-xl"></span>
	<span class="absolute block h-16 w-16 rounded-md bg-gray-300 shadow-xl"></span>
	<span class="absolute block h-16 w-16 rounded-md bg-gray-300 shadow-xl"></span>
</div>

<style lang="postcss">
	@keyframes move {
		0% {
			@apply left-0 top-0;
		}
		12.5% {
			@apply left-1/2 top-0;
		}
		25% {
			@apply left-1/2 top-1/2;
		}
		37.5% {
			@apply left-1/2 top-1/2;
		}
		50% {
			@apply left-0 top-1/2;
		}
		62.5% {
			@apply left-0 top-1/2;
		}
		75% {
			@apply bottom-0 left-0;
		}
		87.5% {
			@apply left-0 top-0;
		}
		100% {
			@apply left-0 top-0;
		}
	}

	span {
		animation: move 2100ms infinite;
	}
	span:nth-child(2) {
		animation-delay: 700ms;
	}
	span:nth-child(3) {
		animation-delay: 1400ms;
	}
</style>
