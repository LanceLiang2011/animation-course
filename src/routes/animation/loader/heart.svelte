<div class="relative h-20 w-20 animate-bounce rounded-md bg-red-700"></div>

<style lang="postcss">
	div::before {
		content: '';
		@apply absolute -top-1/2 left-0 h-full w-full rounded-full bg-red-700;
	}
	div::after {
		content: '';
		@apply absolute -left-1/2 top-0 h-full w-full rounded-full bg-red-700;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(-25%) rotate(45deg);
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}
		50% {
			transform: rotate(45deg) translateY(0);
			animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
		}
	}
	.animate-bounce {
		animation: bounce 1s infinite;
	}
</style>
