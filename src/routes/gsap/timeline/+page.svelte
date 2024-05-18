<script lang="ts">
	import anyaCrying from '$lib/assets/images/anya-crying.png';
	import anyaDisgusted from '$lib/assets/images/anya-disgusted.png';
	import anyaShocked from '$lib/assets/images/anya-shocked.png';
	import anyaSmuh from '$lib/assets/images/anya-smuh.png';
	import { gsap_timeline } from '../gsap-action';
	import Script from '$lib/components/script.svelte';

	const code = `
    <section
	use:gsap_timeline={{
		setup: (tl, target) => {
			tl.from(target, 
            { autoAlpha: 0, duration: 1, stagger: 1 })
            .to(
				target,
				{
					autoAlpha: 0,
					duration: 1,
					stagger: 1
				},
				1
			);
		},
		options: { repeat: -1, repeatDelay: -1 },
		children: true
	}}
	class="relative mx-auto h-96 w-96"
>
	<img .../>
	<img ... />
	<img .../>
	<img ... />
</section>
    
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

<section
	use:gsap_timeline={{
		setup: (tl, target) => {
			tl.from(target, { autoAlpha: 0, duration: 1, stagger: 1 }).to(
				target,
				{
					autoAlpha: 0,
					duration: 1,
					stagger: 1
				},
				1
			);
		},
		options: { repeat: -1, repeatDelay: -1 },
		children: true
	}}
	class="relative mx-auto h-96 w-96"
>
	<img class="img absolute h-96 w-96 object-contain" src={anyaCrying} alt="Anya Crying" />
	<img class="img absolute h-96 w-96 object-contain" src={anyaDisgusted} alt="Anya Disgusted" />
	<img class="img absolute h-96 w-96 object-contain" src={anyaShocked} alt="Anya shocked" />
	<img class="img absolute h-96 w-96 object-contain" src={anyaSmuh} alt="Anya smuh" />
</section>

<div class="">
	<Script {code} />
</div>
