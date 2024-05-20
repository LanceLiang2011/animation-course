<script lang="ts">
	import type { PageData } from './$types';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import Routetag from './routetag.svelte';
	export let data: PageData;
</script>

<div class="grid grid-cols-1 md:grid-cols-4">
	<nav class="col-span-1">
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
	<main class="col-span-3"><slot /></main>
</div>

<style>
	nav {
		padding-top: 32px;
	}
</style>
