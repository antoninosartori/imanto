import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'


const LazyHome = React.lazy(() => import('./pages/Home'))
const LazyAbout = React.lazy(() => import('./pages/About'))
const LazyWorks = React.lazy(() => import('./pages/Works'))
const LazyTalk = React.lazy(() => import('./pages/Talk'))
const LazyProjectDetails = React.lazy(() => import('./pages/ProjectDetails'))
const LazyNotFound = React.lazy(() => import('./pages/NotFound'))

import { Loading } from './components/Loading'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes
                location={location} key={location.pathname} >

                < Route path='/' element=
                { 
                    <React.Suspense
                    fallback={ < Loading /> } >
                    < LazyHome />
                    </React.Suspense>
                } />

                < Route path='/about' element=
                { 
                    < React.Suspense
                    fallback={ < Loading /> } >
                        < LazyAbout />
                    </ React.Suspense> 
                } />
                
                < Route path='/works' element=
                { 
                    < React.Suspense
                    fallback={ < Loading /> } >
                        < LazyWorks />
                    </ React.Suspense> 
                } />

                < Route path='/work/:workId' element=
                { 
                    < React.Suspense
                    fallback={ < Loading /> } >
                        < LazyProjectDetails />
                    </ React.Suspense> 
                }
                />
                < Route path='/talk' element=
                { 
                    < React.Suspense
                    fallback={ < Loading /> } >
                        < LazyTalk />
                    </ React.Suspense> 
                }
                />

                < Route path='*' element=
                { <React.Suspense
                    fallback={ < Loading /> }>
                        < LazyNotFound />
                    </React.Suspense> } 
                />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes