export async function load({ fetch }) {
	
       
       let bodyContent = JSON.stringify({
        title:"Breaking free",
         body:"Breaking f "
       }
       );
       
       let response = await fetch("https://anonjotapi.vercel.app/notes/new", { 
         method: "POST",
         body: bodyContent,
        headers: {
            "Content-Type": "application/json",
        }
       });
       
       let data = await response.text();
       console.log(data);
       

	
}
