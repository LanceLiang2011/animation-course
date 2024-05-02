<script lang="ts">
	let delay: number = 0;
</script>

<label>
	Delay:
	<input type="range" min={0} max={5000} bind:value={delay} />
	{delay}ms
</label>
<div style="--delay:{delay}">
	<div class="wrap">
		<button style="--timing: ease;">Ease</button>
	</div>
	<div class="wrap"><button style="--timing: linear;">Linear</button></div>
	<div class="wrap">
		<button style="--timing: ease-in;">Ease In</button>
	</div>
	<div class="wrap">
		<button style="--timing: ease-out;">Ease Out</button>
	</div>
	<div class="wrap">
		<button style="--timing: ease-in-out;">Ease In Out</button>
	</div>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	button {
		height: 90px;
		width: 290px;
		font-size: 28px;
		color: white;
		border: none;
		background-color: blue;
		transition-property: transform, background-color;
		transition-duration: 2000ms, 2000ms;
		transition-timing-function: var(--timing);
		transition-delay: calc(var(--delay) * 1ms), calc(var(--delay) * 1ms + 2000ms);
		border-radius: 12px;
	}

	.wrap:hover > button {
		transform: translateX(500px);
		background-color: skyblue;
	}
</style>
