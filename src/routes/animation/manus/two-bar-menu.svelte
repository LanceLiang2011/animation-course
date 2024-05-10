<script lang="ts">
	import type { Link } from './manutypes';
	export let links: Link[];
</script>

<nav>
	<ul class="flex gap-4 p-4 text-xl tracking-wider text-gray-800">
		{#each links as link}
			<li>
				<a class=" relative px-3 py-2" href={link.anchor}>{link.name}</a>
			</li>
		{/each}
		<li class="">
			<a
				class="relative px-3 py-2"
				target="_blank"
				href={'https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/manus/two-bar-menu.svelte'}
				>Code</a
			>
		</li>
	</ul>
</nav>

<style lang="postcss">
	a::before,
	a::after {
		@apply absolute h-1 w-1/2 scale-x-0 transition-transform duration-500;
		content: '';
		top: 100%;
	}
	a::before {
		@apply left-0 origin-left bg-sky-600;
	}
	a::after {
		@apply right-0 origin-right bg-pink-600;
	}
	a:hover::before,
	a:hover::after {
		@apply scale-x-100;
	}
	a:hover::before {
		@apply translate-x-full;
	}
	a:hover::after {
		@apply -translate-x-full;
	}
</style>
