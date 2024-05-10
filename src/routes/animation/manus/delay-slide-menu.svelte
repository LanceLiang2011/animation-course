<script lang="ts">
	import type { Link } from './manutypes';
	export let links: Link[];
</script>

<nav>
	<ul class="flex gap-4 p-4 text-xl font-bold tracking-wider text-sky-700">
		{#each links as link}
			<li>
				<a
					class="before group relative block h-10 overflow-hidden px-3 before:absolute before:left-0 before:top-0 before:-z-50 before:h-full before:w-full before:-translate-y-full before:bg-sky-700 before:transition-transform before:duration-500 before:content-[''] hover:before:translate-y-0"
					href={link.anchor}
				>
					<span
						class="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:-translate-y-full"
						>{link.name}</span
					>
					<span
						class="flex h-full w-full items-center justify-center text-white transition-transform duration-500 group-hover:-translate-y-full"
						>{link.name}</span
					>
				</a>
			</li>
		{/each}
		<li>
			<a
				class="before group relative block h-10 overflow-hidden px-3 before:absolute before:left-0 before:top-0 before:-z-50 before:h-full before:w-full before:-translate-y-full before:bg-sky-700 before:transition-transform before:duration-500 before:content-[''] hover:before:translate-y-0"
				href={'https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/manus/delay-slide-menu.svelte'}
			>
				<span
					class="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:-translate-y-full"
					>Code</span
				>
				<span
					class="flex h-full w-full items-center justify-center text-white transition-transform duration-500 group-hover:-translate-y-full"
					>Code</span
				>
			</a>
		</li>
	</ul>
</nav>
