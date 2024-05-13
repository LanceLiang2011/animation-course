<script lang="ts">
	import ballSeeesaw from '$lib/assets/images/soccer-ball.png';
</script>

<div class="bar relative w-80 border-b-4 border-gray-500">
	<div class="ball absolute bottom-0 left-0 h-16 w-16">
		<img src={ballSeeesaw} alt="football / soccer" />
	</div>
</div>

<style lang="postcss">
	.ball {
		animation: ball 2s ease-in-out infinite alternate;
	}
	.bar {
		animation: bar 2s ease-in-out infinite alternate;
		transform-origin: bottom center;
	}

	@keyframes ball {
		from {
			left: 0;
			transform: rotate(0);
		}
		to {
			left: calc(100% - 4rem);
			transform: rotate(720deg);
		}
	}

	@keyframes bar {
		from {
			transform: rotate(-30deg);
		}
		to {
			transform: rotate(30deg);
		}
	}
</style>
