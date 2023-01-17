import React from 'react'
import '../styles/Loading.css'

const Loading = () => {
    return(
        <div className='loadingContainer'>
            <div className='spinner'>
                <span>loading</span>
            </div>
        </div>
    )
}

export { Loading }