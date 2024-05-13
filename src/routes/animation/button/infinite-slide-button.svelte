<script lang="ts">
	export let href: string;
	import { viewport } from '$lib/actions/viewport';
	let noanimation = true;
</script>

<a
	{...$$restProps}
	{href}
	use:viewport
	on:enterViewport={() => (noanimation = false)}
	on:exitViewport={() => (noanimation = true)}
	class:noanimation
	class="relative flex items-center justify-center overflow-hidden
	border-4 border-solid border-gray-800 bg-transparent px-10 py-6 text-3xl
	text-gray-800 transition-colors duration-700 hover:text-white"
>
	<slot />
</a>

<style lang="postcss">
	a::before {
		content: '';
		animation: move 1000ms linear infinite;
		@apply absolute left-0 top-0 -z-10 h-full 
		w-1/4 -skew-x-12 bg-red-400 transition-all duration-500;
	}
	a:hover::before {
		animation: none;
		@apply w-full skew-x-0 bg-red-600;
	}
	a.noanimation::before {
		animation: none;
	}

	@keyframes move {
		from {
			left: -20%;
		}
		to {
			left: 100%;
		}
	}
</style>
