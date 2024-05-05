<script lang="ts">
	export let href: string;
</script>

<a {...$$restProps} {href}>
	<slot />
</a>

<style>
	a {
		--dark-purple: #351435;
		cursor: pointer;
		color: var(--dark-purple);
		background-color: transparent;
		font-family: sans-serif;
		font-size: 45px;
		border: 4px solid var(--dark-purple);
		padding: 40px 80px;
		position: relative;
		transition: all 800ms;
		overflow: hidden;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: swipe;
	}
	a::before {
		content: '';
		background-color: var(--dark-purple);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		transform: translateX(-100%);
		transition: inherit;
	}
	a:hover {
		color: white;
	}
	a:hover::before {
		transform: translate(0);
	}
</style>
