import React from 'react'
import robot from '../../assets/images/character/character.svg'
import './About.scss'
function About() {
    return (
        <section id="about" className="m-2 md:m-5 lg:mt-0">
            <div className="flex flex-wrap flex-row  ml-[0.625rem] shadow-offsetLeft md:h-full">
                <div className="relative z-[1] border-2 border-solid border-black flex-1 p-7 pb-12 w-full md:py-14 md:px-16 md:border-r-0 md:flex-1">
                    <div className="robot-image"></div>
                    {/* <img className="robot-image" src={robot} alt="robot"></img> */}
                </div>
                <div className="relative z-[1] flex-1 p-7 pb-12 border-2 border-solid border-black md:py-14 md:px-16 xl:h-[650px] xl:flex-[1.5]">2</div>
            </div>
        </section>
    )
}

export default About
