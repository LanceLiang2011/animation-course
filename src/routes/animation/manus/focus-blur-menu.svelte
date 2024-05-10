<script lang="ts">
	import type { Link } from './manutypes';
	export let links: Link[];
</script>

<nav>
	<ul class="group flex gap-4 p-4 text-xl text-gray-800">
		{#each links as link}
			<li>
				<a
					class="relative block px-3 py-2 transition-all duration-500 hover:scale-125 hover:bg-orange-600 hover:text-white hover:!blur-none group-hover:blur-md"
					href={link.anchor}>{link.name}</a
				>
			</li>
		{/each}
		<li class="">
			<a
				class="relative block px-3 py-2 transition-all duration-500 hover:scale-125 hover:bg-orange-600 hover:text-white hover:!blur-none group-hover:blur-md"
				target="_blank"
				href={'https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/manus/focus-blur-menu.svelte'}
				>Code</a
			>
		</li>
	</ul>
</nav>

<style lang="postcss">
</style>
