import React from 'react';

const Footer = () => {
    return(
        <div class="footer">
            <img class="footerImage" src={"/moonraker-text-under.jpeg"} alt="logo"/>
            <a class="footerlink" href="https://www.facebook.com/moonraker.media" target="_blank">Facebook</a> 
            <a class="footerlink" href="https://www.youtube.com/moonraker.media" target="_blank">Youtube</a> 
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