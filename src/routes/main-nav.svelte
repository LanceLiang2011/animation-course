<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils.js';
	$: mainPath = $page.url.pathname.split('/').at(1);
</script>

<Menubar.Root class=" ml-12 w-fit">
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
			<a href="/animation"><Menubar.Item>Vanila Animation</Menubar.Item></a>
			<Menubar.Separator />
			<a href="/gsap"><Menubar.Item>GSAP Animation</Menubar.Item></a>
			<Menubar.Separator />
			<a href="https://animation-course-motion.vercel.app/motion" aria-disabled="true"
				><Menubar.Item>Framer Motion Animation</Menubar.Item></a
			>
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>
