import React from 'react'

//components
import { SocialIcon } from './SocialIcon';

//assets
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

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