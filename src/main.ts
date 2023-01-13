import { deadpool } from './genericsTypescript/funcionGenerica'
import { genericFunction, printObjet } from './genericsTypescript/generics'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${console.log(deadpool.dangerLevel)}</h1>
   
    


  </div>
`
// <h1>${genericFunction('hola mundo').toFixed(2)}</h1>