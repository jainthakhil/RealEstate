import React from "react";
import { Link } from "react-router-dom";


function Hero(){
    return(
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-heading">
                    YOUR <br />
                    DREAMS, OUR <br />
                    EXPERTISE
                </h1>
                <p className="hero-price">
                    ₹20,00,000
                </p>
                <p className="hero-para">
                    Unlock the door to your future with our expert team by your side. <br />
                    Start your search for the ideal property today.
                </p>
                <Link to="/sale" className="hero-readmore">READ MORE</Link>

            </div>

        </div>
    )
}

export default Hero;