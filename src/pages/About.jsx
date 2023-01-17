import React, { useEffect, useState } from 'react';
import '../styles/About.css';

//componentes
import { TitleHeader } from '../components/TitleHeader';
import { GridComic } from '../components/GridComic';
import { TechsBoard } from '../components/TechsBoard';
import { Loading } from '../components/Loading';
import {motion} from 'framer-motion'
const About = () => {

    const [isLoading, setIsLoading] = useState(false);

    return(
        <motion.section 
            className='about'
            initial={ {width: 0} }
            animate={ {width: "100%"} }
            exit={ {x: window.innerWidth} }
            transition={{duration: 0.4}} >
            

            < TitleHeader title='about' />

            <div className="about-infoContainer">

                { isLoading ? < Loading /> : < GridComic /> }

            </div>

            < TechsBoard />

        </motion.section>
    )
}

export default About