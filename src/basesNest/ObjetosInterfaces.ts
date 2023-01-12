

export const pokemonIds = [1,20,30,34,66]

interface Pokemon{
    id:number;
    name:string;
    age:number;
}

export const bulbasur:Pokemon ={
    id: 0,
    name: "bulbasur",
    age: 2
}
export const Charmander:Pokemon ={
    id: 0,
    name: "charmander",
    age: 3
}

console.log(bulbasur)


//Arreglo de objetos que permite solo pokemons

export const pokemons:Pokemon[]=[];

pokemons.push(bulbasur,Charmander);
console.log(pokemons)