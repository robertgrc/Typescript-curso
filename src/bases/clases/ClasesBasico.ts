
 export class Avenger {
  
    static avgAge: number=35;

    constructor(
        private name:string, 
        private team:string, 
        public realName?:string
        ){}
    //metodo
    bio(){
        return `${this.name} (${this.team})`
    }

}

export const antman: Avenger = new Avenger("Antman","Capitan","Scott Lang");
console.log(antman)
console.log(Avenger.avgAge)

console.log(antman.bio())
