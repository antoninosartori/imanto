import React from 'react'
import { SocialMedia } from '../components/SocialMedia'
import '../styles/Home.css'
import { motion } from 'framer-motion'
const Home = () => {
    return(
        <motion.section 
            className='home'
            initial={ {width: 0} }
            animate={ {width: "100%"} }
            exit={ {x: window.innerWidth} }
            transition={{duration: 0.4}}
            >

            <h1>i <span>'</span>m anto</h1>
            <h2>frontend developer</h2>
            <h3>from argentina</h3>
            <h4 className='logo'>a</h4>

            < SocialMedia />

        </motion.section>
    )
}

export default Home