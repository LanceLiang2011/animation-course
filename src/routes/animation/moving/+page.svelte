<script lang="ts">
	import dragonBall from '$lib/assets/images/dragon-ball.gif';
	import { Button } from '$lib/components/ui/button/index';
</script>

<div class="bg relative mb-12 h-[28rem] bg-suburban-street bg-right-bottom">
	<img
		src={dragonBall}
		alt="Running Son Goku"
		class="absolute bottom-0 left-1/2 -translate-x-1/2"
	/>
</div>

<Button
	target="_blank"
	href="https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/moving/+page.svelte"
	>See Code</Button
>

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
