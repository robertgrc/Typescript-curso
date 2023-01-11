
export const fullNameOpcional=(firstName:string, lastName?:string)=>{
  
    return `${firstName} ${lastName||"no last name"}`
}

export const nombreOpc = fullNameOpcional("robert");
console.log({nombreOpc})