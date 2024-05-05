<script lang="ts">
	import { codeToHtml } from 'shiki';
	export let code: string;
	let htmlPromise = codeToHtml(code, {
		lang: 'javascript',
		theme: 'catppuccin-mocha'
	});
</script>

<div>
	{#await htmlPromise}
		loading...
	{:then html}
		{@html html}
	{/await}
</div>

<style>
	div {
		padding: 16px 12px;
	}
</style>
