import React from 'react'
import '../styles/TechsBoard.css'
//componentes
import { TechItem } from './TechItem'

//assets
import viñeta1 from '../assets/icons/nav_icons/viñeta1_comic_white.svg'
import viñeta2 from '../assets/icons/nav_icons/viñeta4_comic_white.svg'
import viñeta3 from '../assets/icons/nav_icons/kpow2.svg'

const techs = [
    {
        name: 'html',
        background: viñeta1,
        isStrong: true
    },
    {
        name: 'css',
        background: viñeta2,
        isStrong: true
    },
    {
        name: 'javascript',
        background: viñeta3,
        isStrong: true
    },
    {
        name: 'git',
        background: '',
        isStrong: false
    },
    {
        name: 'php',
        background: '',
        isStrong: false
    },
    {
        name: 'sql',
        background: '',
        isStrong: false
    },
    {
        name: 'english',
        background: '',
        isStrong: false
    },
    {
        name: 'react',
        background: '',
        isStrong: false
    },
]

const TechsBoard = () => {
    return(
        <div className="techsContainer">
                <div className="header-techsContainer">
                    <h2>some techs</h2>
                </div>

                <div className="body-techs">
                    <div className="strongTechs">
                        {techs.filter(tech => tech.isStrong).map(tech => {
                            return (
                                < TechItem 
                                    key={tech.name}
                                    name={tech.name}
                                    background={tech.background}
                                    strength={tech.isStrong} />
                            )
                        })}
                    </div>
                    <div className="intermediateTechs">
                        {techs.filter(tech => !tech.isStrong).map(tech => {
                            return (
                                < TechItem 
                                    key={tech.name}
                                    name={tech.name}
                                    background={tech.background}
                                    strength={tech.isStrong} />
                            )
                        })}  
                    </div>
                </div>
            </div>
    )
}

export { TechsBoard }