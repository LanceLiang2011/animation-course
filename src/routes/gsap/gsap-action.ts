import type { Action } from 'svelte/action';
import { gsap } from 'gsap';

interface GsapParams {
	from: gsap.TweenVars;
	to: gsap.TweenVars;
	children?: boolean;
}

export const gsap_fromto: Action<HTMLElement, GsapParams> = (node, params) => {
	if (!node) return;
	let target = params.children ? node.children : node;
	let animation = gsap.fromTo(target, params.from, params.to);
	return {
		update(newParams) {
			animation.kill();
			animation = gsap.fromTo(target, newParams.from, newParams.to);
		},

		destroy() {
			animation.kill();
		}
	};
};
