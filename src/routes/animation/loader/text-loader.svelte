<p
	class="relative overflow-hidden font-mono text-5xl uppercase tracking-widest text-gray-300
  before:absolute before:left-0 before:top-0 before:h-full before:w-full before:overflow-hidden before:border-r-4 before:border-orange-400
  before:text-orange-400 before:content-['loading...']"
>
	Loading...
</p>

<style lang="postcss">
	p::before {
		animation: print 2000ms ease-in-out alternate infinite;
	}
	@keyframes print {
		from {
			width: 0%;
		}
		to {
			width: 100%;
		}
	}
</style>
