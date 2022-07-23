import React from "react";
import './portfolio.css'
import IMG1 from '../../assets/project1.PNG'
import IMG2 from '../../assets/project2.PNG'
import IMG3 from '../../assets/project3.PNG'
import IMG4 from '../../assets/project4.PNG'
import IMG5 from '../../assets/project5.PNG'
import IMG6 from '../../assets/project6.PNG'

const Portfolio = () => {
    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1}></img>
                    </div>
                        <h3>Realtime Weather App</h3>
                        <div className="portfolio__item-cta">
                        <a href="https://github.com/Tarak698/weatherreact" className="btn1" target='_blank'>Github</a>
                        <a href="https://realtime-weather-apps.netlify.app" className="btn btn-primary" target='_blank'>Live Demo</a>
                        </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2}></img>
                    </div>
                        <h3>Dynamic Portfolio Website</h3>
                        <div className="portfolio__item-cta">
                        <a href="https://github.com/Tarak698/react-portfolio-website" className="btn1" target='_blank'>Github</a>
                        <a href="https://react-portfolio-website-lac.vercel.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
                        </div>
                </article> 

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3}></img>
                    </div>
                        <h3>Arka Jain University Website</h3>
                        <div className="portfolio__item-cta">
                        <a href="https://github.com/Tarak698/university-website" className="btn1" target='_blank'>Github</a>
                        <a href="https://arkajainuniversitywebsite.netlify.app" className="btn btn-primary" target='_blank'>Live Demo</a>
                        </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG4}></img>
                    </div>
                        <h3>Responsive Gadgets Website</h3>
                        <div className="portfolio__item-cta">
                        <a href="https://github.com/Tarak698/hot-gadgets" className="btn1" target='_blank'>Github</a>
                        <a href="https://tarak698.github.io/hot-gadgets/" className="btn btn-primary" target='_blank'>Live Demo</a>
                        </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG5}></img>
                    </div>
                        <h3>Responsive Ecommerce Website</h3>
                        <div className="portfolio__item-cta">
                        <a href="https://github.com/Tarak698/panda-commerce" className="btn1" target='_blank'>Github</a>
                        <a href="https://tarak698.github.io/panda-commerce/" className="btn btn-primary" target='_blank'>Live Demo</a>
                        </div>
                </article> 
                
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG6}></img>
                    </div>
                        <h3>Dynamic Registration Form</h3>
                        <div className="portfolio__item-cta">
                        <a href="https://github.com/Tarak698/registration-form" className="btn1" target='_blank'>Github</a>
                        <a href="https://tarak698.github.io/registration-form/" className="btn btn-primary" target='_blank'>Live Demo</a>
                        </div>
                </article>
            </div>

        </section>
    )
}

export default Portfolio