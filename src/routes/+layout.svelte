<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import '../app.postcss';
</script>

<Header />
<div class="font-serif">
	<slot />
</div>
