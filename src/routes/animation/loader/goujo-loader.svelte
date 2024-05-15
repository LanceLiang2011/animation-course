<script lang="ts">
	import goujo from '$lib/assets/images/goujo.png';
</script>

<div class="relative h-96 w-64">
	<span class="slash"></span>
	<div class="goujo absolute left-0 top-0 h-full w-full">
		<img class="w-64" src={goujo} alt="goujo" />
	</div>
	<div class="goujo absolute left-0 top-0 h-full w-full">
		<img class="w-64" src={goujo} alt="goujo" />
	</div>
</div>

<style lang="postcss">
	.goujo:first-of-type {
		clip-path: polygon(0 0, 100% 0, 100% 40%, 0 60%);
		animation: left 2000ms infinite ease-in-out alternate;
	}
	.goujo:last-of-type {
		clip-path: polygon(0 60%, 100% 40%, 100% 100%, 0 100%);
		animation: right 2000ms infinite ease-in-out alternate;
	}
	.slash {
		@apply absolute left-0 top-0 z-10 h-full w-full overflow-hidden;
		transform: rotate(-15deg);
	}
	.slash::before {
		content: '';
		@apply absolute left-0 top-1/2 h-2 w-full -rotate-12 bg-red-400;
		animation: slash 4000ms infinite ease-in-out both;
		background: linear-gradient(90deg, transparent, red, transparent);
		box-shadow: 0 0 10px red;
		clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
	}

	.slash::after {
		content: '';
		@apply absolute left-0 top-1/2 h-2 w-full -rotate-12 bg-red-200;
		background: linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.5), transparent);
		box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
		filter: blur(4px);
		animation: slash-trail 4000ms infinite ease-in-out both;
		clip-path: polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0% 50%);
	}

	@keyframes slash {
		from {
			opacity: 0;
			transform-origin: left;
			transform: scaleX(0);
		}
		15% {
			opacity: 1;
			transform-origin: left;
			transform: scaleX(1);
		}
		25% {
			opacity: 0;
			transform-origin: right;
			transform: scaleX(0);
		}
		to {
			opacity: 0;
			transform-origin: right;
			transform: scaleX(0);
		}
	}

	@keyframes slash-trail {
		from {
			opacity: 0;
			transform-origin: left;
			transform: scaleX(0);
		}
		15% {
			opacity: 0.7;
			transform-origin: left;
			transform: scaleX(1);
		}
		25% {
			opacity: 0;
			transform-origin: right;
			transform: scaleX(0);
		}
		to {
			opacity: 0;
			transform-origin: right;
			transform: scaleX(0);
		}
	}

	@keyframes left {
		from {
			transform: translateX(0);
			opacity: 1;
		}
		25% {
			transform: translateX(0);
			opacity: 1;
		}
		to {
			transform: translateX(-60%);
			opacity: 0.1;
		}
	}

	@keyframes right {
		from {
			transform: translateX(0);
			opacity: 1;
		}
		25% {
			transform: translateX(0);
			opacity: 1;
		}
		to {
			transform: translateX(60%);
			opacity: 0.1;
		}
	}
</style>
