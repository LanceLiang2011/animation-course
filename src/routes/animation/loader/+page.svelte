<script lang="ts">
	import RotateLoader from './rotate-loader.svelte';
	import Heart from './heart.svelte';
	import BouncingBalls from './bouncing-balls.svelte';
	import PhonePulse from './phone-pulse.svelte';
	import NewtonCradle from './newton-cradle.svelte';
	import WindowsLoader from './windows-loader.svelte';
	import MovingSquares from './moving-squares.svelte';
	import TextLoader from './text-loader.svelte';
	import RingTextLoader from './ring-text-loader.svelte';
	import SonarLoader from './sonar-loader.svelte';
	import ColorsLoader from './colors-loader.svelte';
	import BallSeesaw from './ball-seesaw.svelte';
	import IrragularBorderLoader from './irragular-border-loader.svelte';
	import SplitTextLoader from './split-text-loader.svelte';
	import GoujoLoader from './goujo-loader.svelte';
</script>

<svelte:head>
	<title>Loader Animations</title>
</svelte:head>

<h1 class="title mb-6">Loader Animations</h1>
<p class="mb-8">
	You can see the source code on my <a
		class="italic underline"
		target="_blank"
		href="https://github.com/LanceLiang2011/animation-course/tree/master/src/routes/animation/loader"
		>GitHub Repo</a
	>
</p>

<div class="flex flex-wrap items-center justify-center gap-16">
	<GoujoLoader />
	<RotateLoader />
	<Heart />
	<BouncingBalls />
	<PhonePulse />
	<NewtonCradle />
	<WindowsLoader />
	<MovingSquares />
	<TextLoader />
	<RingTextLoader />
	<SonarLoader />
	<ColorsLoader />
	<BallSeesaw />
	<IrragularBorderLoader />
	<SplitTextLoader />
</div>
