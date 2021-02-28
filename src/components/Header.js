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
                    Home
                </button>
                <button class='header-button' onClick={toHome}>
                    Films
                </button>
                <button class='header-button' onClick={toContact}>
                    Pricing
                </button>
                <button class='header-button' onClick={toAbout}>
                    About me
                </button>                
            </div>

            
            <iframe title="headervid"
            width="100%" height="560"
            src="https://www.youtube.com/embed/x8ccDb6n5Wg?autoplay=1&mute=1&playlist=AjPau5QYtYs&loop=1">
            </iframe>
        </div>

    )
}

export default Header