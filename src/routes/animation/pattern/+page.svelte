<script lang="ts">
</script>

<div class="h-screen bg-chess-pattern bg-left-top bg-repeat"></div>

<style>
	div {
		animation: roll-pattern 16s infinite linear;
	}
	@keyframes roll-pattern {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 1280px 1280px;
		}
	}
</style>
