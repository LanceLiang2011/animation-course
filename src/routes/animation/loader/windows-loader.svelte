<section class=" flex items-center justify-center">
	<div class="absolute h-24 w-24 rotate-45">
		<span class="absolute left-0 top-0 h-12 w-12 bg-red-400"></span>
		<span class="absolute bottom-0 left-0 h-12 w-12 bg-green-400"></span>
		<span class="absolute right-0 top-0 h-12 w-12 bg-blue-400"></span>
		<span class="absolute bottom-0 right-0 h-12 w-12 bg-yellow-400"></span>
	</div>
</section>

<style lang="postcss">
	div {
		animation: animate 1.5s linear infinite;
	}
	span {
		animation: roll 1.5s linear infinite;
	}
	@keyframes animate {
		0% {
			@apply h-24 w-24;
		}
		10% {
			@apply h-24 w-24;
		}
		50% {
			@apply h-32 w-32;
		}
		90% {
			@apply h-24 w-24;
		}
		100% {
			@apply h-24 w-24;
		}
	}

	@keyframes roll {
		0% {
			transform: rotate(0deg);
			border-radius: 0%;
		}
		10% {
			transform: rotate(0deg);
			border-radius: 0%;
		}
		50% {
			transform: rotate(90deg);
			border-radius: 50%;
		}
		90% {
			transform: rotate(90deg);
			border-radius: 0%;
		}
		100% {
			transform: rotate(90deg);
			border-radius: 0%;
		}
	}
</style>
