<script lang="ts">
	export let href: string;
</script>

<a {...$$restProps} {href}>
	<slot />
	<span></span>
</a>

<style>
	a {
		width: 160px;
		height: 60px;
		color: black;
		background-color: white;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		position: relative;
		transition: color 300ms;
		overflow: hidden;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: cut;
	}

	span {
		position: absolute;
		background-color: white;
		border: 2px solid black;
		width: 100%;
		height: 100%;
		top: 0%;
		left: 0%;
		z-index: -1;
	}

	span::before {
		content: '';
		position: absolute;
		background-color: white;
		width: 10%;
		height: 500%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(-50deg);
		transition:
			transform 300ms,
			background 300ms ease-in;
	}
	a:hover {
		color: white;
	}

	a:hover span::before {
		transform: translate(-50%, -50%) rotate(50deg) scaleX(10);
		background-color: black;
	}
</style>
