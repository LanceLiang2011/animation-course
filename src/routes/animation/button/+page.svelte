<script lang="ts">
	import RotateButton from './rotate-button.svelte';
	import SwipeButton from './swipe-button.svelte';
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

<h1>Button Animations</h1>
<p>Hover to see the animation. Click to see the code.</p>
<div class="container">
	<RotateButton href="/animation/button/rotate-button">Hover Me</RotateButton>
	<SwipeButton href="/animation/button/swipe-button">Hover Me</SwipeButton>
	<CrossButton href="/animation/button/cross-button">Hover Me</CrossButton>
	<SwipeTextButton href="/animation/button/swipe-text-button">Hover Me</SwipeTextButton>
	<GlowingButton href="/animation/button/glowing-button">Hover Me</GlowingButton>
	<LayerButton href="/animation/button/layer-button">Hover Me</LayerButton>
	<ScaleButton href="/animation/button/scale-button">Hover Me</ScaleButton>
	<CircularSwappingButton href="/animation/button/circular-swapping-button"
		>Hover Me</CircularSwappingButton
	>
	<RotateLayerButton href="/animation/button/rotate-layer-button">Hover Me</RotateLayerButton>
	<DizzyButton href="/animation/button/dizzy-button">Hover Me</DizzyButton>
	<ThreedotButton href="/animation/button/threedot-button">Hover Me</ThreedotButton>
	<PepsiButton href="/animation/button/pepsi-button">Hover Me</PepsiButton>
	<StretchButton href="/animation/button/stretch-button">Hover Me</StretchButton>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}
	h1 {
		font-size: 3rem;
		margin-bottom: 12px;
		font-family: sans-serif;
	}
	p {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 16px;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
</style>
