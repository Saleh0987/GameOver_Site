export class Category {

    constructor(gamesCategory) {
        this.category = gamesCategory;
    }


    getAPIReady() {
        return `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`
    }

    async getGames() {
        const loading = document.querySelector(".loading");
        loading.classList.remove("none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '22f8faeb51msh1b05388d5888e3ep16f5bbjsn14dd7c29ad89',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };


        const response = await fetch(this.getAPIReady(), options)
        const result = await response.json();
        loading.classList.add("none");


        return result;
    }

}


