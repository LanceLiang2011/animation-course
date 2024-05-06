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
	<svelte:component this={data.component} href="/animation/button">Hover Me</svelte:component>
	<p>Click button to go back</p>
</div>
<Badge class="ml-4">{data.params.name}.svelte</Badge>
<Script code={data.code} />

<style>
	.container {
		display: grid;
		place-content: center;
		place-items: center;
	}
	p {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 16px;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
</style>
