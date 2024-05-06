<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils.js';
	$: mainPath = $page.url.pathname.split('/').at(1);
	$: console.log(mainPath);
</script>

<Menubar.Root class=" w-fit ml-12">
	<Menubar.Menu>
		<Menubar.Trigger class={cn([{ 'bg-gray-200': mainPath === '' }])}>Home</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item>
				<a href="/">Home</a>
				<!-- <Menubar.Shortcut>⌘T</Menubar.Shortcut> -->
			</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger class={cn([{ 'bg-gray-200': mainPath === 'animation' }])}
			>Animation</Menubar.Trigger
		>
		<Menubar.Content>
			<Menubar.Item>
				<a href="/animation">All Animations</a>
				<!-- <Menubar.Shortcut>⌘T</Menubar.Shortcut> -->
			</Menubar.Item>
			<Menubar.Separator />
			<Menubar.Item><a href="/animation/button">Button</a></Menubar.Item>
			<Menubar.Item><a href="/animation/transform">Transform</a></Menubar.Item>
			<Menubar.Item><a href="/animation/transition">Transition</a></Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>

<!-- <nav>
  <ul class="list-none flex gap-4">
    <li><a href="/">Home</a></li>
    <li><a href="/animation">Animation</a></li>
  </ul>
</nav> -->
