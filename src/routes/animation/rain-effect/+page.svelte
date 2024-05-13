<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
</script>

<div class=" mb-12 h-96 bg-fa-rain bg-no-repeat">
	<div class="h-full animate-[rain_3s_infinite_linear] bg-rain"></div>
</div>

<Button
	target="_blank"
	href="https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/rain-effect/+page.svelte"
	>See Code</Button
>

<style lang="postcss">
	@keyframes -global-rain {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 500px 500px;
		}
	}
</style>
