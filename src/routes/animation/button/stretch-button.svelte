<script lang="ts"></script>

<button {...$$restProps}>
	<slot />
</button>

<style>
	button {
		--red: #e1332d;
		cursor: pointer;
		color: var(--red);
		text-transform: uppercase;
		background-color: transparent;
		font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 40px;
		font-weight: 300;
		letter-spacing: -2px;
		border: 3px solid var(--red);
		padding: 40px 80px;
		transition: all 500ms;
	}

	button:hover {
		font-weight: 900;
		letter-spacing: 10px;
		border: 6px solid var(--red);
	}
</style>
