<script lang="ts">
	import { gsap_timeline } from '../gsap-action';
	import anya from '$lib/assets/images/Anya_Forger_Anime.png';
	import frieren from '$lib/assets/images/frieren-figure.png';
	import Script from '$lib/components/script.svelte';

	let anya_img: HTMLElement;
	let frieren_img: HTMLElement;

	const code = `
	export const gsap_timeline: 
	Action<HTMLElement, GsapTimelineProps> =
	(node, { setup }) => {
	if (!node) return;
	let tl = gsap.timeline();
	setup(tl, node);

	return {
		destroy() {
			tl.kill();
		},
		update(newParams) {
			tl.clear();
			setup(tl, node);
		}
	};
};

	//...
	<div
		class=" flex origin-bottom 
		items-center justify-center overflow-hidden"
		use:gsap_timeline={{
			setup(tl, node) {
				tl.from(anya_img, { y: 200, autoAlpha: 0 })
					.from(frieren_img, { y: 200, autoAlpha: 0 })
					.to(anya_img, { x: -300, duration: 1.5 })
					.to(frieren_img, { x: 300, duration: 1.5 }, '-=1.2')
					.to(anya_img, { x: -600, duration: 1.5 })
					.to(frieren_img, { x: 800, duration: 1.5 }, '<');
			}
		}}
	>
		<img bind:this={anya_img} src={anya} alt="Anya" class="" />
		<img bind:this={frieren_img} src={frieren} alt="Anya" class="" />
	</div>
	`;
</script>

<h1 class=" mb-8 text-3xl font-semibold">GSAP Timeline</h1>
<p class=" mb-4 text-xl">
	In Svelte, you can wrap GSAP timelines using actions for smooth animations. One approach is
	declarative: pass an array of animation configurations to the action, which initializes a GSAP
	timeline and sequentially adds each animation. This method is straightforward and ideal for
	simpler animations.
</p>
<p class=" mb-4 text-xl">
	Another approach is more flexible and less declarative: pass a setup function to the action, which
	initializes a GSAP timeline and allows you to chain GSAP methods directly. This method is suitable
	for complex animations that require dynamic control and conditional logic. Both approaches
	integrate GSAP's powerful animations seamlessly into Svelte components.
</p>
<p class=" mb-12 text-xl">Here I use the setup function example.</p>

<div class="">
	<div
		class=" flex origin-bottom items-center justify-center overflow-hidden"
		use:gsap_timeline={{
			setup(tl, node) {
				tl.from(anya_img, { y: 200, autoAlpha: 0 })
					.from(frieren_img, { y: 200, autoAlpha: 0 })
					.to(anya_img, { x: -300, duration: 1.5 })
					.to(frieren_img, { x: 300, duration: 1.5 }, '-=1.2')
					.to(anya_img, { x: -600, duration: 1.5 })
					.to(frieren_img, { x: 800, duration: 1.5 }, '<');
			}
		}}
	>
		<img bind:this={anya_img} src={anya} alt="Anya" class="" />
		<img bind:this={frieren_img} src={frieren} alt="Anya" class="" />
	</div>
	<div class="">
		<Script {code} />
	</div>
</div>
