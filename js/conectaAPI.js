async function listaVideos(){
    const conexao = await fetch("https://localhost:7148/Play");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi ={
    listaVideos,
}