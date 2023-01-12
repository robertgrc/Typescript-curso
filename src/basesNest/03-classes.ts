


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

}
export const Ngolo = new Pokemon(7, "Ngolo")

console.log(Ngolo);

Ngolo.convertToUpperCase()
Ngolo.duplicate()
