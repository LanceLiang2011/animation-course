<script lang="ts">
	import { page } from '$app/stores';
	import { cn, capitalizeString } from '$lib/utils.js';
	export let route;
</script>

<div
	class={cn([
		'text-center text-sm',
		{ 'rounded-md bg-slate-100': $page.url.pathname === route.path }
	])}
>
	<a href={route.path}>{capitalizeString(route.name.replace('-', ' '))}</a>
</div>
