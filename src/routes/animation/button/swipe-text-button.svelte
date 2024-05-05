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
		color: var(--dark-purple);
		background-color: transparent;
		font-family: sans-serif;
		font-size: 45px;
		border: 4px solid var(--dark-purple);
		padding: 40px 80px;
		position: relative;
		transition: all 600ms;
		overflow: hidden;
	}
	a::before {
		content: 'Hello';
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--red);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: translateY(-100%);
		transition: inherit;
	}
	a:hover::before {
		transform: translate(0);
	}
</style>
