<script lang="ts">
	export let href: string;
</script>

<a {...$$restProps} {href}>
	<slot />
</a>

<style>
	a {
		--dark-gray: #272727;
		--yellow: #fff200;
		cursor: pointer;
		color: var(--dark-gray);
		background-color: transparent;
		font-family: sans-serif;
		font-size: 45px;
		border: 5px solid var(--dark-gray);
		padding: 40px 80px;
		position: relative;
		overflow: hidden;
	}

	a::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		background-color: var(--yellow);
		height: 100%;
		width: 100%;
		z-index: -1;
		transform-origin: top left;
		transform: rotate(90deg);
		transition: transform 600ms;
	}

	a:hover::before {
		transform: rotate(0) scaleX(2);
	}
</style>
