export async function load({ fetch }) {
	let bodyContent = JSON.stringify({
		title: '',
		body: ''
	});

	let response = await fetch('https://anonjotapi.vercel.app/notes/new', {
		method: 'POS',
		body: bodyContent,
		headers: {
			'Content-Type': 'application/json'
		}
	});

	let data = await response.text();
	console.log(data);
}
