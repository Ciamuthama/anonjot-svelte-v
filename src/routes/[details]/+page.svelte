<script>
	export let data;
	let note = data.notes;
</script>

<main>
	<div>
		<h2>{note._id}</h2>
		<p>{note.title}</p>
		<p>{note.body}</p>
	</div>
</main>
