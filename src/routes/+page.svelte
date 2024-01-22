<script lang="ts">
	export let data;
	import { Card } from 'svelte-ux';
</script>

<main>
	<div class="relative grid grid-cols-2 gap-4">
		{#each data.notes as note}
			<a href="/{note._id}" class="max-w-md h-auto">
				<Card title={note.title} class="bg-transparent p-2 shadow-none">
					<p slot="contents">{note.body}</p>
				</Card>
			</a>
		{/each}
	</div>
</main>
