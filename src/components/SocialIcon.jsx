import React from 'react'
import '../styles/SocialIcon.css'

const SocialIcon = ({Icon, socialName, linkMedia}) => {
    return(
    <div className='socialIcon-container'>
        <a className='socialIcon-link' href={linkMedia} target='_blank' >
            < Icon />
        </a>
    </div>
    )
}

export { SocialIcon }