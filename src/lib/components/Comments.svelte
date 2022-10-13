<script lang="ts">
	import { onMount } from 'svelte';

	let ref: HTMLDivElement;
	onMount(() => {
		const utterances = document.createElement('script');
		utterances.setAttribute('src', 'https://utteranc.es/client.js');
		utterances.setAttribute('repo', 'plushugh/radio-club');
		utterances.setAttribute('issue-term', 'pathname');
		utterances.setAttribute('theme', 'preferred-color-scheme');
		utterances.setAttribute('label', 'utterances');
		utterances.setAttribute('crossOrigin', 'anonymous');
		utterances.setAttribute('async', 'true');
		ref.appendChild(utterances);
	});
</script>

<div bind:this={ref} {...$$props} />
