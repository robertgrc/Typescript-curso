

import { getPokemon } from './pokemonGenericos/get-pokemon'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${console.log(getPokemon(14))}</h1>
    
   

  </div>
`
// <h1>${genericFunction('hola mundo').toFixed(2)}</h1>