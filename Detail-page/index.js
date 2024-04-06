let urlParams = new URLSearchParams(document.location.search);
const id = urlParams.get("id");

function fetchData(){
    fetch("https://fairy-tale-api-inky.vercel.app/api/fairytales")
    .then((response) => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        const card = document.getElementById('detailcontainer');
        for(let i=0; i<data.length; i++){
            if(data[i].id === id){
                card.innerHTML += `
                    <div class="img1">
                    <div class="name">
                        <h1 style="margin-left:40%;">${data[i].title}</h1>
                        <h5>${data[i].author}</h5>
                        <img src="${data[i].image}"
                        <div class="text-1">
                          <p style="font-size:22px;margin-top:80px;line-height: 1.8;margin-left:50px;">
                            ${data[i].description}<br> <br>
                            ${data[i].summary}
                          </p>
                          <p class="card-text"><audio controls>
                          <source src="${data[i].audio}">
                          </audio>
                        </p>
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
