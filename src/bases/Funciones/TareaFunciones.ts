// Funciones Básicas
export function sumarDosNum( a:number, b:number ):number{
  return a + b;
}

export const contar = ( heroes:string[]):number => {
  return heroes.length;
}

export const superHeroes:string[]= ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
export const llamarBatman = ( llamar:boolean=true ):void => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}
llamarBatman();

// Rest?
export const unirheroes = ( ...personas:string[] ):string => {
  return personas.join(",")}
//   return personas.join(", ");
console.log(unirheroes("julio","juan", "reico"))

// Tipo funcion
export const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo:string[] )=> {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
export let noHaceNadaTampoco:(n:number, s:string, b:boolean, a:string[])=>void;
noHaceNadaTampoco = noHaceNada
