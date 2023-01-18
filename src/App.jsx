import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AnimatedRoutes from './AnimatedRoutes'
import { Header } from './components/Header'
import { Loading } from './components/Loading'

/* const LazyHome = React.lazy(() => import('./pages/Home'))
const LazyAbout = React.lazy(() => import('./pages/About'))
const LazyWorks = React.lazy(() => import('./pages/Works'))
const LazyTalk = React.lazy(() => import('./pages/Talk'))
const LazyProjectDetails = React.lazy(() => import('./pages/ProjectDetails'))
const LazyNotFound = React.lazy(() => import('./pages/NotFound')) */


function App() {
  return (
    <div className="App">

      < Header />

      < AnimatedRoutes />

    </div>
  )
}

export default App
