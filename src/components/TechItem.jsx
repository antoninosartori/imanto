import React from 'react'
import '../styles/TechItem.css'

const TechItem = ({name, background, strength}) => {
    return(
        <div key={name} className={`techItem ${name}Tech`}>
            <span className='techTitle'>{name}</span>
            {!!background && 
                <img className='techItemImg' src={background} alt={name} />
            }
            <div className="overlayTech">
                {!!strength ? <span className='overlayText'>strong</span> : <span className='overlayText'>intermediate</span>}
            </div>
        </div>
    )
}

export { TechItem }