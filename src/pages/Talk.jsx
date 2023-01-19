import React from 'react'
import '../styles/Talk.css'
import { ContactForm } from '../components/ContactForm'
import { TitleHeader } from '../components/TitleHeader'
import { SocialMedia } from '../components/SocialMedia'
import {motion} from 'framer-motion'
const Talk = () => {
    return(
        <motion.section 
            className='talk'
            initial={ {width: 0} }
            animate={ {width: "100%"} }
            exit={ {x: window.innerWidth} }
            transition={{duration: 0.4}}>
            <  TitleHeader title='talk' />

            <div className="contactText">
                <h2>we can talk about anything</h2>
                <h3>i'll love to talk with you</h3>
            </div>

            <div className="contactDivisor-container">

                < SocialMedia />

                < ContactForm />

            </div>


        </motion.section>
    )
}

export default Talk