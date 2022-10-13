<script>
	import FormOutlined from '@iconify-icons/ant-design/form-outlined';
	import Icon, { addIcon } from '@iconify/svelte/dist/OfflineIcon.svelte';
	import Logo from './Logo.svelte';

	addIcon('form', FormOutlined);
</script>

<header
	class="h-16 w-full sticky top-0 border-b border-slate-500 dark:border-slate-900 border-opacity-30 bg-white dark:bg-black bg-opacity-80 backdrop-blur-xl backdrop-saturate-200 z-50"
>
	<nav
		class="mx-auto 2xl:max-screen-xl xl:max-w-screen-lg lg:max-w-screen-md w-full pr-7 lg:pr-5 pl-2 lg:pl-0 flex h-full flex-row items-center justify-between"
	>
		<a href="/" class="h-full flex place-items-center"><Logo /></a>
		<ul class="md:flex hidden flex-row items-baseline gap-3">
			<li><a href="#">About</a></li>
			<li><a href="#">Nav2</a></li>
			<li><a href="#">Nav3</a></li>
		</ul>
		<button
			class="bg-purple-600 text-white rounded px-3 py-2 flex flex-row gap-2 place-items-center"
			>Join <Icon icon="form" /></button
		>
	</nav>
</header>
