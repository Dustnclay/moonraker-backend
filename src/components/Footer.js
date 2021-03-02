import React from 'react';

const Footer = () => {
    return(
        <div class="footer">
            <div class="footer-top">
                <img class="footerImage" src={"/moonraker-text-under.jpeg"} alt="logo"/>
                <div class="footerlinksdiv">
                    <a class="footerlink" href="https://www.facebook.com/moonraker.media" target="_blank"rel="noreferrer">Facebook</a> 
                    <a class="footerlink" href="https://www.youtube.com/channel/UCS0ETeAkqiuEMFsZ5hrxXMQ" target="_blank" rel="noreferrer">Youtube</a>                 
                </div>                
            </div>

            <span class="footerdiv">
                <p> 
                    Lauren@moonraker.media.com <br/>
                    Colorado Springs, CO 80918<br/>
                    (845) 636 0824
                </p>    
            </span>


        </div>
    )
}

export default Footer