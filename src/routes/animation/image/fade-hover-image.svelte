<script lang="ts">
	import frierenCat1 from '$lib/assets/images/frieren-cat-1.jpeg';
	import * as Dialog from '$lib/components/ui/dialog';
	import Script from '$lib/components/script.svelte';
	const code = `
	<figure class="group relative overflow-hidden">
	<img
		class="
		w-full transition-transform duration-500
		group-hover:rotate-12 group-hover:scale-125"
		src={frierenCat1}
		alt="Feren and Stark in cat form, Frieren fan art"
	/>
	<figcaption
		class="
		absolute left-0 top-0
		flex h-full w-full flex-col items-center justify-center
		bg-black/0 text-white text-center
		opacity-0 transition-all duration-500
		group-hover:bg-black/60 group-hover:opacity-100"
	>
		<h2 class="mb-8 px-6 text-2xl uppercase">
			Feren and Stark in cat form
		</h2>
		<p class=" mb-4 text-lg capitalize">
			Frieren fan art by 
			<a class="underline"
			 target="_blank"
			  href="https://twitter.com/BoHumbo"
				>JHumbo</a
			>
		</p>
	</figcaption>
</figure>
	`;
</script>

<figure class="group relative overflow-hidden">
	<img
		class="
		w-full transition-transform duration-500
		group-hover:rotate-12 group-hover:scale-125"
		src={frierenCat1}
		alt="Feren and Stark in cat form, Frieren fan art"
	/>
	<figcaption
		class="
		absolute left-0 top-0
		flex h-full w-full flex-col items-center justify-center
		bg-black/0 text-center text-white opacity-0 transition-all duration-500
		group-hover:bg-black/60 group-hover:opacity-100"
	>
		<h2 class="mb-8 px-6 text-2xl uppercase">Feren and Stark in cat form</h2>
		<p class=" mb-4 text-lg capitalize">
			Frieren fan art by <a class="underline" target="_blank" href="https://twitter.com/BoHumbo"
				>JHumbo</a
			>
		</p>
		<Dialog.Root>
			<Dialog.Trigger class=" font-bold text-blue-300 underline">See Code</Dialog.Trigger>
			<Dialog.Content class=" max-w-max">
				<Dialog.Header>
					<Dialog.Title>Component Code</Dialog.Title>
					<Dialog.Description>
						<Script {code} />
					</Dialog.Description>
				</Dialog.Header>
			</Dialog.Content>
		</Dialog.Root>
	</figcaption>
</figure>

<style>
</style>
