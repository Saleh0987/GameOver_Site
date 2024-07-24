import { Category } from "./gamesModule.js"
import { Game } from "./gameDatailsModule.js"
window.exit = exit;

let gamesData = document.getElementById('gamesData');
let gameInfo = document.getElementById('gamesInfo');
let gameDetailsInfo = document.getElementById('details');
let gameAllSect = document.getElementById('gamesAll');
let searchContainer = document.getElementById('searchContainer');

const categories = document.getElementById('games');

(function () {
  displayGames('mmorpg')
})();

categories.addEventListener('click', function (e) {
  displayGames(e.target.id)
})


gamesData.addEventListener('click', function (e) {
  displayDetails(e.target.id)
})

async function displayGames(category) {

  let box = ``

  const cat = new Category(category);
  let games = await cat.getGames()
  for (let i = 0; i < 20; i++) {
   box += `
   
            <li>
              <div class="news-card" id="id${i}">

                <figure class="card-banner img-holder" style="--width: 600; --height: 400;">
                  <img  src=${games[i].thumbnail} id="${games[i].id}" width="600" height="400" loading="lazy"
                    alt="Innovative Business All Over The World." class="img-cover">
                </figure>

                <div class="card-content">

                  <a href="#" class="card-tag" id="${games[i].id}">${games[i].platform}</a>

                  <ul class="card-meta-list">

                    <li class="card-meta-item">

                      <span class="card-meta-text free" id="${games[i].id}">Free</span>

                    </li>

                    
                    <li class="card-meta-item">

                      <span  class="card-meta-text" id="${games[i].id}">${games[i].genre}</span>

                    </li>

                  </ul>

                  <h3 class="h3">
                    <a href="#" class="card-title" id="${games[i].id}">${games[i].title}</a>
                  </h3>

                  <p class="card-text" id="${games[i].id}">
                    ${games[i].short_description}
                  </p>

                  <a href="#" class="link has-before">Read More</a>

                </div>

              </div>
            </li>

`
  }

 gamesData.innerHTML = box;
}



async function displayDetails(gameid) {
  gameDetailsInfo.classList.remove('none');
  gameAllSect.classList.add('none');
  searchContainer.classList.add('none');

  const game = new Game(gameid)
  let gameDetails = await game.getGameDetails()

  let box = ``

  box += `

    <li>
                <div class="news-card-details">
                    <button class="btnClose" id="exit" onClick="exit()">
                      X
                    </button>
              
                  <figure class="card-banner img-holder" style="--width: 600; --height: 400;">
                    <h3>Details Game</h3>
                    <img src=${gameDetails.thumbnail} loading="lazy"
                      alt="Innovative Business All Over The World.">
                  </figure>
              
                  <div class="card-content">
              
              
                    <ul class="card-meta-list">
              
                      <li class="card-meta-item">
              
                        <span class="card-meta-text free">Free</span>
              
                      </li>
                      <li class="card-meta-item">
              
                        <span class="card-meta-text">Status: ${gameDetails.status}</span>
              
                      </li>
              
                      <li class="card-meta-item">
              
                        <span class="card-meta-text">Platform: ${gameDetails.platform}
              
                      </li>
              
                    </ul>
              
                    <h3 class="h3">
                      <a href="#" class="card-title">Title: ${gameDetails.title}</a>
                    </h3>
              
                    <p class="card-text">
                      ${gameDetails.description}
                    </p>
              
                    <a href="${gameDetails.freetogame_profile_url}" target="_blank" class="btn">Show Game</a>
                  </div>
              
                </div>
              </li>

`
  gameInfo.innerHTML = box;

}



function exit() {
  gameDetailsInfo.classList.add('none')
  gameAllSect.classList.remove('none')
  searchContainer.classList.remove('none');
}