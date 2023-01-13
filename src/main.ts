import { genericFunction, printObjet } from './genericsTypescript/generics'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>${printObjet(123123)}</h1>
    <h1>${printObjet(new Date())}</h1>
    <h1>${printObjet({a:1, b:2, c:3})}</h1>
    <h1>${printObjet([1,2,3,4,5,6,7])}</h1>
    <hr>
    <h1>${genericFunction(3.1416).toFixed(2)}</h1>
    


  </div>
`
// <h1>${genericFunction('hola mundo').toFixed(2)}</h1>