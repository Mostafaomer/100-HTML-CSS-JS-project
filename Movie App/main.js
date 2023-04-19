const KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const main=document.querySelector("main")
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=3`;
async function getFilms() {
    let res=await fetch(API_URL)
    let data=await res.json()
    let films=data.results
    console.log(films);
    films.forEach(element => {
        let content=document.createElement("div")
        content.className="content"
        let image=document.createElement("div")
        image.className="image"
        image.style.backgroundImage=`url("https://image.tmdb.org/t/p/w1280${ element.poster_path}")`
        let info=document.createElement("div")
        info.className="info"
        let h3=document.createElement("span")
        h3.textContent=element.title
        let span2=document.createElement("span")
        span2.textContent=element.vote_average
        info.appendChild(h3)
        info.appendChild(span2)
        content.appendChild(image)
        content.appendChild(info)
        let overview=document.createElement("div")
        overview.className="overview"
        overview.textContent=element.overview
        content.appendChild(overview)
        main.appendChild(content)
    });
}
getFilms()