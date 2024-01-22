<script lang="ts">
	export let data;
	import {Card} from 'svelte-ux'
	
	
</script>

<main>
	<div class="grid grid-cols-2 m-2 gap-2">
		{#each data.notes as item}
			<a href="/{item._id}">
				<Card title={item.title} class='bg-cyan-300 p-2'>
				<p slot="contents">{item.body}</p>
			</Card>
			
		</a>
		{/each}
	</div>
</main>