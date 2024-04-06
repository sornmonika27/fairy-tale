const parameterString = window.location.search;
const urlParams = new URLSearchParams(parameterString);
// const id = urlParams.get("id");
const age = urlParams.get("age");


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
       
            if(age==="all") 
             for(let i=0; i<data.length; i++){
                {
            
                card.innerHTML += `
                <div class="card mb-3">
                <div class="row g-0">
                <div class="col-md-4">
                <img style="width:80%; height:300px; margin-bottom:20px; margin-left:20px;margin-top:20px;" src="${data[i].image}" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body" style="margin-top:20px;">
                    <a href="../../Detail-page/index.html?id=${data[i].id}" style="text-decoration: none; font-size: 26px;" class="card-title">${data[i].title}</a >
                    <p class="card-text" style="color:#F60E8C;font-size:18px; margin-top:15px;">${data[i].summary}</p>
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
        } else {
            for(let i=0; i<data.length; i++){
                if(data[i].age===age){
                
                    card.innerHTML += `
                    <div class="card mb-3">
                    <div class="row g-0">
                    <div class="col-md-4">
                    <img style="width:80%; height:300px; margin-bottom:20px; margin-left:20px;margin-top:20px;" src="${data[i].image}" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body" style="margin-top:20px;">
                        <a href="../../Detail-page/index.html?id=${data[i].id}" style="text-decoration: none; font-size: 25px;" class="card-title">${data[i].title}</a >
                        <p class="card-text" style="color:#F60E8C;font-size:18px; margin-top:15px;">${data[i].summary}</p>
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
        }
    }) 


    .catch((error) => {
        console.error('error:', error);
        
    });
    return fetchData;
};
fetchData ();




  