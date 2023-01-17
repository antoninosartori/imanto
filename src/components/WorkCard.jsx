import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/WorkCard.css'

const WorkCard = ({id, title, subtitle, extra, main_image, other_image}) => {

    return(
        <Link to={`/work/${id}`} className='workCard-link'>
            <article className={`workCard card-${id}`} >
                <span className='workExtra'>{extra}</span>
                <h3 className='workTitle'>{title}</h3>
                <h4 className='workSubTitle'>{subtitle}</h4>
                {!!main_image && 
                    <img className='workImage' src={main_image} alt={title} />
                }
                <span className='workNumber'>{`#${id}`}</span>
                {!!other_image &&
                    <img className='work-otherImage' src={other_image} alt="viñeta"  />
                }
            </article>
            <div className="overlay">details</div>
        </Link>
    )
}

export { WorkCard }