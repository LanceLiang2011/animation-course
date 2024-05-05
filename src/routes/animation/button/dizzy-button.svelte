<script lang="ts">
	import { onMount } from 'svelte';
	export let href: string;
	let span: HTMLSpanElement;
	let text: string;
	onMount(() => {
		text = span.innerText;
	});
</script>

<a style="--text:'{text}'" {...$$restProps} {href}>
	<span bind:this={span}>
		<slot />
	</span>
</a>

<style>
	a {
		--yellow: #ff0;
		--dark-gray: #363636;
		--light-gray: #ababab;
		padding: 20px 40px;
		letter-spacing: 4px;
		color: var(--yellow);
		background-color: var(--light-gray);
		border: 3px solid var(--yellow);
		font-size: 35px;
		position: relative;
		font-family: sans-serif;
		cursor: pointer;
		overflow: hidden;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: dizzy;
	}

	a::before {
		content: var(--text);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		color: var(--yellow);
		background-color: var(--dark-gray);
		display: grid;
		place-content: center;
		transition: all 800ms;
	}

	a:hover::before {
		transform: translateX(100%) scale(0) rotateY(360deg);
		opacity: 0;
	}

	a::after {
		content: var(--text);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		color: var(--yellow);
		background-color: var(--dark-gray);
		display: grid;
		place-content: center;
		transition: all 800ms;
		transform: translateX(-100%) scale(0) rotateY(360deg);
		opacity: 0;
	}

	a:hover::after {
		transform: translateX(0) scale(1) rotateY(0);
		opacity: 1;
	}
</style>
