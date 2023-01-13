import './style.css'
import { setupCounter } from './counter'
import { flashName } from './interfacesTypescript/basicas'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${flashName.name}</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
