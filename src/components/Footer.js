import React from 'react';
import "../styles/Footer.css"
import logo from "../images/moonraker-text-under.jpeg"

const Footer = () => {
    return(
        <div class="footer">
            <img class="footerImage" src={logo} alt="logo"/>
        </div>
    )
}

export default Footer