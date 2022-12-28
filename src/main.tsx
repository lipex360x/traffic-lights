import React from 'react'
import ReactDOM from 'react-dom/client'
import { TrafficLight } from './components/TrafficLight'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TrafficLight />
  </React.StrictMode>
)
