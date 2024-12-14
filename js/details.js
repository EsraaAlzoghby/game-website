const queryString = location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

getDetails(id);

async function getDetails(id) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2d5a5a5a9dmsh15179b3230e1354p1d665fjsn1fd6f358f12d',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, requestOptions);
    const response = await api.json();
    displayData(response);
    console.log(response); 
};
 
 function displayData(data) {
    let gameDetailsHTML = `
    <div class="container py-5 text-light">
        <div class="details-header d-flex justify-content-between">
          <h3>Details Game</h3>
          <div class="icon" id="close">
          <a href="./index.html" style="color:white;"><i class="fa-solid fa-xmark fa-2x d-inline-block" ></i></a>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 mb-2 left">
            <div class="img">
              <img src="${data.thumbnail}" class="w-100" alt="">
            </div>
          </div>
          <div class="col-md-7 right">
            <h4>Title: ${data.title}</h4>
            <p>Category: <span class="badge text-bg-danger p-2"> ${data.genre}</span></p>
            <p>Platform: <span class="badge text-bg-danger p-2"> ${data.platform}</span></p>
            <p>Status: <span class="badge text-bg-danger p-2"> ${data.status}</span> </p>
            <p class="small">${data.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
          </div>
        </div>
      </div>
    `;
 document.getElementById("details").innerHTML= gameDetailsHTML;
}