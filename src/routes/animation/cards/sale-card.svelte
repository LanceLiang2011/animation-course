<script lang="ts">
	import PotionSale from '$lib/assets/images/potion-sale.png';
</script>

<article
	class="group relative overflow-hidden rounded-lg bg-gradient-to-r from-sky-900 to-sky-700 shadow-lg"
>
	<div
		class="z-10 flex translate-y-[20%] flex-col items-center justify-center transition-transform duration-500 hover:translate-y-2"
	>
		<div class="z-10">
			<img
				src={PotionSale}
				alt="Potion"
				class=" z-10 aspect-square object-cover object-left transition-all duration-500 group-hover:scale-110 group-hover:object-center"
			/>
		</div>
		<div class=" z-20 pb-6 text-white">
			<h2 class="text-2xl font-bold">Special Potion On Sale</h2>
			<p
				class="bg-gradient-to-r from-sky-500 via-green-400 to-indigo-300 bg-clip-text py-2 text-2xl font-bold text-transparent"
			>
				$699.<span class=" text-sm">99</span>
			</p>
			<a
				class="flex items-center justify-center rounded-md bg-gray-800 px-4 py-2 font-mono font-bold text-white"
				href="https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/cards/sale-card.svelte"
				target="_blank">See Code</a
			>
		</div>
	</div>
</article>

<style lang="postcss">
	article::before {
		content: '';
		@apply absolute -top-1/2 left-0 z-0 h-full w-full skew-y-12 bg-gradient-to-r from-teal-900 to-sky-900 transition-transform duration-500 hover:-skew-y-12;
	}
</style>
