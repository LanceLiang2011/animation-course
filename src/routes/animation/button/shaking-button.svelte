<script lang="ts">
	export let href: string;
</script>

<a
	{...$$restProps}
	{href}
	class=" flex items-center justify-center border-4 border-solid border-gray-800 bg-transparent px-10 py-6 text-3xl text-gray-800 transition-colors duration-500 hover:border-red-800 hover:text-red-800"
>
	<slot />
</a>

<style>
	a {
		/* This is for view transition. You don't need this in your code */
		view-transition-name: shaking;
	}

	a:hover {
		animation: shaking 600ms;
	}

	@keyframes shaking {
		33% {
			transform: rotate(12deg);
		}
		66% {
			transform: rotate(-10deg);
		}
		100% {
			transform: rotate(8deg);
		}
	}
</style>
