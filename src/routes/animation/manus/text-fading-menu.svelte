<script lang="ts">
	import type { Link } from './manutypes';
	export let links: Link[];
</script>

<nav>
	<ul class="flex gap-4 p-4 text-5xl font-bold uppercase">
		{#each links as link}
			<li>
				<a
					data-text={link.name}
					class="relative block px-3 py-2 transition-colors duration-500 hover:text-gray-300"
					href={link.anchor}>{link.name}</a
				>
			</li>
		{/each}
		<li>
			<a
				class="relative block px-3 py-2 transition-colors duration-500 hover:text-gray-300"
				data-text="Code"
				target="_blank"
				href={'https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/manus/text-fading-menu.svelte'}
				>Code</a
			>
		</li>
	</ul>
</nav>

<style lang="postcss">
	a::before {
		--text-color: #2e82ff;
		content: attr(data-text);
		@apply absolute left-1/2 top-1/2 block w-fit normal-case opacity-0 transition-all duration-500;
		transform: translate(-50%, -50%);
		color: var(--text-color);
		font-size: 0.4em;
		text-shadow:
			rgb(53, 128, 242) 0px 1px 10px,
			rgb(53, 128, 242) 0px 1px 20px,
			rgb(53, 128, 242) 0px 1px 30px;
	}
	a:hover::before {
		@apply opacity-100;
	}
</style>
