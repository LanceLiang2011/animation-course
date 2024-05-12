<script lang="ts">
	import type { PageData } from './$types';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils.js';
	import Routetag from './routetag.svelte';
	export let data: PageData;
</script>

<div class="container">
	<nav>
		<ScrollArea class="w-36 rounded-md border">
			<div class="p-4">
				<h4 class="mb-4 text-center text-sm font-medium leading-none">Animations</h4>
				<Separator class="my-2" />
				{#each data.formattedRoutes as route, i (route.path)}
					<Routetag {route} />
					{#if i !== data.formattedRoutes.length - 1}
						<Separator class="my-2" />
					{/if}
				{/each}
			</div>
		</ScrollArea>
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
