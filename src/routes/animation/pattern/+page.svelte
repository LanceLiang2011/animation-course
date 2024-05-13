<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	const optionsX = ['Left', 'No', 'Right'];
	const optionsY = ['Up', 'No', 'Down'];
	let x: 'Left' | 'No' | 'Right' = 'Right';
	let y: 'Up' | 'No' | 'Down' = 'Down';
	$: xNum = x === 'No' ? 0 : x === 'Left' ? -1 : 1;
	$: yNum = y === 'No' ? 0 : y === 'Up' ? -1 : 1;
</script>

<div class="mb-8 flex max-w-fit gap-6">
	<div>
		<label for="x" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Horizontal Scroll</label
		>
		<select
			id="x"
			bind:value={x}
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
		>
			{#each optionsX as opt}
				<option value={opt}>
					{opt}
				</option>
			{/each}
		</select>
	</div>
	<div>
		<label for="y" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
			>Vertical Scroll</label
		>
		<select
			id="y"
			bind:value={y}
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
		>
			{#each optionsY as opt}
				<option value={opt}>
					{opt}
				</option>
			{/each}
		</select>
	</div>
</div>

<div
	class="img h-screen bg-chess-pattern bg-left-top bg-repeat"
	style="--x:{xNum}; --y:{yNum}"
></div>

<style>
	div.img {
		animation: roll-pattern 16s infinite linear;
	}
	@keyframes roll-pattern {
		from {
			background-position: 0 0;
		}
		to {
			background-position: calc(1280px * var(--x)) calc(1280px * var(--y));
		}
	}
</style>
