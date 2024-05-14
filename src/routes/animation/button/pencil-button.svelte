<script lang="ts">
	export let href: string;
	import { Pencil } from 'lucide-svelte';
</script>

<a
	class="relative px-12 py-8 text-3xl font-semibold text-gray-800 transition-colors hover:text-white hover:delay-[800ms]"
	{...$$restProps}
	{href}
>
	<slot />
	{#each Array(4).fill(0) as _, i}
		<span class="absolute bg-gray-800" style="--index:{i};"></span>
	{/each}
	<div class="absolute text-gray-800">
		<Pencil />
	</div>
</a>

<style lang="postcss">
	span:nth-child(1),
	span:nth-child(3) {
		transform: scaleX(0);
		@apply h-1 w-full transition-transform duration-200;
	}
	span:nth-child(1) {
		@apply left-0 top-0 origin-left;
	}
	span:nth-child(3) {
		@apply bottom-0 left-0 origin-right;
	}
	span:nth-child(2),
	span:nth-child(4) {
		transform: scaleY(0);
		@apply h-full w-1 transition-transform duration-200;
	}
	span:nth-child(2) {
		@apply right-0 top-0 origin-top;
	}
	span:nth-child(4) {
		@apply bottom-0 left-0 origin-bottom;
	}

	a:hover > span:nth-child(1),
	a:hover > span:nth-child(3) {
		transition-delay: calc(200ms * var(--index));
		transform: scaleX(1);
	}

	a:hover > span:nth-child(2),
	a:hover > span:nth-child(4) {
		transition-delay: calc(200ms * var(--index));
		transform: scaleY(1);
	}

	a::before {
		content: '';
		@apply absolute left-0 top-0 -z-50 h-full w-full origin-top-left scale-0 bg-gray-800 transition-transform duration-300;
	}
	a:hover::before {
		@apply scale-100 delay-[1000ms];
	}
	a::after {
	}

	div {
		top: -1.5rem;
		left: 0;
	}

	a:hover > div {
		animation: draw 1100ms linear both;
	}

	@keyframes draw {
		0% {
			top: -1.5rem;
			left: 0;
		}
		20% {
			top: -1.5rem;
			left: 100%;
		}
		40% {
			top: calc(100% - 1.5rem);
			left: 100%;
		}
		60% {
			top: calc(100% - 1.5rem);
			left: 0;
		}
		80% {
			top: -1.5rem;
			left: 0;
		}
		100% {
			top: calc(100% - 1.5rem);
			left: 100%;
		}
	}
</style>
