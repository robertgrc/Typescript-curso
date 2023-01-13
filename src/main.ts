import './style.css'
import { setupCounter } from './counter'
import { charmander } from './basesNest/04-injection'
import { antman } from './bases/clases/ClasesBasico'
//import { Ngolo } from './basesNest/03-classes'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  
    <h1>hello ${charmander.name}</h1>
    <h1>hello ${console.log(antman)}</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
