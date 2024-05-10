<script>
	import pixelKnight from '$lib/assets/images/pixel_knight.png';
	import * as Dialog from '$lib/components/ui/dialog';

	const code = `
  <figure class="group relative text-white">
	<img
		class="
    duration-00
    w-full transition-transform group-hover:scale-0"
		src={pixelKnight}
		alt="A knight in the wood, pixel art"
	/>
	<figcaption
		class="
    absolute inset-0 flex rotate-180 scale-0
    flex-col items-center justify-evenly bg-green-900/80
    transition-transform duration-200
    group-hover:rotate-0 group-hover:scale-100"
	>
		<h2 
    class="w-full bg-green-200 py-2 text-center 
    text-xl font-bold text-green-950">
			Knight in the wood
		</h2>
		<p>
			Pixel art by 
      <a 
      class="underline" href="https://twitter.com/eCherryArt" target="_blank"
				>@echerry</a
			>
		</p>
    <Dialog.Trigger class=" font-bold text-green-300 underline">
      See Code
      </Dialog.Trigger>
	</figcaption>
</figure>`;
</script>

<figure class="group relative text-white">
	<img
		class="
    duration-00
    w-full transition-transform group-hover:scale-0"
		src={pixelKnight}
		alt="A knight in the wood, pixel art"
	/>
	<figcaption
		class="
    absolute inset-0 flex rotate-180 scale-0
    flex-col items-center justify-evenly bg-green-900/80
    transition-transform duration-200
    group-hover:rotate-0 group-hover:scale-100"
	>
		<h2 class="w-full bg-green-200 py-2 text-center text-xl font-bold text-green-950">
			Knight in the wood
		</h2>
		<p>
			Pixel art by
			<a class="underline" href="https://twitter.com/eCherryArt" target="_blank">@echerry</a>
		</p>
		<Dialog.Root>
			<Dialog.Trigger class=" font-bold text-green-300 underline">See Code</Dialog.Trigger>
			<Dialog.Content class=" max-w-max">
				<Dialog.Header>
					<Dialog.Title>Component Code</Dialog.Title>
					<Dialog.Description>
						<pre class="mt-2 overflow-auto rounded-md bg-slate-950 p-4">
              <code class="text-white">{code}</code>
            </pre>
					</Dialog.Description>
				</Dialog.Header>
			</Dialog.Content>
		</Dialog.Root>
	</figcaption>
</figure>
