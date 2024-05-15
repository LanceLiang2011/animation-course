import type { Action } from 'svelte/action';
import { gsap } from 'gsap';

interface GsapFromtoParams {
	from: gsap.TweenVars;
	to: gsap.TweenVars;
	children?: boolean;
}

interface GsapToParams {
	params: gsap.TweenVars;
	options?: {
		children?: boolean;
		noupdate?: boolean;
	};
}

interface GsapTimelineProps {
	setup: (tl: gsap.core.Timeline, node: HTMLElement) => void;
	delay?: number;
}

export const gsap_fromto: Action<HTMLElement, GsapFromtoParams> = (node, params) => {
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

export const gsap_to: Action<HTMLElement, GsapToParams> = (node, { params, options }) => {
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

export const gsap_timeline: Action<HTMLElement, GsapTimelineProps> = (node, { setup, delay }) => {
	if (!node) return;
	let tl = gsap.timeline({ delay });
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
