import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/BackArrow.css'


const BackArrow = ({}) => {
    const navigate = useNavigate();
    return(
        <div onClick={() => navigate(-1)} className='backArrow'>
            <span>go back</span>
        </div>
    )
}

export { BackArrow }