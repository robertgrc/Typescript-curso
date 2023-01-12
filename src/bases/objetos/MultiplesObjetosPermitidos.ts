type Hero ={
    name:string;
    age?:number;
    powers:string[];
    getNombre?:()=>string;
}

export let myCustomVariable: (string|number|Hero)="Ernesto";
console.log(myCustomVariable)

myCustomVariable=20
console.log(typeof myCustomVariable)

myCustomVariable={
    name:"bruce",
    age: 40,
    powers:["fuerza","inteligencia"]
}

console.log(typeof myCustomVariable)