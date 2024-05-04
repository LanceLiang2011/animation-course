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
		--dark-blue: #141835;
		cursor: pointer;
		color: var(--dark-purple);
		background-color: transparent;
		font-family: sans-serif;
		font-size: 45px;
		border: 3px solid var(--dark-blue);
		padding: 40px 80px;
		position: relative;
		transition:
			transform 500ms,
			opacity 500ms;
		overflow: hidden;
	}

	button::before {
		content: var(--text);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: var(--dark-blue);
		color: white;
		display: grid;
		place-content: center;
		transition: inherit;
		transform: scale(5);
		opacity: 0;
	}

	button:hover::before {
		transform: scale(1);
		opacity: 1;
	}
</style>
