<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.postcss';
</script>

<Header />
<main class="font-serif">
	<slot />
</main>
