import React, { useEffect, useState } from 'react';
import '../styles/Works.css';
import {motion} from 'framer-motion'
// componentes
import { WorkCard } from '../components/WorkCard';
import { TitleHeader } from '../components/TitleHeader';
import { Loading } from '../components/Loading';
const Works = () => {
    const [works, setWorks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch('/works.json',{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
        })
            .then(response => response.json())
            .then(response => {
                setWorks(response);
                setIsLoading(false);
            })
    }, [])

    return(
        <motion.section 
            className='works'
            initial={ {width: "-100%"} }
            animate={ {width: "100%"} }
            exit={ {x: window.innerWidth} }
            transition={{duration: 0.4}}>
            
            < TitleHeader title='works' />

            <div className="worksContainer">
                {!!isLoading && < Loading />}
                {
                    works.length > 0 &&
                    works?.map(work => {
                        return(
                            <WorkCard key={work?.id} 
                                id={work?.id}
                                title={work?.title}
                                subtitle={work?.subtitle}
                                extra={work?.extra}
                                main_image={work?.main_image}
                                other_image={work?.other_image}
                                />
                        )
                    })
                }

            </div>

        </motion.section>
    )
}

export default Works