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
            { y: 100, autoAlpha: 0, duration: 1, stagger: 1 })
            .to(
				target,
				{
					y: -100,
					autoAlpha: 0,
					duration: 1,
					stagger: 1
				},
				1
			);
		},
		options: { repeat: -1, repeatDelay: 0.2 },
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

<h1 class=" mb-8 text-3xl font-semibold">An example using timeline</h1>

<section
	use:gsap_timeline={{
		setup: (tl, target) => {
			tl.from(target, { y: 100, autoAlpha: 0, duration: 1, stagger: 1 }).to(
				target,
				{
					y: -100,
					autoAlpha: 0,
					duration: 1,
					stagger: 1
				},
				1
			);
		},
		options: { repeat: -1, repeatDelay: 0.2 },
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
