<script lang="ts">
	import gsap from 'gsap';
	let tween: gsap.core.Tween;
	let text: HTMLElement;
	function animate(node: HTMLElement) {
		gsap.set(node, { transformOrigin: '0% 0%' });
		gsap.to(node, { duration: 2, x: 200 });
		return {
			destroy() {}
		};
	}
	async function moveback(event: MouseEvent) {
		const tl = gsap.timeline();
		tl.to(event.currentTarget, { duration: 2, x: 0, opacity: 0.3, rotation: 180 });
		tl.addLabel('kickStart', '+=1');
		tl.to(
			event.currentTarget,
			{ duration: 1, x: 200, opacity: 1, rotation: 0, ease: 'elastic' },
			'kickStart'
		);
	}

	function groupAnimate(node: HTMLElement) {
		tween = gsap.to(node.children, {
			duration: 2,
			x: 300,
			y: 'random(-200, 200)',
			stagger: 0.3
		});
	}

	function yoyo(node: HTMLElement) {
		gsap.to(node, { duration: 1, yoyo: true, repeat: -1, x: 240, ease: 'back.out(4)' });
	}
</script>

<div use:animate on:click={moveback} class="h-40 w-40 rounded-md bg-green-500"></div>

<div use:groupAnimate>
	<div class="h-32 w-32 rounded-md bg-red-500"></div>
	<div class="h-32 w-32 rounded-md bg-green-500"></div>
	<div class="h-32 w-32 rounded-md bg-blue-500"></div>
	<div class="h-32 w-32 rounded-md bg-yellow-500"></div>
</div>

<button
	on:click={() => {
		tween.pause();
	}}>Pause</button
>
<button
	on:click={() => {
		tween.play();
	}}>Play</button
>

<button
	on:click={() => {
		tween.reverse();
	}}>Reverse</button
>

<button
	on:click={() => {
		tween.timeScale(0.1);
	}}>Slow</button
>

<div use:yoyo class="h-72 w-72 rounded-md bg-yellow-500"></div>

<style lang="postcss">
	button {
		@apply rounded-md bg-purple-300 px-8 py-6;
	}
</style>
