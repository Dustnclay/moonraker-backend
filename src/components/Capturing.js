import React from 'react';
import "../styles/Capturing.css"
import meaningpic from "./images/Meaningful-Moments.png"


const Capturing = () => {
    return(
        <div class="body">
            
            <img src={meaningpic} alt="capturing lifes moments"/>
            
            <div class="right-half">
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

                    <p class="list_p">What event do you have coming up?</p>                    
                </div>

                <button>Lets talk!</button>
            </div>
        </div>
    )
}

export default Capturing