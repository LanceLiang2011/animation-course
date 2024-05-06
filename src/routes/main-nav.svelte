<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils.js';
	$: mainPath = $page.url.pathname.split('/').at(1);
</script>

<Menubar.Root class=" w-fit ml-12">
	<Menubar.Menu>
		<Menubar.Trigger class={cn([{ 'bg-gray-200': mainPath === '' }])}>Home</Menubar.Trigger>
		<Menubar.Content>
			<a href="/">
				<Menubar.Item>Home</Menubar.Item>
			</a>
		</Menubar.Content>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger class={cn([{ 'bg-gray-200': mainPath === 'animation' }])}
			>Animation</Menubar.Trigger
		>
		<Menubar.Content>
			<a href="/animation">
				<Menubar.Item>All Animations</Menubar.Item>
			</a>
			<Menubar.Separator />
			<a href="/animation/button"><Menubar.Item>Button</Menubar.Item></a>
			<a href="/animation/transform"><Menubar.Item>Transform</Menubar.Item></a>
			<a href="/animation/transition"><Menubar.Item>Transition</Menubar.Item></a>
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>

<!-- <nav>
  <ul class="list-none flex gap-4">
    <li><a href="/">Home</a></li>
    <li><a href="/animation">Animation</a></li>
  </ul>
</nav> -->
