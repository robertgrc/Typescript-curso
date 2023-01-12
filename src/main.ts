import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import {name} from "./bases/01-types"
import {callBatman} from "./bases/002-void"
import {numbers, villians, currentAudio} from "./bases/001-arrays"
import {nada} from "./bases/003-null-undefined"
import {batman,superman,existe, parejaHeroes, villano, mole, spider, flash, acuaman, pedir_ayuda} from "./bases/009-tarea"
import {activar_batiseñal} from "./bases/009-tarea"
import { activarAlarma, returnName } from './Funciones/funciones'
import { fullName } from './Funciones/ParametrosFunciones'
import { fullNameOpcional } from './Funciones/ParametrosOpcionales'
import { fullNameDefault } from './Funciones/ParametrosDefault'
import { nombreCompleto } from './Funciones/ParametroRest'
import { myFunction } from './Funciones/TypeFunction'
import { contar, llamarBatman, sumarDosNum, superHeroes, unirheroes } from './Funciones/TareaFunciones'
import { flashName } from './objetos/objects'
import { supermanName } from './objetos/tipoPersonalizado'
import { myCustomVariable } from './objetos/MultiplesObjetosPermitidos'
import { batimovil, bumblebee } from './objetos/tareaObjetos'
import { avengers, capitanazo, ironman, printAvenger } from './ES6/desestructuracionTS'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <hr/>
    <h2>${capitanazo}</h2>
    <hr/>
    <h2>${printAvenger(avengers)}</h2>
    <hr/>
    <h2>${avengers}</h2>
    <hr/>
    <h1>Tarea Objetos</h1>
    <h2>${batimovil}</h2>
    <h2>${myCustomVariable}</h2>
    <hr/>
    <h2>${flashName}</h2>
    <h2>${supermanName}</h2>
    <hr/>
    <h2>${unirheroes("julio","juan", "reico")}</h2>
    <hr/>
    <h2>${llamarBatman(true)}</h2>
    <hr/>
    <h2>${contar(["contact"])}</h2>
    <hr/>
    <h2>${sumarDosNum(14,7)}</h2>
    <hr/>
    <h2>${myFunction("nuevo mensaje")}</h2>
    <hr/>
    <h2>${nombreCompleto("rock","yah","shua")}</h2>
    <hr/>
    <h2>${fullNameDefault("tony","stark",true)}</h2>
    <hr/>
    <h2>${fullNameOpcional("robert")}</h2>
    <hr/>
    <h2>${fullName("robert","rodriguez")}</h2>

    <hr/>

    <h2>${returnName()}</h2>
    <h2>${activarAlarma()}</h2>

    <hr/>
    <h1>${name}</h1>
    <h2>${numbers}</h2>
    <h2>${villians}</h2>
    <h2>${console.log(callBatman())}</h2>
    <h2>${nada}</h2>
    <hr/>
    <h1>${batman}</h1>
    <h1>${superman}</h1>
    <h1>${existe}</h1>
    <h2>tupla ${parejaHeroes}</h2>
    <h2>tupla ${villano}</h2>
    <h2>enumeraciones ${mole}and ${spider}and${flash}y ${acuaman}}</h2>
    <h2>${(activar_batiseñal())}</h2>
    <h2>${(pedir_ayuda())}</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
