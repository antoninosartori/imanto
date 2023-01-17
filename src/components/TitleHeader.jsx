import React from 'react'
import '../styles/TitleHeader.css'

const TitleHeader = ({title}) => {
    return(
        <div className='titleHeader-container'>
            <h1 className='titleHeader-text'>{title}</h1>
        </div>
    )
}

export { TitleHeader }