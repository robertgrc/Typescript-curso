import { fullName } from '../Funciones/ParametrosFunciones';

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

    get fullName(){
        return `${this.name}-${this.realName}`
    }

    set fullName(name:string){

        if(name.length<3){
            throw new Error("El nombre debe ser mayor de 3 letras")
        }

        this.name = name
    }

    getFullNameDesdeXmen(){
        console.log(super.getFullname())
    }

}

export const wolverine = new Xmen("wolverine","Logan", true)
wolverine.fullName = "Robert"
console.log(wolverine.fullName)

