

    // Tipos
    export const batman:string = 'Bruce';
    export const superman:string = 'Clark';
    export const existe:boolean = false;
  
    // Tuplas
    export const parejaHeroes: [string, string]= [batman,superman];
    export const villano:[string, number,boolean] = ['Lex Lutor',5,true];
  
    
    // Arreglos
    export const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum superHeroe {
      ExtraFuerte=10,
      fuerte,
      rapido=9,
      swim
    }    
      export let mole:superHeroe = superHeroe.ExtraFuerte
      export let spider:superHeroe = superHeroe.fuerte
      export let flash:superHeroe = superHeroe.rapido
      export let acuaman:superHeroe = superHeroe.swim

    // Retorno de funciones
    export function activar_batiseñal():string{
      return 'activada';
    }
  
    export function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    export const poder: any = '100';
    export const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  

  
  