<script lang="ts">
	import {Axios} from 'axios'
	export let data;
	let note = data.notes;

	

	const handleDeleteNotes = async (id) => {
		const res = await Axios.delete(`http://localhost:3000/api/notes/${id}`);
		console.log(res);
		window.location.reload();
		
	}

	
</script>

<main>
	<div class="flex flex-col w-1/2 mx-auto">
		<form class="flex flex-col w-full">
			<input
				type="text"
				placeholder="Title"
				bind:value={note.title}
				class="input w-full bg-neutral-100/30 mb-3"
			/>
			<textarea
				class="w-full h-1/2 p-2 border bg-neutral-100/30 rounded-md"
				rows="10"
				placeholder="Add a note...">{note.body}</textarea
			>
			<!-- <button class="btn btn-primary" on:click={note.handlePatchNotes}> Update Note</button>-->
			<button class="btn btn-danger" on:click={()=>{handleDeleteNotes(note._id)}}> Delete Note</button>
		</form>
	</div>
</main>
