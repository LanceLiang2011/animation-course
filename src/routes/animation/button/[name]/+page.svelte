<script lang="ts">
	import type { PageData } from './$types';
	import { Badge } from '$lib/components/ui/badge';
	import Script from '$lib/components/script.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.params.name}</title>
</svelte:head>
<div class="grid content-center items-center justify-center justify-items-center">
	<svelte:component this={data.component} href="/animation/button">Go Back</svelte:component>
</div>
<Badge class="ml-4">{data.params.name}.svelte</Badge>
<div class=" max-w-screen-2xl overflow-x-auto">
	<Script code={data.code} />
</div>
