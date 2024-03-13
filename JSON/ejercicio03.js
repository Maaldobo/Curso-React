function getPoke(msn) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + msn; // Endpoint
    console.log(url)
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
}

let pokemon = "ditto"
getPoke(pokemon)
