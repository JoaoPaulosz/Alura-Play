import { conectaApi } from "./conectaAPI"

const list = document.querySelector("[data-lista]")

function criaCadVideos(videos){
    const video = document.createElement("li")
    video.className = "video__item"
    video.innerHTML += 
    `
    <iframe width="100%" height="72%" src="${videos.url}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="./img/logo.png" alt="logo canal alura">
        <h3>${videos.titulo}</h3>
        <p>${videos.descricao}</p>
    </div>
    `
}

async function consomeApi(){
    const listaVideos = await conectaApi.listaVideos;
    listaVideos.forEach(video => {
        criaCadVideos(video)
    });
}