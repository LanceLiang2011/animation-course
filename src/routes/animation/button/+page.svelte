<script lang="ts">
	import RotateButton from './rotate-button.svelte';
	import SwipeButton from './swipe-button.svelte';
	import CrossButton from './cross-button.svelte';
	// import StretchButton from './stretch-button.svelte';
	import SwipeTextButton from './swipe-text-button.svelte';
	import GlowingButton from './glowing-button.svelte';
	import LayerButton from './layer-button.svelte';
	import ScaleButton from './scale-button.svelte';
	import CircularSwappingButton from './circular-swapping-button.svelte';
	import RotateLayerButton from './rotate-layer-button.svelte';
	import DizzyButton from './dizzy-button.svelte';
	import ThreedotButton from './threedot-button.svelte';
	import PepsiButton from './pepsi-button.svelte';
	import SplitedButton from './splited-button.svelte';
	import SwappingButton from './swapping-button.svelte';
	import BorderGrowButton from './border-grow-button.svelte';
	import CapitalRotateButton from './capital-rotate-button.svelte';
	import FourBorderButton from './four-border-button.svelte';
	import WavyButton from './wavy-button.svelte';
	import CutButton from './cut-button.svelte';
	import TwoSkewButton from './two-skew-button.svelte';
	import PulsingButton from './pulsing-button.svelte';
	import DiagonalSwipeButton from './diagonal-swipe-button.svelte';
	import ShakingButton from './shaking-button.svelte';
	import InfiniteSlideButton from './infinite-slide-button.svelte';
	import PencilButton from './pencil-button.svelte';
</script>

<svelte:head>
	<title>Button Animation</title>
</svelte:head>
<h1 class="title mb-6">Button Animations</h1>
<p class="paragraph mb-12">Hover to see the animation. Click to see the code.</p>
<div class="flex flex-wrap items-center justify-center gap-6">
	<ShakingButton href="/animation/button/shaking-button">Hover Me</ShakingButton>
	<PencilButton href="/animation/button/pencil-button">Hover Me</PencilButton>
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
	<SplitedButton href="/animation/button/splited-button">Hover Me</SplitedButton>
	<SwappingButton class="m-8" href="/animation/button/swapping-button">Hover Me</SwappingButton>
	<BorderGrowButton href="/animation/button/border-grow-button">Hover Me</BorderGrowButton>
	<CapitalRotateButton href="/animation/button/capital-rotate-button">Button</CapitalRotateButton>
	<FourBorderButton href="/animation/button/four-border-button">Hover Me</FourBorderButton>
	<WavyButton href="/animation/button/wavy-button">Hover Me</WavyButton>
	<CutButton href="/animation/button/cut-button">Hover Me</CutButton>
	<TwoSkewButton href="/animation/button/two-skew-button">Button</TwoSkewButton>
	<PulsingButton href="/animation/button/pulsing-button">Hover Me</PulsingButton>
	<DiagonalSwipeButton href="/animation/button/diagonal-swipe-button">Hover Me</DiagonalSwipeButton>
	<InfiniteSlideButton href="/animation/button/infinite-slide-button">Hover Me</InfiniteSlideButton>

	<!-- <StretchButton href="/animation/button/stretch-button">Hover Me</StretchButton> -->
</div>
