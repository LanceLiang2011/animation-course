<script lang="ts">
	import { PhoneCall } from 'lucide-svelte';
</script>

<div
	class="relative flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-green-600 text-white"
>
	<PhoneCall size={48} fill="white" />
</div>

<style lang="postcss">
	div::before,
	div::after {
		content: '';
		@apply absolute -inset-4 animate-[pulse-ring_1500ms_infinite_linear] rounded-full border-2 border-green-600;
	}

	div::after {
		animation-delay: 500ms;
	}

	@keyframes pulse-ring {
		0% {
			transform: scale(0.5);
			opacity: 0;
		}
		50% {
			transform: scale(1);
			opacity: 1;
		}
		100% {
			transform: scale(1.1);
			opacity: 0;
		}
	}
</style>
