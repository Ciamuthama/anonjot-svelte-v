export async function load({ fetch, params }) {
	try {
	  const response = await fetch(`https://anonjotapi.vercel.app/notes/${params.details}`, {
		method: 'GET'
	  });
  
	  if (!response.ok) {
		throw new Error(`Failed to fetch notes: ${response.statusText}`);
	  }
  
	  const notes = await response.json();
  
	  return {
		notes
	  };
	} catch (error) {
	  console.error('An error occurred while fetching your data:', error);
	  throw error;
	}
  }
  
 

  