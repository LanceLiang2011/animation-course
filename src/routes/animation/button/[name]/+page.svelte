<script lang="ts">
	import type { PageData } from './$types';
	import { Badge } from '$lib/components/ui/badge';
	import Script from '$lib/components/script.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.params.name}</title>
</svelte:head>
<div class="container">
	<svelte:component this={data.component} href="/animation/button">Go Back</svelte:component>
</div>
<Badge class="ml-4">{data.params.name}.svelte</Badge>
<Script code={data.code} />

<style>
	.container {
		display: grid;
		place-content: center;
		place-items: center;
	}
</style>
