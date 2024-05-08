<script lang="ts">
	import DrawerHoverImage from './drawer-hover-image.svelte';
	import FadeHoverImage from './fade-hover-image.svelte';
	import SlideHoverImage from './slide-hover-image.svelte';
</script>

<svelte:head>
	<title>Image Transition</title>
</svelte:head>

<h1 class="title mb-8">Image Transitions</h1>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
	<FadeHoverImage />
	<SlideHoverImage direction="right" />
	<DrawerHoverImage />
</div>
