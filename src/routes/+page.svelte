<script lang="ts">
	import Comments from '$lib/components/Comments.svelte';
	import Meta from '$lib/components/Meta.svelte';
</script>

<Meta />

<main class="max-w-5xl mx-auto px-3 mt-20">
	<section class="relative">
		<div class="grid lg:grid-cols-2 grid-cols-1 z-10 gap-10">
			<div class="prose dark:prose-invert prose-slate mx-auto">
				<h1>A new way to radio</h1>
				<p>---</p>
			</div>
			<div class="grid place-items-center">
				<!-- <img src="/favicon.png" alt="icon" /> -->
			</div>
		</div>
		<div class="absolute inset-0 grid place-items-center grid-cols-2 -z-10">
			<!-- <div />
			<div
				class="bg-gradient-to-br w-[50%] h-[40%] from-lime-400 rounded-2xl blur-3xl opacity-70 to-green-600 translate-x-3 -translate-y-3"
			/> -->
		</div>
	</section>
	<div class="mx-auto text-6xl font-black text-center my-12">UNDER CONSTRUCTION</div>
	<Comments class="mx-auto" />
</main>
