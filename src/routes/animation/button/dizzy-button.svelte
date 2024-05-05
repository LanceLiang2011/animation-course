<script lang="ts">
	import { onMount } from 'svelte';
	let span: HTMLSpanElement;
	let text: string;
	onMount(() => {
		text = span.innerText;
	});
</script>

<button style="--text:'{text}'" {...$$restProps}>
	<span bind:this={span}>
		<slot />
	</span>
</button>

<style>
	button {
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
	}

	button::before {
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

	button:hover::before {
		transform: translateX(100%) scale(0) rotateY(360deg);
		opacity: 0;
	}

	button::after {
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

	button:hover::after {
		transform: translateX(0) scale(1) rotateY(0);
		opacity: 1;
	}
</style>
