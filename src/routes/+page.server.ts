export async function load({ fetch }) {
try {
    const response = await fetch('https://anonjotapi.vercel.app/notes',{
        method: 'GET',
    })
    const notes = await response.json()
    return{
        notes
    }
} catch (error) {
    alert('An error occcuresd wile fetching your data')
}
  }