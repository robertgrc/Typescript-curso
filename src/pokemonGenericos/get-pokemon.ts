import axios from "axios"


export const getPokemon = async(pokemonId: number)=>{
  
   const  resp = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    console.log(resp)
    return 1;
}