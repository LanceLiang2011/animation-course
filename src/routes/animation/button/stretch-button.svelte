<script lang="ts">
	export let href: string;
</script>

<a {...$$restProps} {href}>
	<slot />
</a>

<style>
	a {
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
		/* This is for view transition. You don't need this in your code */
		view-transition-name: stretch;
	}

	a:hover {
		font-weight: 900;
		letter-spacing: 10px;
		border: 6px solid var(--red);
	}
</style>
