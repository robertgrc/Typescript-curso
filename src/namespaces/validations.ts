//import { Hero as SuperHero, Hero2, Hero3, Hero4 } from "./Hero";
//import * as HeroClases from "./Hero"


export const number=9

namespace Validations{

   export const validateText=(text:string):boolean=>{
       return( text.length>3)? true: false;
    }

   export const validateDate=( myDate:Date):boolean=>{

        return(isNaN(myDate.valueOf()))
                ?false
                :true
    }
}

console.log(Validations.validateText("julio"))

//Exports

// export const Hero= 123;
// export const ironman = new SuperHero("Ironman",1,55)
// console.log(ironman)

// const ironman = new HeroClases.Hero("Ironman",1,55)
// console.log(ironman)