import './style.css'
import { setupCounter } from './counter'
import { wolverine } from './bases/clases/private-constructor'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${wolverine}</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
