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
	}

	button::before {
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
	button:hover::before {
		transform: rotateX(0);
		transition-property: transform;
		transition-duration: var(--duration);
		transition-delay: 0s;
	}

	button::after {
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
	button:hover::after {
		transform: rotateX(0);
		transition-property: transform;
		transition-duration: var(--duration);
		transition-delay: var(--duration);
	}
</style>
