<script lang="ts">
	export let href: string;
</script>

<a {...$$restProps} {href}>
	<span></span>
	<slot />
</a>

<style>
	a {
		--primary: #064378;
		color: var(--primary);
		border: none;
		position: relative;
		width: 300px;
		height: 90px;
		font-size: 30px;
		letter-spacing: 12px;
		text-transform: uppercase;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: four-border;
	}
	a::before,
	a::after,
	span::before,
	span::after {
		transition: transform 400ms;
	}

	a::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 4px;
		background-color: var(--primary);
		transform: translateX(-100%);
	}
	a::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 4px;
		background-color: var(--primary);
		transform: translateX(100%);
	}
	span::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 4px;
		height: 100%;
		background-color: var(--primary);
		transform: translateY(100%);
	}
	span::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		width: 4px;
		height: 100%;
		background-color: var(--primary);
		transform: translateY(-100%);
	}

	a:hover::before,
	a:hover::after,
	a:hover span::before,
	a:hover span::after {
		transform: translate(0);
	}
</style>
