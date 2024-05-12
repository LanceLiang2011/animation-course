<script lang="ts">
	import CssTextRotator from './css-text-rotator.svelte';
	import FloatingText from './floating-text.svelte';
</script>

<svelte:head>
	<title>Text Animations</title>
</svelte:head>

<h1 class="title mb-6">Text Animations</h1>

<div class="flex flex-col items-center gap-8">
	<FloatingText class="text-center font-mono text-7xl font-bold tracking-[15px] text-indigo-900">
		Floating <br /> Text
	</FloatingText>
	<CssTextRotator --first={'"useful"'} --second={'"versatile"'} --third={'"cool"'}
		>Css is</CssTextRotator
	>
</div>
