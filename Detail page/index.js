// const parameterString = window.location.search;
// const urlParams = new URLSearchParams(parameterString);
// const dataId = urlParams.get("id");



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
        for(let i=0; i<1; i++){
            if(data[i].id){
                card.innerHTML += `
               
               <div class="image">
                <div class="description">
                    <h1 style="display:flex;  justify-content: center; align-items: center; font-size:55px;">${data[i].title}</h1>
                    <h5 style="display:flex;  justify-content: center; align-items: center; font-size:20px; margin-top:30px; margin-bottom:50px;">${data[i].author}</h5>
                    <img style="display:flex;  justify-content: center; align-items: center; margin:auto; width:70%; height:800px;" src="${data[i].image}"></img>

                    <p style="font-size:25px;display:flex;  justify-content: center; align-items: center; margin:auto; width:80%; margin-top:50px;">
                    ${data[i].description} <br></br>
                    ${data[i].description} <br></br>
                    
                    
                    </p>
                    <p style="display:flex;  justify-content: center; align-items: center;" class="card-text"><audio controls>
                    <source src="${data[i].audio}">
                    </audio>
                    </p>
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









 