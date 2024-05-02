<script lang="ts"></script>

<button {...$$restProps}>
	<slot />
</button>

<style>
	button {
		--dark-purple: #351435;
		--red: #e1332d;
		cursor: pointer;
		color: white;
		background-color: var(--dark-purple);
		font-family: sans-serif;
		font-size: 45px;
		border: 4px solid white;
		padding: 40px 80px;
		position: relative;
		transition: all 300ms;
		overflow: hidden;
	}
	button:hover {
		background-color: var(--red);
	}
	button::before {
		content: '';
		position: absolute;
		background-color: white;
		top: 0;
		left: 0;
		width: 100%;
		height: 30px;
		transform: translateX(-100%) rotate(45deg);
		transition: inherit;
	}
	button:hover::before {
		transform: translateX(100%) scaleX(2.5) rotate(45deg);
	}
</style>
