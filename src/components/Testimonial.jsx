import React from "react";
import Testimonialitem from "./Testimonialitem";
import Testimonialdata from "../Testimonialdata";

function Testimonial(){
    return(
        <div className="testimonial-box">
            <div className="testimonial-heading">
                <h1>CLIENTS THOUGHT</h1>
            </div>
            <div className="review-box">
                 {Testimonialdata.map(newTestimonialitem =>(
                    <Testimonialitem
                    review={newTestimonialitem.review}
                    name = {newTestimonialitem.name}
                    />
                    
                 ))}
            </div>
        </div>
    )
}
export default Testimonial;