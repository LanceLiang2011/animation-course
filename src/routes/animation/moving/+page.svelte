<script lang="ts">
	import dragonBall from '$lib/assets/images/dragon-ball.gif';
</script>

<div class="bg relative h-[28rem] bg-suburban-street bg-right-bottom">
	<img
		src={dragonBall}
		alt="Running Son Goku"
		class="absolute bottom-0 left-1/2 -translate-x-1/2"
	/>
</div>

<style lang="postcss">
	.bg {
		animation: running 10s infinite linear both;
	}

	@keyframes running {
		from {
			background-position: 0 40%;
		}
		to {
			background-position: -1920px 40%;
		}
	}
</style>
