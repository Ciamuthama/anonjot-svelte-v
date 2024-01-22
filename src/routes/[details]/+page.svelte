<script lang="ts">
	export let data;
	let note = data.notes;
</script>

<main>
	<div class="flex flex-col w-1/2 mx-auto">
		<form class="flex flex-col w-full">
		<input type="text" placeholder='Title' bind:value={note.title} class="input w-full bg-neutral-100/30 mb-3" />
		<textarea class="w-full h-1/2 p-2 border bg-neutral-100/30 rounded-md " rows="10" placeholder="Add a note...">{note.body}</textarea>
		</form>
	</div>
</main>
