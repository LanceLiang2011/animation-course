<script lang="ts"></script>

<button {...$$restProps}>
	<slot />
</button>

<style>
	button {
		--dark-purple: #351435;
		cursor: pointer;
		color: var(--dark-purple);
		background-color: transparent;
		font-family: sans-serif;
		font-size: 45px;
		border: 4px solid var(--dark-purple);
		padding: 40px 80px;
		position: relative;
		transition: all 800ms;
		overflow: hidden;
	}
	button::before {
		content: '';
		background-color: var(--dark-purple);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		transform: translateX(-100%);
		transition: inherit;
	}
	button:hover {
		color: white;
	}
	button:hover::before {
		transform: translate(0);
	}
</style>
