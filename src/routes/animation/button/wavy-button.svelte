<script lang="ts">
	export let href: string;
</script>

<a {...$$restProps} {href}>
	<slot />
	<div class="wave"></div>
</a>

<style>
	a {
		--water: #00aeff;
		--secondary: #fff;
		--height: 32px;
		color: var(--water);
		border: 2px solid var(--water);
		position: relative;
		padding: 15px 30px;
		font-size: 24px;
		font-weight: 300;
		transition: color 800ms;
		overflow: hidden;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: wavy;
	}
	.wave {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: calc(100% + var(--height));
		background-color: var(--water);
		transition: transform 1000ms;
		z-index: -1;
	}

	.wave::before {
		content: '';
		position: absolute;
		top: calc(var(--height) * -1);
		left: 0;
		width: 100%;
		height: var(--height);
		background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='%2300aeff' fill-opacity='1' d='M0,160L40,138.7C80,117,160,75,240,32C320,-11,400,21,480,64C560,107,640,149,720,176C800,203,880,245,960,266.7C1040,288,1120,288,1200,266.7C1280,245,1360,203,1400,181.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'></path></svg>");
		background-size: cover;
		animation: wavy 600ms linear infinite;
	}

	a:hover {
		color: var(--secondary);
	}
	a:hover .wave {
		transform: translateY(calc(-100% - var(--height)));
	}

	@keyframes wavy {
		from {
			background-position-x: 0;
		}
		to {
			background-position-x: -144px;
		}
	}
</style>
