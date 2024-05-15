<script lang="ts">
	import type { Action } from 'svelte/action';
	import Script from '$lib/components/script.svelte';
	import { gsap } from 'gsap';
	import anya from '$lib/assets/images/Anya_Forger_Anime.png';

	interface GsapParams {
		from: gsap.TweenVars;
		to: gsap.TweenVars;
	}

	const gsap_fromto: Action<HTMLElement, GsapParams> = (node, params) => {
		if (!node) return;
		let animation = gsap.fromTo(node, params.from, params.to);
		return {
			update(newParams) {
				animation.kill();
				animation = gsap.fromTo(node, newParams.from, newParams.to);
			},

			destroy() {
				animation.kill();
			}
		};
	};

	const code = `
	const gsap_fromto: 
	Action<HTMLElement, GsapParams> = (node, params) => {
		if (!node) return;
		let animation = gsap.fromTo(node, params.from, params.to);
		return {
			update(newParams) {
				animation.kill();
				animation = gsap.fromTo(node, newParams.from, newParams.to);
			},

			destroy() {
				animation.kill();
			}
		};
	};

	//...
	<img
			class=" min-w-36 origin-bottom"
			use:gsap_fromto={{
				from: { x: -200, rotate: -10 },
				to: { 
					x: 10, rotate: 10, duration: 2, 
					repeat: -1, yoyo: true, ease: 'power1.inOut' 
				}
			}}
			src={anya}
			alt="Anya Forger"
		/>
	`;
</script>

<div class=" grid grid-cols-1 md:grid-cols-3">
	<div class=" col-span-1">
		<img
			class=" min-w-36 origin-bottom"
			use:gsap_fromto={{
				from: { x: -200, rotate: -10 },
				to: { x: 10, rotate: 10, duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' }
			}}
			src={anya}
			alt="Anya Forger"
		/>
	</div>
	<div class=" col-span-2" use:gsap_fromto={{ from: {}, to: { x: 50, duration: 2 } }}>
		<Script {code} />
	</div>
</div>
