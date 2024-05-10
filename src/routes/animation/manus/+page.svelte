<script lang="ts">
	import TwoLinesMenu from './two-lines-menu.svelte';
	import type { Link } from './manutypes';

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

<div class="flex flex-col items-center">
	<TwoLinesMenu {links} />
</div>
