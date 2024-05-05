import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const files = import.meta.glob(`../*.svelte`, { as: 'raw' });
	const code = await files[`../${params.name}.svelte`]();
	const component = await import(`../${params.name}.svelte`);
	return { code, component: component.default };
}) satisfies PageLoad;
