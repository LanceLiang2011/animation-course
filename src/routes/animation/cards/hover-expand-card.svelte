<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { gsap } from 'gsap';
	import Flip from 'gsap/dist/Flip';
	gsap.registerPlugin(Flip);
	import { tick } from 'svelte';
	export let image: string;

	let showText = false;
	let state; // State to hold the initial dimensions
	async function open() {
		state = Flip.getState('.card', { props: 'height, transform', simple: true });
		showText = true;
		await tick();
		Flip.from(state, {
			duration: 0.5, // Duration of the animation
			ease: 'elastic' // Easing function for a smoother effect
		});
	}
	function close() {
		showText = false;
	}
</script>

<article
	class="card relative rounded-md px-10 pb-10 text-center shadow-lg transition-all duration-500"
	on:mouseenter={open}
	on:mouseleave={close}
>
	<div class="relative h-full w-full -translate-y-6 shadow-sm">
		<img alt="placeholder" src={image} class="aspect-square w-full rounded-lg object-cover" />
	</div>
	{#if showText}
		<div in:fly={{ y: -100, duration: 500, delay: 500 }} out:fade>
			<slot name="title" class="mb-3 text-2xl font-bold" />
		</div>
		<div in:fly={{ y: -100, duration: 500, delay: 500 }} out:fade>
			<slot name="content" class="" />
		</div>
		<a
			in:fly={{ y: -100, duration: 500, delay: 500 }}
			out:fade
			class="mt-4 block rounded-sm bg-slate-800 px-3 py-2 font-semibold text-white"
			target="_blank"
			href="https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/cards/hover-expand-card.svelte"
			>See Code</a
		>
	{/if}
</article>

<style lang="postcss">
	article {
		will-change: height;
	}
</style>
