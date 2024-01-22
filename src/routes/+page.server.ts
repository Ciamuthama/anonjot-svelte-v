export async function load({ fetch }) {
try {
    const response = await fetch('https://anonjotapi.vercel.app/notes')
    const notes = await response.json()
    console.log(notes);

    
    return{
        notes
    }
} catch (error) {
    alert('An error occcuresd wile fetching your data')
}
  }