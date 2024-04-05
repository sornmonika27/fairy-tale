function fetchData(){
    fetch("https://fairy-tale-api-inky.vercel.app/api/fairytales")
    .then((response) => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        const card = document.getElementById('card');
        for(let i=0; i<data.length; i++){
            card.innerHTML += data[i].title;
        }
    })
    .catch((error) => {
        console.error("Fatch error:", error);
        return error;
    });

}
fetchData ();