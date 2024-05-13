<script lang="ts">
	import { Home, CircleUserRound, NotebookPen, ShoppingCart, Code } from 'lucide-svelte';
	const icons = [Home, CircleUserRound, NotebookPen, ShoppingCart];
</script>

<ul class="flex gap-20">
	{#each icons as I}
		<li
			class="relative rounded-full border-4 border-cyan-800 p-6 text-cyan-800 transition-colors duration-500 hover:text-white"
		>
			<a href="#"><I size={48} /></a>
		</li>
	{/each}
	<li
		class="relative rounded-full border-4 border-cyan-800 p-6 text-cyan-800 transition-colors duration-500 hover:text-white"
	>
		<a
			target="_blank"
			href={'https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/manus/icon-menu.svelte'}
			><Code size={48} /></a
		>
	</li>
</ul>

<style lang="postcss">
	li::before {
		content: '';
		@apply absolute left-0 top-0 -z-50 h-full w-full scale-0 rounded-full bg-cyan-800 opacity-0 transition-all duration-500;
	}
	li:hover::before {
		@apply scale-75 opacity-100;
	}
	li::after {
		content: '';
		@apply absolute left-0 top-0 -z-50 h-full w-full scale-0 rounded-full border-2 border-dashed border-cyan-800;
	}
	li:hover::after {
		animation: rotate 5s 200ms linear infinite;
	}
	@keyframes rotate {
		from {
			transform: rotate(0deg) scale(0.85);
		}
		to {
			transform: rotate(360deg) scale(0.85);
		}
	}
</style>
