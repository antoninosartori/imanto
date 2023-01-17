import React from 'react'
import '../styles/MessageSent.css'
const MessageSent = ({message, status}) => {
    return(
        <div className='messageSent-container'>
            <p className={status ? 'messageSuccess' : 'messageFailed'}>
                {message}
            </p>
        </div>
    )
}

export { MessageSent }