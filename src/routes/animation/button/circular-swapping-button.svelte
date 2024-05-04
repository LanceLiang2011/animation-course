<script lang="ts"></script>

<button {...$$restProps}>
	<slot />
</button>

<style>
	button {
		cursor: pointer;
		color: tomato;
		background-color: transparent;
		font-family: sans-serif;
		font-size: 35px;
		text-transform: uppercase;
		border: 4px solid tomato;
		padding: 30px 70px;
		position: relative;
		transition: all 500ms;
		overflow: hidden;
	}
	button::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: tomato;
		transition: inherit;
		z-index: -1;
		border-radius: 0 0 50% 50%;
		transform: translateY(-100%);
	}
	button:hover {
		color: white;
	}
	button:hover::before {
		transform: translateY(0);
		transform: scale(200%);
	}
</style>
