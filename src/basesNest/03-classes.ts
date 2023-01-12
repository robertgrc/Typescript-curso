


export class Pokemon{
    
    constructor(
        public readonly id:number, 
        public name:string){}
}

export const Ngolo = new Pokemon(1, "Ngolo")

Ngolo.id = 1;
Ngolo.name = "Ngolito"