<script lang="ts">
	import Script from '$lib/components/script.svelte';
	import { gsap_fromto } from '../gsap-action';
	import anya from '$lib/assets/images/Anya_Forger_Anime.png';
	import frieren from '$lib/assets/images/frieren-figure.png';
	import goujo from '$lib/assets/images/goujo.png';

	const code = `
	const gsap_fromto: 
	Action<HTMLElement, GsapParams> = 
	(node, params) => {
		if (!node) return;
		let target = params.children ? node.children : node;
		let animation = gsap.fromTo(target, params.from, params.to);
		return {
			update(newParams) {
				animation.kill();
				animation = gsap.fromTo(
					target, newParams.from, newParams.to
				);
			},

			destroy() {
				animation.kill();
			}
		};
	};

	//...
	<div
	class=" flex"
	use:gsap_fromto={{
		from: { rotate: -30 },
		to: {
			rotate: 30,
			duration: 2,
			repeat: -1,
			yoyo: true,
			ease: 'power1.inOut',
			stagger: {
				each: 0.5,
				ease: 'power1.inOut'
			}
		},
		children: true
	}}
>
	<img src={anya} alt="Anya" class="h-80 w-80 object-contain" />
	<img src={frieren} alt="Frieren" class="h-80 w-80 object-contain" />
	<img src={goujo} alt="Frieren" class="h-80 w-80 object-contain" />
</div>
	`;
</script>

<h1 class=" mb-8 text-3xl font-semibold">Animating Children</h1>

<p class=" mb-4 text-xl">
	GSAP can animate a group of elements. To make our svelte action more versatile, we can allow user
	to pass in a boolean to turn on or off children animation.
</p>
<p class=" mb-12 text-xl">Stagger property allowing us to animate the delay between each child.</p>

<div
	class=" flex"
	use:gsap_fromto={{
		from: { rotate: -30 },
		to: {
			rotate: 30,
			duration: 2,
			repeat: -1,
			yoyo: true,
			ease: 'power1.inOut',
			stagger: {
				each: 0.5,
				ease: 'power1.inOut'
			}
		},
		children: true
	}}
>
	<img src={anya} alt="Anya" class="h-80 w-80 object-contain" />
	<img src={frieren} alt="Frieren" class="h-80 w-80 object-contain" />
	<img src={goujo} alt="Frieren" class="h-80 w-80 object-contain" />
</div>

<div class=" col-span-2">
	<Script {code} />
</div>
