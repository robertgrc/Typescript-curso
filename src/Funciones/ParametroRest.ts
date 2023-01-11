export const nombreCompleto = (firstName: string, ...restArgs:string[]):string=>{
    return `${firstName} ${restArgs.join(" ")}`
}

export const roca = nombreCompleto("rock","josef","YAH");
console.log({roca})