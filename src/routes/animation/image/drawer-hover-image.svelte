<script lang="ts">
	import bochiCat from '$lib/assets/images/bochi-cat.jpeg';
	import { cn } from '$lib/utils.js';
</script>

<div class="overflow-hidden">
	<figure class="relative transition-transform duration-300 hover:-translate-y-1/4">
		<img
			class="
      w-full"
			src={bochiCat}
			alt="Bochi and Kita in cat form, Bochi the Rock fan art"
		/>
		<figcaption
			class={cn([
				'absolute -bottom-1/4 left-0 flex h-1/4 w-full flex-col items-center justify-center',
				'bg-black text-center text-white'
			])}
		>
			<h2 class="mb-4 text-xl uppercase">Bochi and Kita in cat form</h2>
			<p class=" mb-2 text-lg capitalize">
				Bochi the Rock fan art by <a
					class="underline"
					target="_blank"
					href="https://twitter.com/BoHumbo">JHumbo</a
				>
			</p>
		</figcaption>
	</figure>
</div>

<style>
</style>
