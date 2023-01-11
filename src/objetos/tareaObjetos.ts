import { villano } from '../bases/009-tarea';

// Objetos
type superCoche ={
  carroceria:string;
  modelo:string;
  antibalas:boolean;
  pasajeros:number;
  disparar?:()=>void;
}

export const batimovil:superCoche = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};
console.log({batimovil})


export const bumblebee:superCoche = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};
console.log({bumblebee})

// Villanos debe de ser un arreglo de objetos personalizados
type villano={
  nombre:string;
  edad?:number;
  mutante:boolean;
}

export const villanos:villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

console.log(villanos)

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Charles={
  poder:string;
  estatura:number;
  
}


export const charles:Charles = {
  poder:"psiquico",
  estatura: 1.78
};

type Apocalipsis={
  lider:boolean;
  miembros:string[]
}

export const apocalipsis:Apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

console.log(charles)
console.log(apocalipsis)

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
export let mystique:(Charles|Apocalipsis);

mystique = charles;
console.log(mystique)
mystique = apocalipsis;
console.log(mystique)
