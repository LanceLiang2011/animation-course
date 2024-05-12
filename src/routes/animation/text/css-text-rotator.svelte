<script lang="ts">
	export let as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' = 'h1';
</script>

<svelte:element this={as} class=" font-mono text-4xl font-bold tracking-widest text-gray-800">
	<slot></slot>
	<span></span></svelte:element
>

<style lang="postcss">
	span::before {
		content: var(--first);
		animation: text-switch 5s linear infinite both;
		@apply uppercase text-blue-900;
	}

	@keyframes text-switch {
		0% {
			content: var(--first);
		}
		50% {
			content: var(--second);
		}
		100% {
			content: var(--third);
		}
	}
</style>
