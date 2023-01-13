import { genericFunctionArrow } from "../generics"
import { Hero } from "./hero"
import { Villain } from "./villain"




export const deadpool = {
    name:"Deadpool",
    realName:"wade winston wilson",
    dangerLevel: 130
}

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel)