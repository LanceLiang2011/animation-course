<script lang="ts">
	export let href: string;
</script>

<a {...$$restProps} {href}>
	<slot />
</a>

<style>
	a {
		--dark-gray: #262626;
		cursor: pointer;
		color: var(--dark-gray);
		background-color: transparent;
		font-family: sans-serif;
		font-size: 35px;
		border: 4px solid var(--dark-gray);
		padding: 30px 60px;
		position: relative;
		transition: all 800ms;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: cross;
	}

	a:hover {
		color: white;
	}

	a::before {
		content: '';
		background-color: var(--dark-gray);
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 101%;
		z-index: -1;
		transform: rotateX(90deg);
		transition: inherit;
	}

	a:hover::before {
		transform: rotateX(0);
	}

	a::after {
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

	a:hover::after {
		transform: rotateY(0);
	}
</style>
