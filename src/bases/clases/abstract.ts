
export abstract class Mutante{
    constructor(
        public name: string,
        public realName: string
    ){}
}

class Xmen extends Mutante{

    salvarMundo(){
        console.log("Mundo a salvo")
    }
}
class Villian extends Mutante{

    conquistarMundo(){
        console.log("Mundo conquistado")
    }
}

// export const wolverine:Mutante = new Mutante("Wolverine", "Logan")
// console.log(wolverine)

export const wolverine = new Xmen("Wolverine", "Logan")
export const magneto = new Villian("Magneto","Magnus")

// console.log(wolverine.salvarMundo())
// console.log(magneto.conquistarMundo())

const printName = (character : Mutante) =>{
    console.log(character.realName);
}

printName( wolverine);
