import './style.css'
import { setupCounter } from './counter'
import { bulbasur, Charmander, pokemons} from './basesNest/ObjetosInterfaces'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${pokemons}</h1>
    <h1>${bulbasur.name} ${Charmander.name}</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
