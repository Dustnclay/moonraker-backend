import React from 'react';

const Works = ()=>{
    console.log("yayyy")
    return(
        <div class="example-container">
            <div class="example-image-container">
                <img class="example-image" src={'/igImages/lauren001.jpg'} alt='instagram'/>
                <img class="example-image" src={'/igImages/lauren003.jpg'} alt='instagram'/>
                <img class="example-image" src={'/igImages/lauren004.jpg'} alt='instagram'/>
                <img class="example-image" src={'/igImages/lauren005.jpg'} alt='instagram'/>
                <img class="example-image" src={'/igImages/lauren006.png'} alt='instagram'/>
                <img class="example-image" src={'/igImages/lauren007.jpg'} alt='instagram'/>
                <img class="example-image" src={'/igImages/lauren002.jpg'} alt='instagram'/>
                <img class="example-image" src={'/igImages/lauren008.png'} alt='instagram'/>
            </div>
            <div class="example-follow">
                <h2>Follow</h2>
                <a class="iglink" href="https://www.instagram.com/moonraker.media" target="_blank" rel="noreferrer">@MOONRAKER.Media</a> 
                <h2>on Instagram </h2>
            </div>

        </div>
    )
}

export default Works

