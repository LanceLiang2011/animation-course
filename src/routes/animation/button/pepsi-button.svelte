<script lang="ts"></script>

<button>
	<slot />
</button>

<style>
	button {
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

	button::before {
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

	button::after {
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
	button:hover {
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		background-image: linear-gradient(45deg, var(--light-blue), var(--light-red));
	}

	button:hover::before {
		transform: rotateX(75deg) translate(3px, -60px);
	}
	button:hover::after {
		transform: rotateX(-75deg) translate(-3px, 60px);
	}
</style>
