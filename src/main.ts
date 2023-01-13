import './style.css'
import { setupCounter } from './counter'
import { flashName } from './interfacesTypescript/basicas'
import { client } from './interfacesTypescript/complejas'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${client.name}</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
