<script lang="ts">
	import { codeToHtml } from 'shiki';
	import { Skeleton } from '$lib/components/ui/skeleton';
	export let code: string;
	export let lang: string = 'javascript';
	let htmlPromise = codeToHtml(code, {
		lang,
		theme: 'catppuccin-mocha'
	});
</script>

<div>
	{#await htmlPromise}
		<Skeleton class="h-[32rem] w-4/5" />
	{:then html}
		{@html html}
	{/await}
</div>

<style>
	div {
		padding: 16px 12px;
	}
</style>
