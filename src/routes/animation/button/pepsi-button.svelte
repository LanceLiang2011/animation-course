<script lang="ts">
	export let href: string;
</script>

<a {href}>
	<slot />
</a>

<style>
	a {
		--light-blue: #20caff;
		--light-red: #ff7675;
		width: 300px;
		height: 60px;
		text-transform: uppercase;
		background-color: transparent;
		text-align: center;
		line-height: 60px;
		font-weight: bold;
		letter-spacing: 2px;
		position: relative;
		transition: transform 400ms;
		border: none;
		cursor: pointer;
		color: wheat;
		perspective: 1200px;
	}

	a::before {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		top: -3px;
		left: -3px;
		background-color: var(--light-blue);
		z-index: -1;
		mix-blend-mode: multiply;
		transition: transform 400ms;
	}

	a::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		bottom: -3px;
		right: -3px;
		background-color: var(--light-red);
		z-index: -1;
		mix-blend-mode: multiply;
		transition: transform 400ms;
	}
	a:hover {
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(45deg, var(--light-blue), var(--light-red));
	}

	a:hover::before {
		transform: rotateX(75deg) translate(3px, -60px);
	}
	a:hover::after {
		transform: rotateX(-75deg) translate(-3px, 60px);
	}
</style>
