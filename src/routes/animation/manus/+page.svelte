<script lang="ts">
	import TwoLinesMenu from './two-lines-menu.svelte';
	import type { Link } from './manutypes';
	import BgCornerlineMenu from './bg-cornerline-menu.svelte';
	import SplitBarMenu from './split-bar-menu.svelte';
	import TwoBarMenu from './two-bar-menu.svelte';
	import FocusBlurMenu from './focus-blur-menu.svelte';
	import DelaySlideMenu from './delay-slide-menu.svelte';
	import TwoBordersBgManu from './two-borders-bg-manu.svelte';
	import SniperMenu from './sniper-menu.svelte';
	import ColorLayerManu from './color-layer-manu.svelte';
	import CursorMenu from './cursor-menu.svelte';
	import TextFadingMenu from './text-fading-menu.svelte';

	const links: Link[] = [
		{
			name: 'Home',
			anchor: '#'
		},
		{
			name: 'About',
			anchor: '#'
		},
		{
			name: 'Blog',
			anchor: '#'
		},
		{
			name: 'Product',
			anchor: '#'
		}
	];
</script>

<svelte:head>
	<title>Menu Animations</title>
</svelte:head>

<h1 class="title mb-6">Menu Animations</h1>
<p class="paragraph mb-12">Hover to see the transitions. Click "Code" tag to see the code.</p>

<div class="flex flex-col items-center">
	<ColorLayerManu {links} />
	<CursorMenu {links} />
	<TextFadingMenu {links} />
	<TwoLinesMenu {links} />
	<BgCornerlineMenu {links} />
	<SplitBarMenu {links} />
	<TwoBarMenu {links} />
	<FocusBlurMenu {links} />
	<DelaySlideMenu {links} />
	<TwoBordersBgManu {links} />
	<SniperMenu {links} />
</div>
