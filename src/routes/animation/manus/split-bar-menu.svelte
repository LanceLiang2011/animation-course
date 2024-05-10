<script lang="ts">
	import type { Link } from './manutypes';
	export let links: Link[];
</script>

<nav>
	<ul class="flex gap-4 p-4 text-xl text-gray-800">
		{#each links as link}
			<li>
				<a class=" relative px-3 py-2 transition-all hover:text-white" href={link.anchor}
					>{link.name}
					{#each [0, 1, 2, 3] as index}
						<span style="--poz:{index}"></span>
					{/each}
				</a>
			</li>
		{/each}
		<li class="">
			<a
				class="
        relative px-3 py-2 text-white transition-all duration-500
        before:absolute before:left-0 before:top-0 before:-z-50 before:h-full before:w-full before:origin-right before:bg-gray-900 before:transition-all before:duration-500 before:content-['']
      hover:text-gray-800 hover:before:scale-x-0
        "
				target="_blank"
				href={'https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/manus/split-bar-menu.svelte'}
				>Code</a
			>
		</li>
	</ul>
</nav>

<style lang="postcss">
	span {
		@apply absolute -z-50 h-full w-1/4 origin-top scale-y-0 bg-gray-800 duration-150;
		top: 0;
		left: calc(25% * var(--poz));
		transition-delay: calc(var(--poz) * 100ms);
	}
	a:hover > span {
		@apply scale-y-100;
	}
</style>
