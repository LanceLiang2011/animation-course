<script lang="ts">
	import TwoLinesMenu from './two-lines-menu.svelte';
	import type { Link } from './manutypes';
	import BgCornerlineMenu from './bg-cornerline-menu.svelte';
	import SplitBarMenu from './split-bar-menu.svelte';
	import TwoBarMenu from './two-bar-menu.svelte';

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
	<title>Menu Transitions</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="title mb-6">Menu Transitions</h1>
	<p class="paragraph mb-12">Hover to see the transitions. Click "Code" menu see the code.</p>
	<TwoLinesMenu {links} />
	<BgCornerlineMenu {links} />
	<SplitBarMenu {links} />
	<TwoBarMenu {links} />
</div>
