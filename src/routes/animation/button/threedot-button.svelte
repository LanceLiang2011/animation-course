<script lang="ts">
	export let href: string;
</script>

<a {href}><span></span><slot /></a>

<style>
	a {
		width: 330px;
		height: 120px;
		color: yellow;
		background-color: transparent;
		border: none;
		font-size: 35px;
		font-family: sans-serif;
		transition: all 500ms;
		position: relative;
		cursor: pointer;
		text-align: center;
		line-height: 120px;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: threedot;
	}

	a::before,
	a::after {
		content: '';
		position: absolute;
		top: 50%;
		height: 30px;
		width: 30px;
		background-color: yellow;
		border-radius: 50%;
		transform: translateY(-50%);
		transition: all 300ms;
		z-index: 1;
		opacity: 0;
	}

	a::before {
		left: 0;
		box-shadow: -100px 0 0 yellow;
		z-index: -1;
	}
	a::after {
		right: 0;
		box-shadow: 100px 0 0 yellow;
		z-index: -1;
	}

	a:hover::before {
		left: 50%;
		box-shadow: 30px 0 0 yellow;
		transform: translate(-50%, -50%);
		opacity: 1;
	}
	a:hover::after {
		right: 50%;
		box-shadow: -30px 0 0 yellow;
		transform: translate(50%, -50%);
		opacity: 1;
	}

	span {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: yellow;
		border-radius: 8px;
		transform: scale(0);
		transition: transform 300ms;
		z-index: -1;
	}

	a:hover {
		color: gray;
		transition-delay: 400ms;
	}

	a:hover span {
		transform: scale(1);
		transition-delay: 400ms;
	}
</style>
