import './style.css'
import { setupCounter } from './counter'
import { magneto, wolverine } from './bases/clases/abstract'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${wolverine.name} ${magneto.name}</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
