
export const fullName=(firstName:string, lastName:string)=>{
    if (!firstName){
        throw new Error("Nombre Requerido")
    }
    return `${firstName} ${lastName}`
}

export const nombre = fullName("robert","rodriguez");
console.log({nombre})