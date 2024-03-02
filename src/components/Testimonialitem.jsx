import React from "react";

function Testimonialitem(props){
    return(
        <div className="testimonial-item">
            <p>{props.review}</p>
            <h3>{props.name}</h3>
        </div>
    )

}
export default Testimonialitem;