<script lang="ts">
	import type { Link } from './manutypes';
	export let links: Link[];
</script>

<nav>
	<ul class="flex gap-6 p-4 text-xl text-gray-800">
		{#each links as link}
			<li>
				<a
					class="relative p-1 transition-colors duration-500 hover:bg-pink-600 hover:text-white"
					href={link.anchor}>{link.name}</a
				>
			</li>
		{/each}
		<li>
			<a
				target="_blank"
				class="relative p-1 transition-colors duration-500 hover:bg-pink-600 hover:text-white"
				href={'https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/manus/bg-cornerline-menu.svelte'}
				>Code</a
			>
		</li>
	</ul>
</nav>

<style lang="postcss">
	a::before,
	a::after {
		content: '';
		@apply absolute h-2 w-2 border-pink-600 opacity-0 transition-all duration-500;
	}
	a::before {
		@apply left-0 top-0 translate-x-1 translate-y-1 border-l-2 border-t-2;
	}
	a::after {
		@apply bottom-0 right-0 -translate-x-1 -translate-y-1 border-b-2 border-r-2;
	}
	a:hover::before,
	a:hover::after {
		@apply opacity-100 delay-100;
	}
	a:hover::before {
		@apply -translate-x-2 -translate-y-1;
	}
	a:hover::after {
		@apply translate-x-2 translate-y-1;
	}
</style>
