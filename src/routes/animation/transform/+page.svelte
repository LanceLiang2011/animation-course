<script lang="ts">
	let duration = 1000;
	let originX: 'left' | 'center' | 'right' = 'left';
	let originY: 'top' | 'center' | 'bottom' = 'top';
</script>

<label>
	Duration:
	<input type="range" min={0} max={5000} bind:value={duration} />
	{duration}ms
</label>
<button on:click={() => (duration = 1000)}>Reset</button>
<div style="margin-bottom: 24px;">
	Oringin:
	<select bind:value={originX}>
		<option value="left"> Left </option>
		<option value="center"> Center </option>
		<option value="right"> Right </option>
	</select>
	<select bind:value={originY}>
		<option value="top"> Top </option>
		<option value="center"> Center </option>
		<option value="bottom"> Bottom </option>
	</select>
</div>

<div style="--duration:{duration}; --x:{originX}; --y:{originY};" class="wrapper">
	<div class="box scale">scale</div>
	<div class="box translate">translate</div>
	<div class="box rotate">rotate</div>
	<div class="box skew">skew</div>
</div>
<br />
<h1>Perspective</h1>
<div class="perspective">
	<div class="three"></div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.box {
		background-color: darkolivegreen;
		color: #fff;
		height: 100px;
		width: 100px;
		transition-property: transform;
		transition-duration: calc(var(--duration) * 1ms);
		transform-origin: var(--x, top) var(--y, top);
	}
	.scale:hover {
		transform: scale(1.5, 0.8);
	}
	.translate:hover {
		transform: translate(30px, 30px);
	}
	.rotate:hover {
		transform: rotate(0.5turn);
	}
	.skew:hover {
		transform: skew(15deg, 30deg);
	}
	.perspective {
		perspective: 800px;
	}
	.three {
		height: 200px;
		width: 200px;
		background-color: blueviolet;
		transition: transform 1s;
	}
	.three:hover {
		transform: rotateY(180deg) translateZ(200px);
	}
</style>
