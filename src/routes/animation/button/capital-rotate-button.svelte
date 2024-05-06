<script lang="ts">
	export let href: string;

	function splitWord(node: HTMLAnchorElement | HTMLButtonElement) {
		const word = node.innerText;
		const firstLetter = word[0];
		const restLetter = word.slice(1);
		// Do not make a new span with document.createElement here,
		// bucause Svelte can't add scoped style in elements added with JS.
		const span = node.querySelector('span');
		if (!span) return;
		span.setAttribute('style', `--letter:"${firstLetter}"`);
		span.innerText = firstLetter;
		node.innerHTML = '';
		node.appendChild(span);
		node.innerHTML += restLetter;
	}
</script>

<a {...$$restProps} {href} use:splitWord>
	<span></span>
	<slot />
</a>

<style>
	a {
		--primary: black;
		--secondary: white;
		cursor: pointer;
		color: var(--primary);
		border: 3px solid var(--primary);
		font-size: 24px;
		padding: 20px 60px;
		position: relative;
		transition: all 300ms;
		/* This is for view transition. You don't need this in your code */
		view-transition-name: capital-rotate;
	}

	a::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: var(--primary);
		opacity: 0;
		z-index: -1;
		transition: all 800ms;
	}

	a:hover {
		color: var(--secondary);
	}

	a:hover::before {
		opacity: 1;
		transform: rotate(15deg);
	}
	span {
		color: transparent;
		position: relative;
	}
	span::before {
		content: var(--letter);
		position: absolute;
		color: var(--primary);
		transform-origin: right;
		transition: all 400ms;
	}
	a:hover span::before {
		color: var(--secondary);
		transform: scale(4) rotate(360deg);
	}
</style>
