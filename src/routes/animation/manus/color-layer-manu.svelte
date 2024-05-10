<script lang="ts">
	import type { Link } from './manutypes';
	export let links: Link[];
</script>

<nav>
	<ul class="flex gap-4 p-4 text-5xl font-bold">
		{#each links as link}
			<li>
				<a data-text={link.name} class=" relative flex text-transparent" href={link.anchor}
					>{link.name}</a
				>
			</li>
		{/each}
		<li class="">
			<a
				class="relative flex text-transparent"
				data-text="Code"
				target="_blank"
				href={'https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/manus/color-layer-manu.svelte'}
				>Code</a
			>
		</li>
	</ul>
</nav>

<style lang="postcss">
	a {
		-webkit-text-stroke: 1px #333;
	}
	a:hover {
		@apply text-white;
	}
	a::before,
	a::after {
		content: attr(data-text);
		@apply absolute left-0 top-0  flex transition-all duration-500;
	}
	a::before {
		@apply z-10;
	}
	a::after {
		@apply z-20;
	}
	a:hover::before {
		@apply -translate-y-1 translate-x-1 text-red-500;
		-webkit-text-stroke: 1px #333;
	}
	a:hover::after {
		@apply -translate-y-2 translate-x-2 text-blue-400;
		-webkit-text-stroke: 1px #333;
	}
</style>
