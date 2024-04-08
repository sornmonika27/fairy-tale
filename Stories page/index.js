function fetchData(){
    fetch("https://fairy-tale-api-inky.vercel.app/api/fairytales")
    .then((response) => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        const card = document.getElementById('container');
        for(let i=0; i<3; i++){
            if(data[i].id){
                card.innerHTML += `
                <div class="card mb-3" style="max-width:100%;margin-top:50px;">
                <div class="row g-0">
                <div class="col-md-4">
                <img style="width:90%; height:300px; margin-bottom:20px; margin-left:20px;margin-top:20px; width:450px; hieght:300px;" src="${data[i].image}" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body" style="margin-top:20px;">
                    <h5 class="card-title">${data[i].title}</h5>
                    <p class="card-text">${data[i].summary}</p>
                    <p class="author">${data[i].author}</p>
                    <p class="created_at">${data[i].created_at}</p>
                    <p class="card-text"><audio controls>
                    <source src="${data[i].audio}">
                    </audio>
                    </p>
                </div>
                </div>
                </div>
                </div>
                
                `;   
            }
            
        }
    })
    .catch((error) => {
        console.error('error:', error);
        
    });
    return fetchData;
};
fetchData ();



