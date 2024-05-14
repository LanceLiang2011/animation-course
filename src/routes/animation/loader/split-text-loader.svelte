<div
	class="relative h-12 w-60 overflow-hidden rounded-md border-4 border-blue-900 text-center text-4xl font-bold uppercase leading-10"
>
	<span class=" absolute left-0 top-0 h-full w-full text-red-900">loading</span>
	<span class=" absolute left-0 top-0 h-full w-full text-blue-900">loading</span>
</div>

<style>
	span:first-of-type {
		clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
		animation: flyright 3.5s ease-in-out alternate infinite;
	}
	span:last-of-type {
		clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
		animation: flyleft 3.5s ease-in-out alternate infinite;
	}
	@keyframes flyright {
		from {
			transform: translateX(100%);
		}
		30% {
			transform: translateX(0%);
		}
		70% {
			transform: translateX(0%);
		}
		to {
			transform: translateX(-100%);
		}
	}
	@keyframes flyleft {
		from {
			transform: translateX(-100%);
		}
		30% {
			transform: translateX(0%);
		}
		70% {
			transform: translateX(0%);
		}
		to {
			transform: translateX(100%);
		}
	}
</style>
