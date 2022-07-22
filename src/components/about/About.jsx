import React from "react";
import './about.css'
import ME from '../../assets/tarakpatra1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return(
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"></img>   
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1+ Years Of Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Users</h5>
                            <small>50+ Users</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>8+ Completed</small>
                        </article>      
                    </div> 

                    <p>
                    Knowledgeable Web Developer brings superior front-end and back-end design to promote organization-specific website presence. Thorough
comprehension of complex HTML, CSS, JavaScript, ReactJS and NodeJS programming languages and libraries to generate custom website design. Detail-oriented approach to maintaining website responsiveness, effectiveness and security.
                    </p>
                    
                    <a href="#contact" className="btn btn-primary">Reach Out</a>
                </div>   
            </div>
        </section>
    )
}

export default About