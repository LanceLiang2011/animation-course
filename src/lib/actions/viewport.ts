import type { Action } from 'svelte/action';

let observer: IntersectionObserver;
function createSingleObserver() {
	if (observer) return;
	observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const nameOfEvent = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
			entry.target.dispatchEvent(new CustomEvent(nameOfEvent));
		});
	});
}

const viewport = ((element: HTMLElement) => {
	createSingleObserver();
	observer.observe(element);
	return {
		destroy() {
			observer.unobserve(element);
		}
	};
}) satisfies Action;

export { viewport };
