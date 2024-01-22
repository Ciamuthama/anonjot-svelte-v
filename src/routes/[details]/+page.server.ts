export async function load({ fetch, params }) {
	try {
		const response = await fetch(`https://anonjotapi.vercel.app/notes/${params.details}`, {
			method: 'GET'
		});
		const notes = await response.json();
		return {
			notes
		};
	} catch (error) {
		alert('An error occcuresd wile fetching your data');
	}
}
