import React from 'react';

const Header = () => {

    // const {push} = seHistory()

    const toHome = () => {
        // push('/Examples')
    }

    const toAbout = () => {
        // push('/About')
    }

    const toMoonraker = () => {
        // push('/Moonraker')
    }

    const toContact = () => {
        // push('/Contact') 
    
    }

    return(
        <div class="header">
            <img class="header-img" src={'moonraker-horizontal.jpeg'} alt="moonraker logo"/>               
            <div class="nav">
                <button class='header-button' onClick={toMoonraker}>
                    HOME
                </button>
                <button class='header-button' onClick={toHome}>
                    FILMS
                </button>
                <button class='header-button' onClick={toContact}>
                    PRICING
                </button>
                <button class='header-button' onClick={toAbout}>
                    ABOUT ME
                </button>                
            </div>

            
            <iframe title="headervid"
            width="100%" height="560"
            src="https://www.youtube.com/embed/Ibcxi9Q84pw?autoplay=1&mute=1&playlist=Ibcxi9Q84pw&loop=1">
            </iframe>
        </div>

    )
}

export default Header