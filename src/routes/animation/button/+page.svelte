<script lang="ts">
	import RotateButton from './rotate-button.svelte';
	import SwiteButton from './swipe-button.svelte';
	import CrossButton from './cross-button.svelte';
	import StretchButton from './stretch-button.svelte';
	import SwipeTextButton from './swipe-text-button.svelte';
	import GlowingButton from './glowing-button.svelte';
</script>

<div class="container">
	<RotateButton>Hover Me</RotateButton>
	<SwiteButton>Hover Me</SwiteButton>
	<CrossButton>Hover Me</CrossButton>
	<SwipeTextButton>Hover Me</SwipeTextButton>
	<GlowingButton>Hover Me</GlowingButton>
	<StretchButton>Hover Me</StretchButton>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}
</style>
