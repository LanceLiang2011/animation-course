<script lang="ts">
	import pixelKnight from '$lib/assets/images/pixel_knight.png';
	import frierenFigure from '$lib/assets/images/frieren-figure.png';

	import BackgroundTransitionCard from './background-transition-card.svelte';
	import FigureCard from './figure-card.svelte';
	import HoverExpandCard from './hover-expand-card.svelte';
</script>

<svelte:head>
	<title>Card Transition</title>
</svelte:head>

<h1 class="title mb-8">Card Transitions</h1>

<div
	class="grid grid-cols-1 place-content-start place-items-start gap-6 md:grid-cols-2 xl:grid-cols-3"
>
	<BackgroundTransitionCard>
		<svelte:fragment slot="title" let:class={_class}>
			<h1 class={_class}>Background Transition</h1>
		</svelte:fragment>
		<svelte:fragment slot="content" let:class={_class}>
			<p class={_class}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat natus deleniti. Nulla
				earum commodi veniam, architecto esse soluta, reiciendis non quis animi doloribus error,
				facere pariatur in quod dicta.
			</p>
		</svelte:fragment>
	</BackgroundTransitionCard>
	<HoverExpandCard image={pixelKnight}>
		<svelte:fragment slot="title" let:class={_class}>
			<h1 class={_class}>Hover Expand</h1>
		</svelte:fragment>
		<svelte:fragment slot="content" let:class={_class}>
			<p class={_class}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat natus deleniti. Nulla
				earum commodi veniam, architecto esse soluta, reiciendis non quis animi doloribus error,
				facere pariatur in quod dicta.
			</p>
		</svelte:fragment>
	</HoverExpandCard>
	<FigureCard image={frierenFigure} class=" col-span-2 mt-36">
		<svelte:fragment slot="title" let:class={_class}>
			<h1 class={_class}>Figure Card</h1>
		</svelte:fragment>
		<svelte:fragment slot="content" let:class={_class}>
			<p class={_class}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat natus deleniti. Nulla
				earum commodi veniam, architecto esse soluta, reiciendis non quis animi doloribus error,
				facere pariatur in quod dicta.
			</p>
		</svelte:fragment>
	</FigureCard>
</div>
