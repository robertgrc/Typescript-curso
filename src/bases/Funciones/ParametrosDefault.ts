export const fullNameDefault=(firstName:string, lastName?:string, upper:boolean=false )=>{
  if(upper){
      return `${firstName} ${lastName||"---"}`.toUpperCase();
  } else{
     return `${firstName} ${lastName||"---"}`
  }

}

export const nombreOpc = fullNameDefault("tony","stark",true);
console.log({nombreOpc})