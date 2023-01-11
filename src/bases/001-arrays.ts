export const numbers:number[]=[1,2,3,4,5,6,7,8,9,10];
numbers.push(11)

export const villians:string[] = ["duende verde", "doom", "ghostrider", "blackheart"]

villians.forEach(v=>console.log(v.toUpperCase()))


export enum AudioLevel{
    min,
    medium,
    max
}
export let currentAudio = AudioLevel.medium;
console.log(currentAudio)
console.log(AudioLevel)