import React from 'react'
import '../styles/ItemText.css'

const ItemText = ({textHead, textBody, color}) => {
    return(
        <div className='itemText-container'>
            <h3 
                className='itemText-textHead'
                style={{ color: `${color}` }}
                > 
                    {textHead} 
            </h3>
            <p 
                className='itemText-textBody'
                style={{ color: `${color}` }}
                > 
                    {textBody} </p>
        </div>
    )
}

export { ItemText }

