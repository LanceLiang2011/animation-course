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
		--green: #2ce771;
		--yellow: #f1c40f;
		--duration: 500ms;

		cursor: pointer;
		color: white;
		background-color: var(--yellow);
		font-family: sans-serif;
		font-size: 35px;
		letter-spacing: 2px;
		border: none;
		padding: 40px 80px;
		position: relative;
		overflow: hidden;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: rotate-layer;
	}

	a::before {
		content: var(--text, '');
		background-color: var(--green);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: grid;
		place-content: center;
		transform-origin: top;
		transform: rotateX(270deg);
		transition-property: transform;
		transition-duration: var(--duration);
		transition-delay: var(--duration);
	}
	a:hover::before {
		transform: rotateX(0);
		transition-property: transform;
		transition-duration: var(--duration);
		transition-delay: 0s;
	}

	a::after {
		content: var(--text, '');
		background-color: red;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: grid;
		place-content: center;
		transform-origin: top;
		transform: rotateX(270deg);
		transition-property: transform;
		transition-duration: var(--duration);
		transition-delay: 0s;
	}
	a:hover::after {
		transform: rotateX(0);
		transition-property: transform;
		transition-duration: var(--duration);
		transition-delay: var(--duration);
	}
</style>
