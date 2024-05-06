<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils.js';
	export let route;
</script>

<div class={cn(['text-sm', { 'bg-gray-100 rounded-md': $page.url.pathname === route.path }])}>
	<a href={route.path}>{route.name}</a>
</div>
