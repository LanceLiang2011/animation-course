<script lang="ts"></script>

<button {...$$restProps}>
	<slot />
</button>

<style>
	button {
		--dark-gray: #262626;
		cursor: pointer;
		color: var(--dark-gray);
		background-color: transparent;
		font-family: sans-serif;
		font-size: 45px;
		border: 4px solid var(--dark-gray);
		padding: 40px 80px;
		position: relative;
		transition: all 800ms;
	}

	button:hover {
		color: white;
	}

	button::before {
		content: '';
		background-color: var(--dark-gray);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: -1;
		transform: rotateX(90deg);
		transition: inherit;
	}

	button:hover::before {
		transform: rotateX(0);
	}

	button::after {
		content: '';
		background-color: var(--dark-gray);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: -1;
		transform: rotateY(90deg);
		transition: inherit;
	}

	button:hover::after {
		transform: rotateY(0);
	}
</style>
