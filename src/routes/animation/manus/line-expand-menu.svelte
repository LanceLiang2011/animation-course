<script lang="ts">
	import type { Link } from './manutypes';
	export let links: Link[];
</script>

<nav>
	<ul class="flex gap-8 p-4 text-2xl tracking-wider">
		{#each links as link}
			<li
				class="relative overflow-hidden transition-colors hover:text-white hover:delay-200 hover:duration-500"
			>
				<a data-text={link.name} href={link.anchor}>{link.name}</a>
			</li>
		{/each}
		<li
			class="relative overflow-hidden transition-colors hover:text-white hover:delay-200 hover:duration-500"
		>
			<a
				target="_blank"
				href={'https://github.com/LanceLiang2011/animation-course/blob/master/src/routes/animation/manus/line-expand-menu.svelte'}
				>Code</a
			>
		</li>
	</ul>
</nav>

<style lang="postcss">
	li::before {
		content: '';
		position: absolute;
		height: 0.3rem;
		width: 100%;
		background-color: red;
		top: 50%;
		left: 0;
		z-index: -1;
		transform: translateX(-100%);
	}

	li:hover::before {
		animation: line 1000ms both;
	}

	@keyframes line {
		0% {
			transform: translateX(-100%) scaleY(1);
		}
		40% {
			transform: translateX(0%) scaleY(1);
		}
		100% {
			transform: translateX(0%) scaleY(20);
		}
	}
</style>
