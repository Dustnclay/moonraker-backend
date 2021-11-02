import React from 'react';



const Capturing = () => {
    return(
        <div class="capture-body">
            
            <img class="meaningImg" src={'/Meaningful-Moments.png'} alt="capturing lifes moments"/>
            
            <div class="capture-right-half">
                <div class="right-upper">
                    <ul>
                        <li>Weddings</li>
                        <li>Elopments</li>
                        <li>Engagements</li>
                        <li>Birthday Parties</li>
                        <li>Conferences</li>
                        <li>Travel</li>
                        <li>Event/Highlight Promotional</li>
                        <li>Mission Trips</li>
                    </ul>

                    <p class="capture_p">What event do you have coming up?</p>                    
                </div>

                <a class='capture-button' href="mailto:Lauren@moonraker.media.com" >Let's talk!</a>
            </div>
        </div>
    )
}

export default Capturing
