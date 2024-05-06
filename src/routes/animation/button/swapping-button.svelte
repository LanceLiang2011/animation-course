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
		--india-red: #c1666b;
		--violet: #731dd8;
		--height: 60px;
		--width: 200px;
		--edge: 15px;
		--border-width: 3px;
		cursor: pointer;
		color: var(--violet);
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		text-transform: uppercase;
		font-size: 24px;
		letter-spacing: 3px;
		height: var(--height);
		width: var(--width);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: swapping;
	}

	a::before,
	a::after {
		content: '';
		position: absolute;
		transition: transform 1500ms;
	}

	a::before {
		height: calc(var(--height) + 2 * var(--edge));
		width: var(--width);
		left: 0;
		top: calc(-1 * var(--edge));
		border-left: var(--border-width) solid var(--violet);
		border-right: var(--border-width) solid var(--india-red);
	}

	a::after {
		height: var(--height);
		width: calc(var(--width) + 2 * var(--edge));
		left: calc(-1 * var(--edge));
		top: 0;
		border-top: var(--border-width) solid var(--violet);
		border-bottom: var(--border-width) solid var(--india-red);
	}

	a:hover::before {
		transform: rotateY(180deg);
		transition: transform 600ms;
		transition-delay: 200ms;
	}
	a:hover::after {
		transform: rotateX(180deg);
		transition: transform 600ms;
	}
</style>
