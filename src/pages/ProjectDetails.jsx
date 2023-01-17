import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/ProjectDetails.css'

//componentes
import { Loading } from '../components/Loading';
import { ItemText } from '../components/ItemText';
import { BackArrow } from '../components/BackArrow';
import { FontItem } from '../components/FontItem';

const ProjectDetails = () => {
    const [allWorks, setAllWorks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [project, setProject] = useState([]);
    const { workId } = useParams();

    useEffect(() => {
        setIsLoading(true);

        fetch('/projects.json',{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
            .then(response => response.json())
            .then(response => {
                setAllWorks(response);
                setIsLoading(false);
            })
    }, [workId]);

    useEffect(() => {
        const work = [];
        work.push(allWorks.filter(w => w.id === parseInt(workId)))
        setProject(work)
    },[allWorks])

    return(
        <>
            < BackArrow  />
            {isLoading && < Loading />}
            {project.length > 0 &&
                <section 
                    className='project-details'
                    style={{ backgroundColor: `${project[0][0]?.paint_project[0]?.color_bg}` }}>

                        <div className='project-headerContainer' style={{ backgroundImage: `url(${project[0][0]?.backdrop_path})` }}>
                            <h1 className='project-title'
                                style={{color: `${project[0][0]?.paint_project[0]?.color1}`,
                                        textShadow: `3px 3px 1px ${project[0][0]?.paint_project[0]?.color2}`}
                                        }>
                                { project[0][0]?.project_title }</h1>
                        </div>
                        <div className="container">
                            <div className='project-overviewContainer'>
                                <p className='overview-text'
                                    style={{ color: `${project[0][0]?.paint_project[0]?.color1}` }}
                                    > 
                                        {project[0][0]?.overview} 
                                </p>

                                <div className='overview-linksContainer'>
                                    {project[0][0]?.links.map(link => {
                                        return (
                                            <a 
                                                key={link.link_name} 
                                                className='overview-link' 
                                                href={link.path} 
                                                target='_blank' 
                                                style={{ backgroundColor: `${project[0][0]?.paint_project[0]?.color1}` }}
                                                >
                                                    <span className='overview-linkName'
                                                        style={{ color: `${project[0][0]?.paint_project[0]?.color2}` }}
                                                        >{link.link_name} 
                                                    </span>
                                            </a>
                                        )
                                    })}
                                </div>

                            </div>

                            <div className="project-featuresContainer">

                                {project[0][0]?.images.map(item => {
                                    return(
                                        <div className="featureItem">
                                            <img className='featureImg' src={item?.image_path} alt="feature" />
                                            <p className='featureDescription'
                                                style={{ color: `${project[0][0]?.paint_project[0]?.color1}` }}
                                                >
                                                    {item?.image_description}
                                            </p>
                                        </div>
                                    )
                                })}

                            </div>

                            <div className="project-especificationsContainer">
                                <h3 
                                    className='especifications-title'
                                    style={{textShadow: `3px 3px 1px ${project[0][0]?.paint_project[0]?.color2}`,
                                                color: `${project[0][0]?.paint_project[0]?.color1}`}}
                                        >
                                            project details</h3>
                                {project[0][0]?.project_info.map(info => {
                                    return(
                                        <>
                                            < ItemText 
                                                textHead={'name:'} 
                                                textBody={info?.project_name} 
                                                color={project[0][0]?.paint_project[0]?.color1}
                                            />
                                            < ItemText 
                                                textHead={'year:'} 
                                                textBody={info?.project_year} 
                                                color={project[0][0]?.paint_project[0]?.color1}
                                            />
                                            < ItemText 
                                                textHead={'author:'} 
                                                textBody={info?.project_author} 
                                                color={project[0][0]?.paint_project[0]?.color1}
                                            />
                                            < ItemText 
                                                textHead={'techs:'} 
                                                textBody={info?.project_techs} 
                                                color={project[0][0]?.paint_project[0]?.color1}
                                            />
                                        </>
                                    )
                                })}
                            </div>

                            <div className="project-fonts-colorsContainer">
                                <div className="project-colors">
                                    <h3 
                                        className='especifications-title'
                                        style={{textShadow: `3px 3px 1px ${project[0][0]?.paint_project[0]?.color2}`,
                                                color: `${project[0][0]?.paint_project[0]?.color1}`}}
                                            >
                                                colors and fonts
                                    </h3>
                                    <div className='colorsContainer'>
                                        {project[0][0]?.colors.map(color => {
                                            return(
                                                <div className='colorContainer'
                                                    key={color.name}
                                                    style={{ backgroundColor: `${color.code}` }}
                                                        >
                                                            <p className='colorName'>
                                                                {color.name} 
                                                            </p>
                                                            <span className='colorCode'>
                                                                {color.code}
                                                            </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="fontsContainer">
                                    {project[0][0]?.fonts.map(font => {
                                        return(
                                            <>
                                                < FontItem 
                                                text={`font-family: '${font?.font_name}' ;`}
                                                font={font?.font_name}
                                                color1={project[0][0]?.paint_project[0]?.color1}
                                                color2={project[0][0]?.paint_project[0]?.color2}
                                                />

                                                < FontItem 
                                                text={`.h1: { font-size: ${font?.h1}; }`}
                                                font={font?.font_name}
                                                color1={project[0][0]?.paint_project[0]?.color1}
                                                color2={project[0][0]?.paint_project[0]?.color2}
                                                />

                                                < FontItem 
                                                text={`.h2: { font-size: ${font?.h2}; }`}
                                                font={font?.font_name}
                                                color1={project[0][0]?.paint_project[0]?.color1}
                                                color2={project[0][0]?.paint_project[0]?.color2}
                                                />

                                                < FontItem 
                                                text={`.p: { font-size: ${font?.p}; }`}
                                                font={font?.font_name}
                                                color1={project[0][0]?.paint_project[0]?.color1}
                                                color2={project[0][0]?.paint_project[0]?.color2}
                                                />
                                            </>
                                    )})}
                                </div>
                            </div>

                        </div>
                </section>}
        </>
        )
}

export default ProjectDetails 