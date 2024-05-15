import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const files = import.meta.glob(`../*.svelte`, { query: '?raw', import: 'default' });
	const code = (await files[`../${params.name}.svelte`]()) as string;
	const component = await import(`../${params.name}.svelte`);
	return { code, component: component.default, params };
}) satisfies PageLoad;
