import React from 'react'
import '../styles/FontItem.css'
const FontItem = ( {text, font , color1, color2} ) => {
    return(
        <div 
            className='font-container'
            style={{backgroundColor: `${color1}`}}
            >
                <span 
                    className='fontName'
                    style={{ fontFamily: `${font}`, color: `${color2}` }}
                        >
                        {text}
                </span>
        </div>

    )
}

export { FontItem }