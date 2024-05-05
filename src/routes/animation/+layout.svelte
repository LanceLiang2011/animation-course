<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="container">
	<nav>
		<ul>
			{#each data.formattedRoutes as route}
				<li><a href={route.path}>{route.name}</a></li>
			{/each}
		</ul>
	</nav>
	<main><slot /></main>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 200px 1fr;
	}
	nav {
		padding-top: 32px;
	}
	ul {
		list-style-type: none;
		display: flex;
		flex-direction: column;
	}
</style>
