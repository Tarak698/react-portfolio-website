import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/taraknath-patra-59896517a/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Tarak698" target="_blank"><FaGithub/></a>
            <a href="https://leetcode.com/Tarak111/" target="_blank"><SiLeetcode/></a>
        </div>
    )
}
export default HeaderSocials