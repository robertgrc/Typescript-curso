
type Avengers ={
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
}


export const avengers:Avengers = {
    nick: "Samuel jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500.123123
}

// const {poder, vision} = avengers
// console.log(poder.toFixed(2), vision.toLocaleUpperCase())

export const printAvenger = ({ironman, nick, ...resto}:Avengers)=>{
    
    console.log(ironman, nick, resto)
}

printAvenger(avengers)