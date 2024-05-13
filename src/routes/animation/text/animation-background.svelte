<script lang="ts">
	let className = '';
	export let as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' = 'h1';
	export { className as class };
	import { cn } from '$lib/utils';
</script>

<svelte:element
	this={as}
	class={cn([
		'bg-summer-season bg-clip-text text-8xl font-bold tracking-wider text-transparent',
		className
	])}
	{...$$restProps}
>
	<slot></slot>
</svelte:element>

<style lang="postcss">
	.bg-summer-season {
		animation: textflow 30s infinite linear;
	}
	@keyframes textflow {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 3000px 0;
		}
	}
</style>
