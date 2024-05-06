<script lang="ts">
	export let href: string;
</script>

<a {...$$restProps} {href}>
	<slot />
</a>

<style>
	a {
		--orange: #c47135;
		cursor: pointer;
		padding: 12px 40px;
		color: white;
		background-color: var(--orange);
		font-size: 22px;
		position: relative;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: border-grow;
	}

	a::before,
	a::after {
		content: '';
		position: absolute;
		width: 24px;
		height: 24px;
		transition:
			height 600ms,
			width 600ms;
	}

	a::before {
		top: -5px;
		left: -5px;
		border-top: 3px solid var(--orange);
		border-left: 3px solid var(--orange);
	}

	a::after {
		bottom: -5px;
		right: -5px;
		border-bottom: 3px solid var(--orange);
		border-right: 3px solid var(--orange);
	}

	a:hover::before,
	a:hover::after {
		width: 99%;
		height: 99%;
	}
</style>
