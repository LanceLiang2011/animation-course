<script lang="ts">
	import type { Link } from './manutypes';
	export let links: Link[];
</script>

<nav>
	<ul class="flex gap-4 p-4 text-4xl font-semibold uppercase tracking-wider text-gray-800">
		{#each links as link}
			<li class="flex flex-nowrap">
				<a data-text={link.name} class=" relative px-2 py-2" href={link.anchor}>{link.name}</a>
			</li>
		{/each}
		<li class="flex flex-nowrap">
			<a
				class="relative px-2 py-2"
				target="_blank"
				data-text="Code"
				href={'https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/manus/cursor-menu.svelte'}
				>Code</a
			>
		</li>
	</ul>
</nav>

<style lang="postcss">
	a {
		--primary: #00ade1;
		color: transparent;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
		-webkit-text-stroke: 1px #111;
	}
	a::before {
		content: attr(data-text);
		-webkit-text-stroke: 1px var(--primary);
		color: var(--primary);
		border-right: var(--primary) solid 6px;
		@apply absolute w-0 -translate-x-2 overflow-hidden transition-all duration-500;
	}

	a:hover::before {
		@apply w-full translate-x-0;
	}
</style>
