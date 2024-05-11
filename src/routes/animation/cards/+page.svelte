<script lang="ts">
	import BackgroundTransitionCard from './background-transition-card.svelte';
</script>

<svelte:head>
	<title>Card Transition</title>
</svelte:head>

<h1 class="title mb-8">Card Transitions</h1>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
	<BackgroundTransitionCard>
		<svelte:fragment slot="title" let:class={_class}>
			<h1 class={_class}>Background Transition</h1>
		</svelte:fragment>
		<svelte:fragment slot="content" let:class={_class}>
			<p class={_class}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat natus deleniti. Nulla
				earum commodi veniam, architecto esse soluta, reiciendis non quis animi doloribus error,
				facere pariatur in quod dicta.
			</p>
		</svelte:fragment>
	</BackgroundTransitionCard>
</div>
