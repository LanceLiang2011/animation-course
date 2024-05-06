<script lang="ts">
	export let href: string;
</script>

<a {...$$restProps} {href}>
	<span>
		<slot />
	</span>
</a>

<style>
	a {
		--dark-gray: #262626;
		--yellow: #f6b93b;
		--border-width: 3px;
		cursor: pointer;
		color: var(--yellow);
		background-color: var(--dark-gray);
		font-family: sans-serif;
		font-size: 35px;
		border: var(--border-width) solid var(--yellow);
		padding: 30px 60px;
		position: relative;
		transition: color 600ms;
		overflow: hidden;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: splited;
	}
	a:hover {
		color: var(--dark-gray);
	}

	a::before,
	a::after {
		content: '';
		position: absolute;
		height: calc(100% + var(--border-width) * 2);
		width: 25%;
		background-color: var(--yellow);
		z-index: -1;
		transition: transform 600ms;
	}
	a::before {
		top: calc(-1 * var(--border-width));
		left: -25%;
	}
	a::after {
		top: calc(-100% - var(--border-width) * 3);
		left: 25%;
	}
	a:hover::before {
		transform: translateX(100%) scaleX(1.1);
	}
	a:hover::after {
		transform: translateY(100%) scaleX(1.1);
	}
	a > span::before,
	a > span::after {
		content: '';
		position: absolute;
		height: calc(100% + var(--border-width) * 2);
		width: 25%;
		background-color: var(--yellow);
		z-index: -1;
		transition: transform 600ms;
	}

	a > span::before {
		top: calc(100%);
		right: 25%;
	}
	a > span::after {
		top: calc(-1 * var(--border-width));
		right: -25%;
	}

	a:hover > span::before {
		transform: translateY(calc(-100% + var(--border-width))) scaleX(1.1);
	}

	a:hover > span::after {
		transform: translateX(calc(-100%)) scaleX(1.1);
	}
</style>
