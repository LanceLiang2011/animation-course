<script lang="ts">
	import type { Link } from './manutypes';
	export let links: Link[];
</script>

<nav>
	<ul class="flex gap-4 p-4 text-xl tracking-wider text-gray-800">
		{#each links as link}
			<li>
				<a
					class=" relative px-3 py-2 transition-colors duration-500 hover:text-orange-600"
					href={link.anchor}
					>{link.name}
					<span></span>
					<span></span>
				</a>
			</li>
		{/each}
		<li class="">
			<a
				class="relative px-3 py-2 transition-colors duration-500 hover:text-orange-600"
				target="_blank"
				href={'https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/manus/sniper-menu.svelte'}
				>Code
				<span></span>
				<span></span>
			</a>
		</li>
	</ul>
</nav>

<style lang="postcss">
	span::before,
	span::after {
		content: '';
		@apply absolute h-3 w-3 border-orange-500 opacity-0 transition-all duration-500;
	}
	span:first-of-type::before {
		@apply left-0 top-0 translate-x-3 translate-y-3 border-l-2 border-t-2;
	}
	span:first-of-type::after {
		@apply right-0 top-0 -translate-x-3 translate-y-3 border-r-2 border-t-2;
	}

	span:last-of-type::before {
		@apply bottom-0 left-0 -translate-y-3 translate-x-3 border-b-2 border-l-2;
	}
	span:last-of-type::after {
		@apply bottom-0 right-0 -translate-x-3 -translate-y-3 border-b-2 border-r-2;
	}

	a:hover > span::before,
	a:hover > span::after {
		@apply translate-x-0 translate-y-0 opacity-100;
	}
</style>
