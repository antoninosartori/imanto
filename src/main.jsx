import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Loading } from './components/Loading'
/* import {App} from './App' */
const LazyApp = React.lazy(() => import('./App'))
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      { 
        <React.Suspense
        fallback={ < Loading /> } >
          < LazyApp />
        </React.Suspense>
      }
    </BrowserRouter>
  </React.StrictMode>
)
