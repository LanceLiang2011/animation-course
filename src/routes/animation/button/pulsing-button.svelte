<script lang="ts">
	export let href: string;
</script>

<a {...$$restProps} {href}>
	<slot />
</a>

<style lang="postcss">
	a {
		--gray: #eee;
		padding: 25px 60px;
		font-size: 28px;
		color: var(--gray);
		position: relative;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: pulsing;
		transition: transform 500ms;
	}

	a,
	a::before {
		background-color: #333;
		border-radius: 80px;
	}

	a::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: -1;
		transition:
			transform 200ms,
			opacity 200ms;
	}

	a:hover {
		transition: transform 200ms;
		transform: translateY(-8px);
		@apply shadow-2xl;
	}

	a:active {
		transition: transform 100ms;
		transform: translateY(1px);
		@apply shadow-none;
	}

	a:hover::before {
		transform: scale(1.4, 1.6);
		opacity: 0;
	}
</style>
