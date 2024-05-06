<script lang="ts">
	export let href: string;
</script>

<a {...$$restProps} {href}>
	<slot />
</a>

<style>
	a {
		--dark-purple: #351435;
		--red: #e1332d;
		cursor: pointer;
		color: white;
		background-color: var(--dark-purple);
		font-family: sans-serif;
		font-size: 35px;
		border: 4px solid white;
		padding: 30px 60px;
		position: relative;
		transition: all 300ms;
		overflow: hidden;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: glowing;
	}
	a:hover {
		background-color: var(--red);
	}
	a::before {
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
	a:hover::before {
		transform: translateX(100%) scaleX(2.5) rotate(45deg);
	}
</style>
