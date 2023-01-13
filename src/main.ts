import './style.css'
import { setupCounter } from './counter'
import { number } from './namespaces/validations'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${number}</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
