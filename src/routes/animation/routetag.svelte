<script lang="ts">
	import { page } from '$app/stores';
	import { cn, capitalizeString } from '$lib/utils.js';
	export let route;
</script>

<div
	class={cn([
		'text-sm text-center',
		{ 'bg-slate-100 rounded-md': $page.url.pathname === route.path }
	])}
>
	<a href={route.path}>{capitalizeString(route.name)}</a>
</div>
