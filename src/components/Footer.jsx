import React from "react";

function Footer(){
    function handleSubmit(event){
        event.preventDefault();
    }
    return(
        <div className="footer" id="footer">
        <div className="footer-mainbox">
            <div className="contact-details">
                <h2>YOU CAN CONTACT OUR SALE OR RENTAL TEAM <br /> CALL OR EMAIL US:</h2>
                <div className="detail-box">
                    <div className="detail-left">
                        <p>Tel:1234567890</p>
                        <p>Email:contact@xtate.com</p>
                    </div>
                    <div className="detail-right">
                        <p>500 Terry Francine Street <br />
                        San Francisco, CA 94158</p>
                    </div>
                </div>
            </div>

            <div className="contact-form">
                <h2>YOU CAN FILL THE FORM ALTERNATIVELY <br /> FOR CONTACTING US:</h2>
                <form onSubmit={handleSubmit}>
                    <div className="footer-form">
                        <div className="left-form">
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <input type="text" placeholder="Subject"/>
                        </div>
                        <div className="right-form">
                            <textarea placeholder="Message"/>
                        </div>
                    </div>
                    <button type="submit" className="submit-btn">SUBMIT</button>
                </form>
                </div>
            </div>

            <p className="footer-copyright">© 2024 by Xtate Properties.</p>
        </div>
    )
}
export default Footer;
