<script lang="ts">
	export let href: string;
</script>

<a {...$$restProps} {href}>
	<slot />
</a>

<style>
	a {
		--primary: #0c359e;
		--secondary: #ee99c2;
		color: white;
		font-weight: 600;
		padding: 20px 40px;
		font-size: 20px;
		letter-spacing: 7px;
		position: relative;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: two-skew;
	}

	a::before,
	a::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 50%;
		z-index: -1;
		transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
	}

	a::before {
		background-color: var(--primary);
		top: 0;
		left: 0;
		transform: skew(30deg) translate(-1%, -5%);
	}

	a::after {
		background-color: var(--secondary);
		top: 0;
		right: 0;
		transform: skew(30deg) translate(1%, 5%);
	}

	a:hover::before {
		transform: skew(0) translate(100%, 0);
	}

	a:hover::after {
		transform: skew(0) translate(-100%, 0);
	}
</style>
