


interface Hero{
    name:string;
    age?:number;
    powers:string[];
    getNombre?:()=>string;
}


export let flashName: Hero ={
    name:"Barry Allen",
    age: 24,
    powers:['Super velocidad','viajar en el tiempos']
}
export let supermanName: Hero ={
    name:"Barry Allen",
    age: 24,
    powers:['Super velocidad','viajar en el tiempos'],
    getNombre(){
        return this.name
    }
}

console.log({flashName})
console.log({supermanName})

