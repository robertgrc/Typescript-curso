
export class Avenger{
    constructor(
        public name: string,
        public realName: string,
    ){
        console.log("Constructor Avenger llamado")
    }
    protected getFullname(){
        return`${this.name} ${this.realName}`
    }
}

export class Xmen extends Avenger{
    constructor(      
        name: string,
        realName: string,
        public isMutant: boolean     
    ){
        super(name, realName)
        console.log("Constructor Xmen llamado")
    }

    getFullNameDesdeXmen(){

    }

}

export const wolverine = new Xmen("wolverine","Logan", true)
console.log(wolverine)

wolverine.getFullNameDesdeXmen();