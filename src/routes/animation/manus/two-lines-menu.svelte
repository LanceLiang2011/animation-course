<script lang="ts">
	import type { Link } from './manutypes';
	export let links: Link[];
</script>

<nav>
	<ul class="flex gap-4 p-4 text-xl text-gray-800">
		{#each links as link}
			<li><a href={link.anchor}>{link.name}</a></li>
		{/each}
		<li><a target="_blank" href={'#'}>Code</a></li>
	</ul>
</nav>
