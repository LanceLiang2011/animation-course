<div class=" flex gap-10 border-t-8 border-t-gray-500 px-4">
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
</div>

<style lang="postcss">
	span {
		@apply relative block h-[300px] w-1 origin-top bg-gray-500;
	}
	span::before {
		content: '';
		@apply absolute bottom-0 left-0 h-11 w-11 -translate-x-1/2 rounded-full bg-gray-500;
	}

	span:first-child {
		animation: left-swing 2s ease-in infinite;
	}

	span:last-child {
		animation: right-swing 2s 1s ease-in infinite;
	}

	@keyframes left-swing {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(60deg);
		}
		50% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	@keyframes right-swing {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(-60deg);
		}
		50% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
