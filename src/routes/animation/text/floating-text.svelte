<script lang="ts">
	let className = '';
	export { className as class };
	import { cn } from '$lib/utils';
</script>

<h1 class={cn(['animate-float', className])} {...$$restProps}>
	<slot></slot>
</h1>

<style lang="postcss">
	h1 {
		@apply text-shadow-lg;
	}
</style>
