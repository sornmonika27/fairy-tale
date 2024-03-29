function fetchData(){
    fetch(" https://fairy-tale-api-inky.vercel.app/api/fairytales")
    .then((respone) => {
        if (!respone.ok){
            throw new Error("Network respone was not ok");
        }
        return respone.json();

    })
   
    .then((data) => {
        let card = document.getElementById('card');
        for(let i=0; i<data.length; i++){
            card.innerHTML += data[i].title;
        }
    })

    .catch((error) => {
      console.error("Fatch error:", error);
        return error;
    });
}
fetchData();