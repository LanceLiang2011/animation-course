<script lang="ts">
	export let href: string;
</script>

<a {...$$restProps} {href}>
	<slot />
</a>

<style>
	a {
		--primary: #ff76ce;
		--first: #94ffd8;
		--second: #a3d8ff;
		--height: 80px;
		color: var(--primary);
		border: 4px solid var(--primary);
		background-color: transparent;
		font-size: 28px;
		height: var(--height);
		width: calc(var(--height) * 3.2);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		transition: color 400ms;
		overflow: hidden;
		/* Need content boxing for border to size properly */
		box-sizing: content-box;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: diagonal-swipe;
	}

	a::before,
	a::after {
		content: '';
		position: absolute;
		inset: 0;
		border-top: solid calc(var(--height) * 0.5) var(--first);
		border-bottom: solid calc(var(--height) * 0.5) var(--second);
		z-index: -1;
		transition: transform 500ms;
	}

	a::before {
		transform: translateX(-100%);
		border-right: solid calc(var(--height) * 0.5) transparent;
	}

	a::after {
		transform: translateX(100%);
		border-left: solid calc(var(--height) * 0.5) transparent;
	}

	a:hover {
		color: var(--primary);
	}

	a:hover::before,
	a:hover::after {
		transform: translateX(0);
	}
</style>
