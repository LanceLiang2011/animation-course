<script lang="ts">
	import type { Link } from './manutypes';
	export let links: Link[];
</script>

<nav>
	<ul class="flex gap-8 p-4 text-xl text-gray-800">
		{#each links as link}
			<li><a class=" relative pb-2 pt-1" href={link.anchor}>{link.name}</a></li>
		{/each}
		<li>
			<a
				class=" relative pb-2 pt-1"
				target="_blank"
				href={'https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/manus/two-lines-menu.svelte'}
				>Code</a
			>
		</li>
	</ul>
</nav>

<style lang="postcss">
	a::before,
	a::after {
		@apply absolute left-0  h-[2px] w-full scale-x-0 bg-gray-700 transition-transform duration-500;
		content: '';
	}
	a::before {
		@apply top-0 origin-left;
	}
	a::after {
		@apply bottom-0 origin-right;
	}

	a:hover::before,
	a:hover::after {
		@apply scale-x-100;
	}
</style>
