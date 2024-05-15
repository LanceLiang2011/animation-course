<script lang="ts">
	import anya from '$lib/assets/images/Anya_Forger_Anime.png';
	import { Button } from '$lib/components/ui/button/index';
	import { gsap_to } from '../gsap-action';
	import Script from '$lib/components/script.svelte';
	let x = 0;
	let show_btn = false;

	const code = `
	export const gsap_to: 
	Action<HTMLElement, GsapToParams> = 
	(node, { params, options }) => {
	if (!node) return;
	let target = options?.children ? node.children : node;
	let animation = gsap.to(target, params);
	return {
		update({ params: newParams, options }) {
			if (options?.noupdate) return;
			animation.kill();
			target = options?.children ? node.children : node;
			animation = gsap.to(target, newParams);
		},

		destroy() {
			animation.kill();
		}
	};
};


	//...
	<div
		use:gsap_to={{
			params: {
				keyframes: [
					{ x: 200, duration: 1 },
					{ y: 200, duration: 1 },
					{ rotate: 90, duration: 1 },
					{ y: -100, duration: 1 }
				],
				repeat: 0,
				onStart() {
					show_btn = false;
				},
				onComplete() {
					show_btn = true;
				}
			},
			options: {
				noupdate: true
			}
		}}
	>
		<img src={anya} alt="Anya" class="w-48" />
	</div>
	`;
</script>

<h1 class=" mb-8 text-3xl font-semibold">Callback Events</h1>

<p class=" mb-4 text-xl">
	In GSAP tween variables, we can pass in callback functions such as <span class="tag"
		>onComplete</span
	>,
	<span class="tag">onStart</span>, <span class="tag">onUpdate</span>,
	<span class="tag">onRepeat</span>.
</p>

<p class=" mb-12 text-xl">
	However, using use:action in this context can get tricky. In our case, the callback functions
	change a state that gets passed to the GSAP action. This state update, however, immediately causes
	the action to rerender, which disrupts the animation. To prevent this, we can modify our action to
	avoid rerendering.
</p>

{#key x}
	<div
		use:gsap_to={{
			params: {
				keyframes: [
					{ x: 200, duration: 1 },
					{ y: 200, duration: 1 },
					{ rotate: 90, duration: 1 },
					{ y: -100, duration: 1 }
				],
				repeat: 0,
				onStart() {
					show_btn = false;
				},
				onComplete() {
					show_btn = true;
				}
			},
			options: {
				noupdate: true
			}
		}}
	>
		<img src={anya} alt="Anya" class="w-48" />
	</div>
{/key}

{#if show_btn}
	<div class=" flex w-full -translate-y-12 items-center justify-center">
		<Button on:click={() => (x = x + 1)}>Replay</Button>
	</div>
{/if}

<Script {code} />

<style lang="postcss">
	.tag {
		@apply me-2 rounded bg-gray-100 px-2.5 py-0.5 text-base font-medium text-gray-800;
	}
</style>
