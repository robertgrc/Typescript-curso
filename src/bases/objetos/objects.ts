//
export let flashName:{name:string, age?:number, powers:string[], getNombre?:()=>string}={
    name:"Barry Allen",
    age: 24,
    powers:['Super velocidad','viajar en el tiempos']
}

flashName ={
    name: 'Clark Kent',
    //age:60,
    powers:['Super fuerza','hielo'],
    getNombre(){
        return this.name;
    }
}

console.log(flashName)