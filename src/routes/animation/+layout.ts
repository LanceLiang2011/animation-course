import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	const routes = Object.keys(import.meta.glob('../animation/*/+page.svelte'));
	const formattedRoutes = routes.map((route) => {
		const name = route.split('/').at(-2);
		return { name, path: `/animation/${name}` };
	});

	return { formattedRoutes };
};
