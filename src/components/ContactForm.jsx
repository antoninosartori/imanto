import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactForm.css'
import { MessageSent } from './MessageSent';

const ContactForm = () => {
    const [sent, setSent] = useState(false);
    const [notSent, setNotSent] = useState(false);
    const [isNotValidate, setIsNotValidated] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(!email || !name || !message){
            return setIsNotValidated('complete all the fields');
        }

        if(email && !regexEmail.test(email)){
            return setIsNotValidated('enter a valid email');
        }

        if(message.length < 4){
            return setIsNotValidated('please, write me something more :C');
        }

//      cuando todo esta validado =>
        emailjs
            .sendForm(
                'service_rqdt8w9', 
                'template_wrp9ne5', 
                form.current, 
                '1BLpRCJNGW4edyOyK'
                )
                .then(
                    (result) => {
                        setIsNotValidated(false);
                        setSent(true);
                        console.log(result.text);
                        e.target.reset();
                    }, (error) => {
                        console.log(error.text);
                        setSent(false);
                        setIsNotValidated(false);
                        setNotSent(true);
                    });
    }

    return(
        <form ref={form} onSubmit={sendEmail} className='contactForm'>
            <input className='inputName' type="text" name='name' placeholder='name' autoComplete='nope' />
            <input className='inputEmail' type="email" name='email' placeholder='email' autoComplete='nope' />
            <textarea name="message" className='inputMessage' cols="30" rows="5" placeholder='message'></textarea>
            <div className="buttonContainer">
                <button type='submit'>send</button>
            </div>
            {isNotValidate && !sent && 
                < MessageSent
                    message={isNotValidate}
                    status={false}
                    />
            }
            {sent && !isNotValidate &&
                < MessageSent 
                    message={'thank you for your message!'} 
                    status={true} />
            }
            {notSent && !sent && !isNotValidate &&
                < MessageSent 
                    message={`sorry, we couldn't send the message`} 
                    status={false} />
            }
        </form>
    )
}

export { ContactForm }