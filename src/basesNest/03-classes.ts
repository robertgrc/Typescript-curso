import axios from "axios"
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface"


export class Pokemon{
    
    get imageUrl():string{
        return `https://pokemon.com/${this.id}.jpg`
    }


    constructor(
        public readonly id:number, 
        public name:string,
       // public imageUrl:string
    ){}
    //Metodos son funciones dentro de las Clases
    convertToUpperCase(){
        console.log(`${this.name.toUpperCase()}!!!`)
    }
    duplicate(){
        console.log(`${this.name} ${this.name} `)
    }

    async getMoves(): Promise<Move[]>{
        
        const {data} = await axios.get<PokeapiResponse>("https://pokeapi.co/api/v2/pokemon/4")
        console.log(data.moves)

        return data.moves;
    }

}
export const Ngolo = new Pokemon(7, "Ngolo")

// console.log(Ngolo);
// Ngolo.convertToUpperCase()
// Ngolo.duplicate()
//console.log(Ngolo.getMoves())
Ngolo.getMoves();

