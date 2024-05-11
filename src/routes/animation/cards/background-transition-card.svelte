<script lang="ts">
</script>

<article class="relative rounded-md p-10 shadow-lg">
	<slot name="title" class="mb-3 text-2xl font-bold" />
	<slot name="content" class="" />
	<a href="#">See Code</a>
</article>

<style lang="postcss">
	article :global([slot='title']) {
	}

	article :global([slot='content']) {
	}

	a {
	}
</style>
