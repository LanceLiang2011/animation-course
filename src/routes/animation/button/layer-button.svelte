<script lang="ts">
	import { onMount } from 'svelte';
	let data: HTMLSpanElement;
	let text: string;
	onMount(() => {
		text = data.innerText;
	});
</script>

<button style="--text:'{text}';" {...$$restProps}>
	<span bind:this={data}>
		<slot />
	</span>
</button>

<style>
	button {
		--dark-gray: #262626;
		--yellow: #fff200;
		cursor: pointer;
		background-color: var(--dark-gray);
		font-family: sans-serif;
		font-size: 42px;
		border: 4px solid var(--dark-gray);
		padding: 40px 80px;
		position: relative;
		overflow: hidden;
		transition: transform 0.5s;
	}

	button::before {
		content: var(--text);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: var(--yellow);
		display: grid;
		place-content: center;
		transition: inherit;
	}

	button::after {
		content: var(--text);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: var(--yellow);
		display: grid;
		place-content: center;
		transform: translate(-100%, 100%);
		transition: inherit;
	}

	button:hover::before {
		transform: translate(100%, -100%);
	}

	button:hover::after {
		transform: translate(0%, 0%);
	}
</style>
