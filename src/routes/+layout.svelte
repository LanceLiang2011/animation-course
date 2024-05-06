<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import MainNav from './main-nav.svelte';
	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class=" max-w-[1440px] mx-auto mt-8">
	<MainNav />
	<main class="mt-9">
		<slot />
	</main>
	<footer class=" text-slate-700 flex justify-center items-center my-12">
		Lance Liang &copy; {new Date().getFullYear().toString()} | All rights reserved
	</footer>
</div>
