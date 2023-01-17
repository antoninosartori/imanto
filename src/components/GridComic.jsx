import React from 'react';
import '../styles/GridComic.css';

//assets
import talkingViñeta2 from '../assets/icons/nav_icons/viñeta2_comic_white.svg';
import talkingViñeta3 from '../assets/icons/nav_icons/viñeta3_comic_white.svg';
import talkingViñeta5 from '../assets/icons/nav_icons/viñeta5_comic_white.svg';
import kpow from '../assets/icons/nav_icons/kpow!.svg'
import myBack from '../assets/img/back1.png';
import myRight from '../assets/img/profilefoto-comic.png';
import myLeft from '../assets/img/left1.png';
import frontal from '../assets/img/frontal.png';
import ball from '../assets/img/childhood-pelota.png';
import childhood from '../assets/img/childhood2.png';
import friends from '../assets/img/friends.png';

const GridComic = () => {
    return(
        <>
            <div className="gridItem gridItem1">
                    <img className='comicImg' src={myRight} alt="antonino sartori" />
                    <div className="dialogoContainer">
                        <img className='viñetaImg' src={talkingViñeta2} alt="viñeta" />
                        <p className='viñetaParrafo'>my name is antonino</p>
                    </div>
                    <div className="dialogoContainer-2">
                        <img className='viñetaImg' src={talkingViñeta5} alt="viñeta" />
                        <p className='viñetaParrafo'>let me tell you my story</p>
                    </div>
                </div>
                <div className="gridItem gridItem2">
                    <img className='comicImg' src={childhood} alt="antonino sartori child" />
                    <img className='comicImg-ball' src={ball} alt="ball" />
                    <p className='parrafoNarrativo'>I started playing soccer and it's what I wanted to be</p>
                </div>
                <div className="gridItem gridItem3">
                    <img src={friends} alt="friends" className="comicImg" />
                    <p className="parrafoNarrativo">years ago</p>
                    <p className="parrafoNarrativo-2">Life pass by and I decided to be a pe teacher</p>
                </div>
                <div className="gridItem gridItem4">
                    <img src={myBack} alt="antonino sartori" className="comicImg" />
                    <div className="dialogoContainer">
                        <img src={talkingViñeta2}  alt="viñeta" className='viñetaImg' />
                        <p className='viñetaParrafo'>However, life as a teacher was not as expected</p>
                    </div>
                    <div className="dialogoContainer-2">
                        <img src={talkingViñeta3} alt="viñeta" className='viñetaImg' />
                        <p className='viñetaParrafo'>So I went looking for other opportunities.</p>
                    </div>
                    <div className="dialogoContainer-3">
                        <span className='viñetaParrafo'>fizz!</span>
                        <img src={kpow} alt="" className='viñetaImg' />
                    </div>
                </div>
                <div className="gridItem gridItem5">
                    <img src={myLeft} alt="" className='comicImg' />
                    <div className="dialogoContainer">
                        <img src={talkingViñeta3} alt="" className='viñetaImg' />
                        <p className='viñetaParrafo'>that's how I arrive to this world</p>
                    </div>
                </div>
                <div className="gridItem gridItem6">
                    <img src={frontal} alt="" className="comicImg" />
                    <div className="dialogoContainer">
                        <img src={talkingViñeta5} alt="" className='viñetaImg' />
                        <p className='viñetaParrafo'>I've spent two years trying my best to learn every day</p>
                    </div>
                </div>
        </>
    )
}

export { GridComic }