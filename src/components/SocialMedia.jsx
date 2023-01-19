import React from 'react'

//components
import { SocialIcon } from './SocialIcon';

//assets
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const socialMediasArr = [
    {
        id: 10,
        Icon: AiFillLinkedin, 
        socialName: 'linkedin',
        linkMedia: 'https://www.linkedin.com/in/antonino-sartori'
    },
    {
        id: 11,
        Icon: AiFillGithub, 
        socialName: 'github',
        linkMedia: 'https://github.com/antoninosartori'
    },
    {
        id: 12,
        Icon: AiFillInstagram, 
        socialName: 'instagram',
        linkMedia: 'https://www.instagram.com/antoninosartori/'
    },
    {
        id: 13,
        Icon: AiFillTwitterCircle, 
        socialName: 'twitter',
        linkMedia: 'https://twitter.com/AntoninoS27/'
    },
]

const SocialMedia = () => {
    return(
        <div className='socialMedia-container'>
            {socialMediasArr.map(socialMedia => {
                return(
                    < SocialIcon
                        key={socialMedia.id}
                        Icon={socialMedia.Icon}
                        socialName={socialMedia.socialName}
                        linkMedia={socialMedia.linkMedia}
                        />
                )
            })}
        </div>
    )
}

export { SocialMedia }