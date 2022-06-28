const pokeList = {
    "id": id,
    "name": name,
    "urlPicture": urlPicture
}


console.log(getPokeList().results.map(pokeName => {
    return pokeName.url.split("/")[6];
}));