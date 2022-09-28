<script lang="ts">
	export let author = 'BRS Radio Club Authors';
	export let keywords = [''];
	export let title = 'BRS Radio Club';
	export let description = 'Amateur Radio Club based in BRS';

	let defaultKWs = ['radio', 'HAM', 'club', 'amateur-radio'];
</script>

<svelte:head>
	<meta name="author" content={author} />
	<meta
		name="keywords"
		content={keywords ? [...defaultKWs, ...keywords].join(', ') : defaultKWs.join(', ')}
	/>
	<meta name="description" content={description} />
	<title>{title}</title>
</svelte:head>
