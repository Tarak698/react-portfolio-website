import React from "react";
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return(
        <section id="services">
            <h5>What I Offer</h5>  
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Frontend Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p> Created a Responsive and Dynamic multi-page university website using HTML, CSS, Bootstrap & JavaScript.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p> Created a Responsive Frontend part of a Online Gadgets shopping website using HTML, CSS, Bootstrap & JavaScript.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p> Created a Responsive Frontend part of a Ecommerce website using HTML, CSS, Bootstrap & JavaScript.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF FRONTEND */}

                <article className="service">
                    <div className="service__head">
                        <h3>Backend Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p> Created a Responsive and Dynamic Weather App using HTML, CSS, JavaScript & React JS.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p> Created a Responsive and Dynamic Calculator using HTML, CSS & JavaScript.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p> Created a Responsive and Dynamic Portfolio Website using HTML, CSS, JavaScript & React JS.</p>
                        </li>
                    </ul>
                </article>
            </div>  
        </section>
    )
}

export default Services