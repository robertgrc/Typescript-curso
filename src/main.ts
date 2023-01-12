import './style.css'
import { setupCounter } from './counter'
import { Ngolo } from './basesNest/03-classes'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  
    <h1>hi ${Ngolo.name}</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
