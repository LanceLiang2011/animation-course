<script lang="ts">
	import RotateLoader from './rotate-loader.svelte';
	import Heart from './heart.svelte';
	import BouncingBalls from './bouncing-balls.svelte';
</script>

<svelte:head>
	<title>Loader Animations</title>
</svelte:head>

<h1 class="title mb-6">Loader Animations</h1>

<div class="flex flex-wrap items-center justify-center gap-6">
	<RotateLoader />
	<Heart />
	<BouncingBalls />
</div>
