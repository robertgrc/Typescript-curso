


interface Client {
    name: string;
    age?: number;
    address: Address
    
}

interface Address{
    id: number;
    zip: string;
    city: string;
}

export const client:Client = {
    name: "Roco",
    age: 40,
    address:{
        id:125,
        zip:"KY2 SUD",
        city:"Ottawa"
    },
   
}

export const client2: Client ={
    name: "Melissa",
    age: 30,
    address:{
        id:77,
        zip:"cowabunga",
        city:"republica"

    },
   
}

console.log({client})
console.log({client2})