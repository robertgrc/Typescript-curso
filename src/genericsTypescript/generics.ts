

export const printObjet = (argument: any) =>{
    console.log(argument)
}

//Generico ver video 84 funciones Genericas

export function genericFunction<T>(argument: T):T{
    return(argument)
}

export const genericFunctionArrow = <T>(argument:T)=> argument





//Hacer estas lineas de codigo en otra pagina y exportar las funciones genericas
// export const name: string="Robert"
// export const apellido: string="Rodriguez"

// console.log( genericFunction(3.171618).toFixed(2))
// console.log( genericFunction(name).toUpperCase())
// console.log( genericFunctionArrow(apellido).toUpperCase())
// console.log( genericFunctionArrow(new Date()).getDate())