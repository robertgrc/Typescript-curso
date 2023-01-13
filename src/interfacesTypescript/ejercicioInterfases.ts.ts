// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

// interface Xmen{
//     name: string;
//     realName: string;
//     mutantPower( id:number):string;
// }

interface Auto{
  encender: boolean;
  velocidadMaxima: number;
  acelear():void;
}

const conducirBatimovil = ( auto:Auto):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason:Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface CiudadGoticaFn{
  (ciudadanos:string[]):number
}

const ciudadGotica:CiudadGoticaFn = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
// interface PersonaInterface{
// nombre:string,
// edad:number,
// sexo:string,
// estadoCivil:string,
// imprimirBio():void
// }

// class Persona implements PersonaInterface{

// public edad:number,
// public estadoCivil:string,
// public sexo  :string,
// public estadoCivil :string,
// imprimirBio(){
  
// }
// }