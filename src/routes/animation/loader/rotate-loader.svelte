<div class="container">
	<div
		class="h-28 w-28 animate-[cardloading_2s_linear_infinite] rounded-lg bg-gray-600/80 shadow-sm"
	></div>
</div>

<style lang="postcss">
	.container {
		perspective: 300px;
		width: fit-content;
	}
	@keyframes -global-cardloading {
		0% {
			transform: rotateX(0) rotateY(0);
		}
		50% {
			transform: rotateX(0) rotateY(180deg);
		}
		100% {
			transform: rotateX(180deg) rotateY(180deg);
		}
	}
</style>
