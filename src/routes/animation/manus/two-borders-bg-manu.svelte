<script lang="ts">
	import type { Link } from './manutypes';
	export let links: Link[];
</script>

<nav>
	<ul class="flex gap-4 p-4 text-xl tracking-wider text-gray-800">
		{#each links as link}
			<li>
				<a
					class=" relative px-3 py-2 transition-colors duration-500 hover:text-white"
					href={link.anchor}>{link.name}</a
				>
			</li>
		{/each}
		<li class="">
			<a
				class="relative px-3 py-2 transition-colors duration-500 hover:text-white"
				target="_blank"
				href={'https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/manus/two-borders-bg-manu.svelte'}
				>Code</a
			>
		</li>
	</ul>
</nav>

<style lang="postcss">
	a::before {
		content: '';
		@apply absolute left-0 top-0 h-full w-full scale-y-150 border-b-2 border-t-2 border-gray-800 opacity-0 transition-all duration-500;
	}
	a:hover::before {
		@apply scale-y-100 opacity-100;
	}
	a::after {
		content: '';
		@apply absolute left-0 top-0 -z-50 h-full w-full scale-x-0 scale-y-0 transition-all duration-500;
	}
	a:hover::after {
		@apply scale-x-100 scale-y-75 bg-gray-800;
	}
</style>
