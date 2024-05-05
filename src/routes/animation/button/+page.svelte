<script lang="ts">
	import RotateButton from './rotate-button.svelte';
	import SwiteButton from './swipe-button.svelte';
	import CrossButton from './cross-button.svelte';
	import StretchButton from './stretch-button.svelte';
	import SwipeTextButton from './swipe-text-button.svelte';
	import GlowingButton from './glowing-button.svelte';
	import LayerButton from './layer-button.svelte';
	import ScaleButton from './scale-button.svelte';
	import CircularSwappingButton from './circular-swapping-button.svelte';
	import RotateLayerButton from './rotate-layer-button.svelte';
	import DizzyButton from './dizzy-button.svelte';
	import ThreedotButton from './threedot-button.svelte';
	import PepsiButton from './pepsi-button.svelte';
</script>

<div class="container">
	<RotateButton>Hover Me</RotateButton>
	<SwiteButton>Hover Me</SwiteButton>
	<CrossButton>Hover Me</CrossButton>
	<SwipeTextButton>Hover Me</SwipeTextButton>
	<GlowingButton>Hover Me</GlowingButton>
	<LayerButton>Hover Me</LayerButton>
	<ScaleButton>Hover Me</ScaleButton>
	<CircularSwappingButton>Hover Me</CircularSwappingButton>
	<RotateLayerButton>Hover Me</RotateLayerButton>
	<DizzyButton>Hover Me</DizzyButton>
	<ThreedotButton>Hover Me</ThreedotButton>
	<PepsiButton>Hover Me</PepsiButton>
	<StretchButton>Hover Me</StretchButton>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}
</style>
