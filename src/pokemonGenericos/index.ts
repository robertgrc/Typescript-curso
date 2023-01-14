import { getPokemon } from "./get-pokemon";



getPokemon(7)
    .then(resp =>console.log(resp.name))
    .catch( error=> console.log(error))
    .finally(()=>console.log("Fin de getPokemon"))