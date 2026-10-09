import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { PokemonPage } from './03-examples/PokemonPage'
import { FocusScreen } from './04-useRef/FocusScreen'
// import { TrafficLight } from './01-useState/TrafficLight'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
// import { HooksApp } from './hooksApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    <FocusScreen></FocusScreen>
  </StrictMode>,
)
