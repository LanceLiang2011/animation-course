<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
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

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/animation">Animation</a></li>
	</ul>
</nav>
<main>
	<slot />
</main>
<footer>
	Lance Liang &copy; {new Date().getFullYear().toString()} | All rights reserved
</footer>

<style>
	ul {
		list-style-type: none;
		display: flex;
		gap: 16px;
	}
	main {
		max-width: 1440px;
		margin-inline: auto;
		margin-top: 36px;
	}
	footer {
		color: gray;
		font-size: 1.2rem;
		display: flex;
		justify-content: center;
		margin-block: 20px;
	}
</style>
