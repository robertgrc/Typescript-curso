
export const addNumbers = (a:number, b:number)=> a+b;
export const greet = (name:string)=>`hola ${name}`;
export const saveTheWorld = () =>{`El mundo esta salvado!!!`}

export let myFunction:(y:string)=>(string);

// myFunction =10;
// console.log(myFunction)

// myFunction = addNumbers
// console.log(myFunction(1,6))

myFunction = greet
console.log(myFunction("mensaje"))

// myFunction = saveTheWorld
// console.log(myFunction())