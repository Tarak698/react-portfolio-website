import React from "react";
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const Footer = () => {
    return(
        <footer>
            <a href="#" className="footer__logo">Taraknath Patra</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
            <a href="https://www.linkedin.com/in/taraknath-patra-59896517a/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Tarak698" target="_blank"><FaGithub/></a>
            <a href="https://leetcode.com/Tarak111/" target="_blank"><SiLeetcode/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Tarak's Portfolio Site. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer