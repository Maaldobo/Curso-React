const ID_CONTENEDOR = document.getElementById("pokemonTableBody");
const URL = "https://pokeapi.co/api/v2/pokemon/"
function getPoke() {
    

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            insert(data.results)
        })
        .catch((error) => {
            console.error('Error recopilando Pokémon:', error)
        });
}

function insert(pokes) {
    pokes.forEach((element) => {
        const row = document.createElement("tr")
        const name = document.createElement("td")
        const urlPokemon = document.createElement("td")

        name.innerHTML = element.name
        urlPokemon.innerHTML = URL + element.name+"/"

        row.appendChild(name)
        row.appendChild(urlPokemon)
        ID_CONTENEDOR.appendChild(row)
    })
}

getPoke()
